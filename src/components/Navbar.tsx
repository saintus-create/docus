'use client';
import { baseOptions } from '@/lib/layout.shared';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';

export function Navbar() {
  const options = baseOptions();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="shrink-0 border-b bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground rounded-md"
      >
        Skip to content
      </a>

      <nav className="flex h-16 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full max-w-7xl">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg text-white">{options.nav?.title}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {options.links?.map((link, index) => (
              <Link
                key={index}
                href={typeof link.url === 'string' ? link.url : '#'}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-white/80',
                  'text-white/60'
                )}
              >
                {typeof link.text === 'string' ? link.text : 'Link'}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'w-9 h-9'
            )}
          >
            <SearchIcon className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'md:hidden w-9 h-9'
            )}
          >
            {mobileMenuOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500">
          <div className="container px-4 py-4 space-y-2">
            {options.links?.map((link, index) => (
              <Link
                key={index}
                href={typeof link.url === 'string' ? link.url : '#'}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-white/60 hover:text-white"
              >
                {typeof link.text === 'string' ? link.text : 'Link'}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}