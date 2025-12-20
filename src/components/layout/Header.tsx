import Link from "next/link";
import { memo } from "react";

/**
 * Header component with DaisyUI navbar and custom theme
 * Memoized to prevent unnecessary re-renders
 */
function HeaderComponent() {
  return (
    <div className="navbar bg-base-200 border-b-2 border-primary/30 shadow-lg shadow-primary/5" role="banner">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl hover:bg-primary/10" aria-label="Arya Moon home">
          <span className="text-3xl mr-2">🌙</span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
            Arya Moon
          </span>
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/galleries" className="hover:bg-primary/10 hover:text-primary transition-colors">
              <span className="mr-1">🖼️</span>
              Galleries
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:bg-primary/10 hover:text-primary transition-colors">
              <span className="mr-1">ℹ️</span>
              About
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <Link href="/auth/signin" className="btn btn-primary hover:btn-accent transition-colors">
          <span className="mr-1">🔐</span>
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default memo(HeaderComponent);
