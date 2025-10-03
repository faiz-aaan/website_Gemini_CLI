import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-8 px-4 sm:px-6 lg:px-8 gap-4">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <p className="text-muted-foreground text-sm text-center md:text-left">© {new Date().getFullYear()} Carpenter.ai. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-primary">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-primary">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
