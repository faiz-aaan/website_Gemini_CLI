import { Bot, Globe, FileText, Zap, Hammer, Code, DraftingCompass, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Hammer,
    digitalIcon: Bot,
    title: 'AI Automation',
    description: 'Custom bots & workflows that crush repetitive tasks.',
  },
  {
    icon: DraftingCompass,
    digitalIcon: Globe,
    title: 'AI Websites & Apps',
    description: 'Smart, adaptive sites that know what users want.',
  },
  {
    icon: Code,
    digitalIcon: FileText,
    title: 'AI Content Creation',
    description: 'Generate text, images, and video that pops.',
  },
  {
    icon: BrainCircuit,
    digitalIcon: Zap,
    title: 'Custom AI Projects',
    description: 'Your wildest AI ideas, brought to life.',
  },
];

export function Showcase() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">What We Do?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">We build with precision, intelligence, and a touch of magic.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="group relative overflow-hidden border-2 border-transparent transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-2">
            <CardHeader className="items-center text-center">
              <div className="relative h-16 w-16">
                <service.icon className="absolute inset-0 h-16 w-16 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:scale-0 group-hover:opacity-0" strokeWidth={1.5} />
                <service.digitalIcon className="absolute inset-0 h-16 w-16 text-primary scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" strokeWidth={1.5} />
              </div>
              <CardTitle className="font-headline pt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
