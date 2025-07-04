import { Header } from '@/components/header';
import { ServicesSection } from '@/components/services-section';
import { Footer } from '@/components/footer';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-24">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
