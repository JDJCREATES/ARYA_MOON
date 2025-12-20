import Link from "next/link";
import { memo } from "react";

/**
 * Header component with navigation
 * Memoized to prevent unnecessary re-renders
 */
function HeaderComponent() {
  return (
    <header className="border-b" role="banner">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="text-2xl font-bold" aria-label="Arya Moon home">
          Arya Moon
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/galleries" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Galleries
          </Link>
          <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/auth/signin" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default memo(HeaderComponent);
