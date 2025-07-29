
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-32 pb-20 bg-background/95 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent bg-[length:150%_150%] animate-wave">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8 text-white/80">
            <header className="space-y-4">
                <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-primary">Privacy Policy</h1>
                <p className="text-lg">Last updated: {lastUpdated}</p>
            </header>
            
            <section className="space-y-4">
                <p>
                    Payshia Software Solutions ("us", "we", or "our") operates the website (the "Service").
                    This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">Information Collection and Use</h2>
                <p>
                    We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>

                <h3 className="font-headline text-2xl font-bold text-white">Types of Data Collected</h3>
                <h4 className="font-headline text-xl font-bold text-white/90">Personal Data</h4>
                <p>
                    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Cookies and Usage Data</li>
                </ul>

                <h4 className="font-headline text-xl font-bold text-white/90">Usage Data</h4>
                <p>
                    We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
            </section>
            
            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">Use of Data</h2>
                <p>Payshia Software Solutions uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent and address technical issues</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>By email: info@payshia.com</li>
                    <li>By visiting our contact page.</li>
                    <li>By phone number: +94770481363</li>
                </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
