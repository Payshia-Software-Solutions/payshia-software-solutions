'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
  description: string;
}

export function HeroSection({ description }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]" />
      
      <div className="container relative z-30 px-4 md:px-6 text-center text-white py-32 md:py-48 lg:py-56">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your Partner in <span className="text-primary">Digital Transformation</span>
          </h1>
          <p className="max-w-[750px] mx-auto text-lg text-white/80 md:text-xl">
            {description}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 pt-4">
            <Button size="lg" asChild>
                <Link href="#services">Explore Our Services</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <Link href="#contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
