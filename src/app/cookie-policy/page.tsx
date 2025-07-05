
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function CookiePolicyPage() {
    const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-32 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8 text-white/80">
            <header className="space-y-4">
                <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-primary">Cookie Policy</h1>
                <p className="text-lg">Last updated: {lastUpdated}</p>
            </header>
            
            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">What are cookies?</h2>
                <p>
                    This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used, and how to manage your cookie settings.
                </p>
                <p>
                    Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">How do we use cookies?</h2>
                <p>
                    As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
                </p>
                <p>
                    The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
                </p>
            </section>
            
            <section className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-white pt-4 border-t border-primary/20">How can you control the cookie preferences?</h2>
                <p>
                    You can manage your cookie preferences by clicking on the "Settings" button and enabling or disabling the cookie categories on the popup according to your preferences.
                </p>
                <p>
                    Should you decide to change your preferences later through your browsing session, you can click on the "Privacy & Cookie Policy" tab on your screen. This will display the consent notice again enabling you to change your preferences or withdraw your consent entirely.
                </p>
                <p>
                    In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more about how to manage and delete cookies, visit wikipedia.org, www.allaboutcookies.org.
                </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
