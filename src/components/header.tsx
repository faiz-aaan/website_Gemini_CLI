'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ThemeSwitcher } from './theme-switcher';
import { Logo } from './logo';

const navLinks = [
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#who-we-are', label: 'Who We Are' },
  { href: '#ai-tools', label: 'AI Tools' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="text-base font-medium transition-colors text-foreground/80 hover:text-foreground rounded-md px-3 py-2 hover:bg-accent"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="container max-w-4xl p-[1px] bg-gradient-to-r from-[#92B4F4]/50 to-[#7868E6]/50 rounded-full shadow-lg">
        <div className="h-16 w-full flex items-center justify-between rounded-full bg-background/80 p-2 px-6 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80">
          <Link href="#home">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <ThemeSwitcher />
          </nav>
          <div className="flex md:hidden items-center">
          <ThemeSwitcher />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-6 pt-10 items-center">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
