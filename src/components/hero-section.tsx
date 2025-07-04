'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { generateCompanyIntro, GenerateCompanyIntroOutput } from '@/ai/flows/generate-company-intro';
import { useEffect, useState, useMemo } from 'react';
import { useToast } from '@/hooks/use-toast';

export function HeroSection() {
    const { toast } = useToast();
    const [intro, setIntro] = useState<GenerateCompanyIntroOutput>({ introduction: "Payshia Software Solutions delivers cutting-edge software development and IT services tailored to propel your business forward." });
  
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
    
    // Typing effect state
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const typingSpeed = 120;
    const erasingSpeed = 70;
    const pauseDuration = 2000;
    const rotatingTexts = useMemo(() => [
        "Innovating Tomorrow's Solutions Today",
        "Your Partner in Digital Transformation",
        "Building the Future of Software"
    ], []);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % rotatingTexts.length;
            const fullText = rotatingTexts[i];

            if (isDeleting) {
                // Erasing
                setText(currentText => fullText.substring(0, currentText.length - 1));
            } else {
                // Typing
                setText(currentText => fullText.substring(0, currentText.length + 1));
            }

            if (!isDeleting && text === fullText) {
                // Pause at end of typing
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && text === '') {
                // Finished erasing
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, rotatingTexts]);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(234,179,8,0.3),transparent)]" />
      
      <div className="container relative z-30 px-4 md:px-6 text-center text-white py-12">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl flex items-center justify-center h-24 md:h-36 lg:h-48">
            <span>{text}</span>
            <span className="text-primary animate-blink ml-1">|</span>
          </h1>
          <p 
            className="max-w-[750px] mx-auto text-lg text-white/80 md:text-xl" 
          >
            {intro.introduction}
          </p>
          <div 
            className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 pt-4" 
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
