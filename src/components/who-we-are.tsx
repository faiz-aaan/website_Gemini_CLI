import { Zap, Heart, Bot } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Save Time, Reduce Chaos',
    description: 'Our solutions streamline your workflow, automating tedious tasks so you can focus on what matters most.',
  },
  {
    icon: Heart,
    title: 'Fun Meets Professional',
    description: 'We believe work should be enjoyable. Our tools are powerful, but also intuitive and fun to use.',
  },
  {
    icon: Bot,
    title: 'AI That Just Works',
    description: 'We deliver robust, reliable AI solutions tailored to your specific needs, without the technical headaches.',
  },
];

export function WhoWeAre() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Who We Are</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          We are more than just developers; we are your partners in innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-background shadow-lg border border-border/50">
              <feature.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-headline text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
