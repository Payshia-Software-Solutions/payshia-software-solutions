const logos = [
    {
      name: 'PhotoShelter',
      svg: (
        <svg width="150" height="24" viewBox="0 0 150 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="PhotoShelter logo">
          <path d="M12 0L24 12L12 24L0 12L12 0Z" fillOpacity="0.8"/>
          <text x="30" y="16" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">PhotoShelter</text>
        </svg>
      ),
    },
    {
      name: 'copy.ai',
      svg: (
        <svg width="90" height="24" viewBox="0 0 90 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="copy.ai logo">
          <text x="0" y="16" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">copy.ai</text>
        </svg>
      ),
    },
    {
      name: 'Flatfile',
      svg: (
          <svg width="120" height="24" viewBox="0 0 120 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Flatfile logo">
              <path d="M0 4H16V20H0V4Z" />
              <path d="M6 0H22V16H6V0Z" fillOpacity="0.7"/>
              <text x="30" y="16" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">Flatfile</text>
          </svg>
      )
    },
    {
      name: 'AI21 Labs',
      svg: (
          <svg width="100" height="24" viewBox="0 0 100 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="AI21 Labs logo">
              <text x="0" y="16" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">AI21labs</text>
          </svg>
      )
    },
    {
      name: 'Saleshood',
      svg: (
          <svg width="140" height="24" viewBox="0 0 140 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Saleshood logo">
              <text x="0" y="16" fontFamily="Arial, sans-serif" fontSize="16" letterSpacing="0.1em">SALESH</text>
              <circle cx="98" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="108" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <text x="118" y="16" fontFamily="Arial, sans-serif" fontSize="16" letterSpacing="0.1em">D</text>
          </svg>
      )
    }
  ];
  
  export function TrustedBySection() {
    return (
      <section className="w-full py-20 md:py-24 bg-transparent border-t border-b border-white/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8">
            <p className="text-sm tracking-widest uppercase text-muted-foreground">
              Trusted by leading companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
              {logos.map((logo) => (
                <div key={logo.name} className="flex items-center justify-center text-muted-foreground/70 hover:text-foreground transition-colors">
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
