import { Header } from '@/components/header';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Footer } from '@/components/footer';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-24">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
