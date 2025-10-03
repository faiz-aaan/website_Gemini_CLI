'use client';

import { useActionState, useEffect, useMemo, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { validateIdeaAction, type IdeaValidatorState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, Loader2, Sparkles, ThumbsUp, Wand2, Target, Handshake } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useToast } from '@/hooks/use-toast';
import { PolarGrid, PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { cn } from '@/lib/utils';
import type { ChartConfig } from '@/components/ui/chart';
import Link from 'next/link';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto">
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Wand2 className="mr-2 h-4 w-4" />
      )}
      Validate Idea
    </Button>
  );
}

export function IdeaValidator() {
  const initialState: IdeaValidatorState = { submitted: false };
  const [state, formAction] = useActionState(validateIdeaAction, initialState);
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if(state?.error) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: state.error,
      })
    }
  }, [state, toast])
  
  const feasibilityData = useMemo(() => {
    const score = state?.result?.feasibilityScore ?? 0;
    return [{ name: 'feasibility', value: score * 10, fill: 'hsl(var(--primary))' }];
  }, [state?.result?.feasibilityScore]);

  const marketDemandData = useMemo(() => {
    const score = state?.result?.marketDemandScore ?? 0;
    return [{ name: 'market', value: score * 10, fill: 'hsl(var(--accent))' }];
  }, [state?.result?.marketDemandScore]);

  const chartConfig = {
    feasibility: { label: 'Feasibility' },
    market: { label: 'Market Demand' }
  } satisfies ChartConfig;


  const ScoreChart = ({ data, score, label, icon: Icon }: { data: any[], score: number, label: string, icon: React.ElementType }) => (
    <Card className="flex flex-col items-center justify-center p-4 text-center">
      <h3 className="text-lg font-headline font-semibold mb-2 flex items-center gap-2"><Icon className="h-5 w-5" />{label}</h3>
      <div className="relative w-full h-[200px]">
        <ChartContainer config={chartConfig} className="absolute inset-0">
          <RadialBarChart 
            data={data} 
            startAngle={90}
            endAngle={-270}
            innerRadius="70%"
            outerRadius="100%"
            barSize={12}
          >
            <PolarGrid gridType="circle" radialLines={false} stroke="none" className="fill-muted"/>
            <RadialBar 
              dataKey="value"
              background
              cornerRadius={10} 
            />
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
          </RadialBarChart>
        </ChartContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className={cn(
            "text-4xl font-bold font-headline",
            score * 10 >= 80 && "text-green-500",
            score * 10 >= 50 && score * 10 < 80 && "text-yellow-500",
            score * 10 < 50 && "text-red-500"
          )}>
            {score * 10}<span className="text-2xl text-muted-foreground">%</span>
          </p>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">AI Idea Validator</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Have a brilliant idea? Let our AI analyze its feasibility and give you a head start on turning your vision into reality.
        </p>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <Lightbulb className="text-primary"/>
            Submit Your Idea
          </CardTitle>
          <CardDescription>
            Describe your business or project idea below. The more detail, the better the analysis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <Textarea
              name="idea"
              placeholder="e.g., 'An app that uses AI to create personalized bedtime stories for children based on their interests and daily activities.'"
              rows={5}
              className="text-base"
              maxLength={1000}
            />
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <SubmitButton />
              <p className="text-sm text-muted-foreground">
                Please note: AI analysis can take up to 30 seconds.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>

      {state.submitted && state.result && isClient && (
        <div className="mt-8 animate-fade-in max-w-3xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScoreChart data={feasibilityData} score={state.result.feasibilityScore} label="Feasibility" icon={Wand2} />
            <ScoreChart data={marketDemandData} score={state.result.marketDemandScore} label="Market Demand" icon={Target} />
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <ThumbsUp className="h-5 w-5 text-primary" />
              <h3 className="font-headline text-lg font-semibold">Reasoning</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{state.result.reason}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-headline text-lg font-semibold">Suggestions</h3>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {state.result.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <Handshake className="h-5 w-5 text-primary" />
              <h3 className="font-headline text-lg font-semibold">How We Can Help</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{state.result.howWeCanHelp}</p>
               <Button asChild size="sm" className="bg-gradient-to-r from-[#92B4F4] to-[#7868E6] text-white hover:opacity-90 transition-opacity">
                 <Link href="#contact">Get Started With Us</Link>
               </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
