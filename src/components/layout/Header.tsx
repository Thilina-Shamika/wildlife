import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fetchHeaderMenu } from '@/lib/api';
import type { HeaderACF } from '@/types/wordpress';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState<HeaderACF | null>(null);

  useEffect(() => {
    fetchHeaderMenu().then(setHeader);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {header?.logo ? (
              <Link href="/" className="block">
                <Image src={header.logo.url} alt={header.logo.alt} width={120} height={60} priority />
              </Link>
            ) : (
              <span className="text-xl font-bold">Logo</span>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {header?.menu?.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.page_link.url}
                  target={item.page_link.target || '_self'}
                  rel={item.page_link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.page_name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {header?.menu?.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.page_link.url}
                  target={item.page_link.target || '_self'}
                  rel={item.page_link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    'hover:bg-gray-50'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.page_name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 