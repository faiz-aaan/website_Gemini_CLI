import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Showcase } from '@/components/showcase';
import { WhoWeAre } from '@/components/who-we-are';
import { IdeaValidator } from '@/components/idea-validator';
import { ContactSection } from '@/components/contact-section';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TypingAnimation } from '@/components/typing-animation';
import Orb from '@/components/Orb';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section id="home" className="relative h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-stretch p-4 overflow-hidden">
          <div className="flex flex-col items-center text-center w-full lg:w-[65%] z-10">
            <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-headline tracking-tighter font-bold animate-fade-in min-h-[1.2em] w-[12ch]">
              <TypingAnimation text="carpenter.ai_" />
            </h1>
            <p className="relative z-10 mt-4 text-2xl md:text-3xl lg:text-4xl font-headline text-foreground font-light animate-fade-in animation-delay-500">
                Turning Work into Play with AI
            </p>
            <p className="relative z-10 mt-4 max-w-xl text-lg md:text-xl text-muted-foreground font-body animate-fade-in animation-delay-1000">
                Your partner in digital craftsmanship. We build intelligent automation and AI-powered tools to help your business create, innovate, and grow.
            </p>
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-[1500ms]">
            <Button asChild size="lg" className="h-11 px-8 bg-gradient-to-r from-[#92B4F4] to-[#7868E6] text-white hover:opacity-90 transition-opacity">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
          </div>
          <div className="w-full lg:w-[35%] relative h-full flex justify-center items-center">
            <Orb
              className="relative w-full h-full lg:w-[70%] lg:h-[70%] lg:mx-auto lg:my-auto z-[-1]"
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>
          <Link href="#what-we-do" aria-label="Scroll down" className="absolute bottom-10 animate-bounce">
            <ArrowDown className="w-8 h-8 text-muted-foreground" />
          </Link>
        </section>

        <section id="what-we-do" className="py-24 sm:py-32 bg-secondary">
          <Showcase />
        </section>

        <section id="who-we-are" className="py-24 sm:py-32">
          <WhoWeAre />
        </section>

        <section id="ai-tools" className="py-24 sm:py-32 bg-secondary">
          <IdeaValidator />
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
