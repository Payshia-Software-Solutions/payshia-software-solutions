import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold font-headline text-primary">Payshia <span className="text-foreground">Software</span></span>
          </Link>
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Payshia Software. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
