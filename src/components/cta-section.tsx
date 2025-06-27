import { Button } from "@/components/ui/button";
import Link from 'next/link';

export function CtaSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-24 lg:py-32">
      <div className="container text-center">
        <div className="bg-primary text-primary-foreground rounded-lg p-10 md:p-16 shadow-xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Build Your Next Big Thing?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">
            Let's turn your idea into a reality. Get in touch with our team of experts to discuss your project.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="mailto:contact@apexforge.digital">Get a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
