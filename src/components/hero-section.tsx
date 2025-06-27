'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
  description: string;
}

export function HeroSection({ description }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://placehold.co/1920x1080.png)' }}
        data-ai-hint="abstract background"
      />
      
      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black/70" />

      <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.15),transparent_70%)]" />

      <div className="container relative z-30 px-4 md:px-6 text-center text-white py-32 md:py-48 lg:py-56">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Innovating Tomorrow's<br />
            <span className="text-primary">Solutions</span> Today
          </h1>
          <p className="max-w-[750px] mx-auto text-lg text-foreground/80 md:text-xl">
            {description}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 pt-4">
            <Button size="lg" asChild>
                <Link href="#services">Explore Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
