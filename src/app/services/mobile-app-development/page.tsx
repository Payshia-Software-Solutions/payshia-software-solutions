
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ServicesSection } from '@/components/services-section';

export default function MobileAppDevelopmentPage() {
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
                  Mobile App Development
                </h1>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Capture your audience on the go with our exceptional mobile app development services. We build high-performance, feature-packed native and cross-platform applications for both iOS and Android. Our focus on user experience ensures your app is intuitive, engaging, and delivers tangible value to your customers, boosting loyalty and engagement.
                </p>
                <div className="flex gap-4">
                   <Button asChild>
                        <Link href="/contact">Start Your App Project <ArrowRight className="ml-2" /></Link>
                   </Button>
                </div>
              </div>
               <div className="relative h-80 md:h-96 w-full">
                  <Image src="https://placehold.co/600x450.png" data-ai-hint="mobile phone app" alt="Mobile App Development" layout="fill" objectFit="cover" className="rounded-xl shadow-2xl" />
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
