import { Header } from '@/components/header';
import { CareersSection } from '@/components/careers-section';
import { Footer } from '@/components/footer';

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-24">
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
}
