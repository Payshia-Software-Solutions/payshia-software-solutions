import { Button } from "@/components/ui/button";
import Link from 'next/link';

export function CtaSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-destructive text-primary-foreground">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Ready to transform your business with innovative software solutions?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Let's discuss how we can help you achieve your digital transformation goals
          </p>
          <div className="pt-4">
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="#contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
