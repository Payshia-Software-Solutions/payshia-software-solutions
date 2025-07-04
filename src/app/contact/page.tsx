import { Header } from '@/components/header';
import { CtaSection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4">
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
