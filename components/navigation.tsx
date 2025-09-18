'use client';

import { Button } from '@/components/ui/button';
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Close menu on Escape key
  useEffect(() => {
    if (!isMenuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/membership', label: 'Membership' },
    { href: '/sponsorship', label: 'Sponsorship' },
    { href: '/connect', label: 'Connect' },
  ];

  // Focus the active or first item when the mobile menu opens
  useEffect(() => {
    if (!isMenuOpen) return;
    const refs = itemRefs.current.filter(Boolean) as HTMLAnchorElement[];
    if (refs.length === 0) return;
    const activeIdx = navItems.findIndex((i) => i.href === pathname);
    const target = refs[activeIdx >= 0 ? activeIdx : 0];
    const id = window.setTimeout(() => target?.focus(), 0);
    return () => window.clearTimeout(id);
  }, [isMenuOpen, pathname]);

  // Handle ArrowUp/ArrowDown/Home/End within the mobile menu
  function handleMenuKeyDown(e: ReactKeyboardEvent) {
    if (!isMenuOpen) return;
    const refs = itemRefs.current.filter(Boolean) as HTMLAnchorElement[];
    if (refs.length === 0) return;

    const activeEl = document.activeElement as Element | null;
    const currentIndex = refs.findIndex((el) => el === activeEl);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = currentIndex >= 0 ? (currentIndex + 1) % refs.length : 0;
      refs[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev =
        currentIndex >= 0
          ? (currentIndex - 1 + refs.length) % refs.length
          : refs.length - 1;
      refs[prev]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      refs[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      refs[refs.length - 1]?.focus();
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Logo */}
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 ml-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <BoltIcon className="h-5 w-5 text-primary-foreground" />
            </div>
            <Link href="/" className="text-xl font-bold">
              IEEE TAMU
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu / Action Button */}
          <div className="flex items-center mr-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex lg:hidden p-0 size-8"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <XMarkIcon className="size-8" />
              ) : (
                <Bars3Icon className="size-8" />
              )}
            </Button>

            {/* Action Button */}
            {(() => {
              const { href, label } =
                pathname === '/sponsorship'
                  ? { href: '/sponsorship', label: 'Sponsor Us' }
                  : { href: '/membership', label: 'Join Now' };
              return (
                <Link href={href}>
                  <Button className="hidden lg:block bg-accent hover:bg-accent/90 w-32 text-sm">
                    {label}
                  </Button>
                </Link>
              );
            })()}
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div
            className="fixed top-16 left-0 right-0 bottom-0 bg-background border-t shadow-lg"
            role="dialog"
            aria-modal="true"
          >
            <nav
              id="mobile-menu"
              className="flex flex-col py-8 px-6"
              role="menu"
              aria-label="Mobile Navigation"
              onKeyDown={handleMenuKeyDown}
            >
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  role="menuitem"
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={`block text-right text-lg font-medium transition-colors py-4 px-4 rounded-lg hover:bg-muted border border-transparent focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-background
                    ${
                      pathname === item.href
                        ? 'text-primary bg-primary/10'
                        : 'hover:text-primary'
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* <div className="pt-6">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-lg py-6 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {pathname === '/sponsorship' ? 'Sponsor Us' : 'Join Now'}
                </Button>
              </div> */}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
