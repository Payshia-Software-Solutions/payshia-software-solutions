
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ServicesSection } from '@/components/services-section';

export default function UiUxDesignPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 to-transparent">
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Our Services
                </div>
                <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  UI/UX Design
                </h1>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                    Great products are built on great experiences. Our UI/UX design services focus on creating intuitive, beautiful, and user-friendly interfaces that captivate your audience. We conduct thorough research and user testing to design products that are not only aesthetically pleasing but also highly functional and accessible, ensuring maximum user satisfaction and engagement.
                </p>
                <div className="flex gap-4">
                   <Button asChild>
                        <Link href="/contact">Discuss Your Design Needs <ArrowRight className="ml-2" /></Link>
                   </Button>
                </div>
              </div>
               <div className="relative h-80 md:h-96 w-full">
                  <Image src="https://placehold.co/600x450.png" data-ai-hint="wireframe design" alt="UI/UX Design" layout="fill" objectFit="cover" className="rounded-xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
