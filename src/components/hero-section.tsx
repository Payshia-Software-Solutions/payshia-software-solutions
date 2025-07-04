'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { generateCompanyIntro, GenerateCompanyIntroOutput } from '@/ai/flows/generate-company-intro';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function HeroSection() {
    const { toast } = useToast();
    const [intro, setIntro] = useState<GenerateCompanyIntroOutput>({ introduction: "Your Partner in Digital Transformation. Payshia Software Solutions delivers cutting-edge software development and IT services tailored to propel your business forward." });
  
    useEffect(() => {
      generateCompanyIntro({ currentTrends: 'AI-driven development and automation' })
        .then(setIntro)
        .catch((e) => {
            console.error(e);
            toast({
                title: "Error",
                description: "Failed to generate company intro. Make sure your GOOGLE_API_KEY is set in .env",
                variant: "destructive"
            })
        });
    }, [toast]);
    
    const headingText = "Innovating Tomorrow's Solutions Today".split(' ');

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(234,179,8,0.3),transparent)]" />
      
      <div className="container relative z-30 px-4 md:px-6 text-center text-white py-12">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {headingText.map((word, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {word === 'Solutions' ? (
                  <span className="text-primary">{word}</span>
                ) : (
                  word
                )}
                {index < headingText.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h1>
          <p 
            className="max-w-[750px] mx-auto text-lg text-white/80 md:text-xl animate-fade-in-up opacity-0" 
            style={{ animationDelay: `${headingText.length * 0.15 + 0.1}s` }}
          >
            {intro.introduction}
          </p>
          <div 
            className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in-up opacity-0" 
            style={{ animationDelay: `${headingText.length * 0.15 + 0.2}s` }}
          >
            <Button size="lg" asChild>
                <Link href="#services">Explore Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary-foreground hover:bg-primary/10">
                <Link href="#contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
