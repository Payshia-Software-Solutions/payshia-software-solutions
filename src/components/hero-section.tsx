'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateCompanyIntro } from '@/ai/flows/generate-company-intro';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

interface HeroSectionProps {
  initialIntro: string;
}

export function HeroSection({ initialIntro }: HeroSectionProps) {
  const [intro, setIntro] = useState(initialIntro);
  const [trends, setTrends] = useState('AI-driven development, low-code platforms, and increased focus on cybersecurity.');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGenerateIntro = () => {
    startTransition(async () => {
      try {
        const result = await generateCompanyIntro({ currentTrends: trends });
        if (result?.introduction) {
          setIntro(result.introduction);
          toast({
            title: "Introduction Updated",
            description: "The company introduction has been regenerated.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to generate a new introduction. Make sure your API key is set.",
          });
        }
      } catch (e: any) {
        console.error(e);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to generate intro. Please ensure your GOOGLE_API_KEY is set in the .env file.",
        });
      }
    });
  };

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
            ApexForge Digital
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {intro}
          </p>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 pt-4">
            <Button size="lg" asChild>
                <a href="#portfolio">View Our Work</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
                <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
        <Card className="flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="font-headline">AI-Powered Introduction</CardTitle>
            <CardDescription>
              Customize our introduction by providing current software development trends.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="trends">Current Trends</Label>
                    <Textarea
                        id="trends"
                        placeholder="e.g., AI integration, serverless architecture..."
                        value={trends}
                        onChange={(e) => setTrends(e.target.value)}
                        className="min-h-[100px]"
                        disabled={isPending}
                    />
                </div>
                <Button onClick={handleGenerateIntro} disabled={isPending} className="w-full">
                    {isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        'Regenerate Introduction'
                    )}
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
