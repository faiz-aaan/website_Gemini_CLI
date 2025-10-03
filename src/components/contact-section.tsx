import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Lightbulb } from "lucide-react";
import { GradientButton } from "./gradient-button";
import Link from "next/link";

export function ContactSection() {
  return (
    <div id="contact" className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Let's Build Together</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Have a project in mind or just want to learn more? Reach out.
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Form */}
          <div className="p-8">
            <h3 className="font-headline text-2xl font-semibold mb-2">Send a Message</h3>
            <p className="text-muted-foreground mb-4">We'll get back to you as soon as possible.</p>
             <div className="!mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm mb-6">
                <div className="flex items-center gap-2 font-semibold">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <span>Have an idea?</span>
                </div>
                <p className="text-muted-foreground mt-1">
                    <Link href="#ai-tools" className="underline hover:text-primary">Try our AI Idea Validator</Link> to get instant feedback before you reach out.
                </p>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-type">Business Type</Label>
                <Input id="business-type" placeholder="e.g., SaaS, E-commerce, Startup" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help?" />
              </div>
               <Button asChild className="w-full">
                <a href="mailto:carpenter.ai.agency@gmail.com">Send</a>
              </Button>
            </form>
          </div>

          {/* Right Side: Quick Chat */}
          <div className="bg-secondary/50 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-headline text-2xl font-semibold mb-6">Prefer a quick chat?</h3>
            <div className="flex flex-col gap-4 w-full max-w-xs">
                            <Link
                              href="#"
                              className="flex items-center justify-start gap-3 text-muted-foreground transition-colors hover:text-primary"
                            >
                              <Instagram className="h-6 w-6 shrink-0" />
                              <span>@carpenter.ai</span>
                            </Link>
                            <GradientButton 
                href="mailto:carpenter.ai.agency@gmail.com"
                as="a"
                className="flex items-center justify-center text-lg px-6 py-3 w-full gap-2"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </GradientButton>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
