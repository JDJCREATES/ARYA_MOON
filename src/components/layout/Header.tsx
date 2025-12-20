import Link from "next/link";
import { memo } from "react";

/**
 * Header component with DaisyUI navbar
 * Memoized to prevent unnecessary re-renders
 */
function HeaderComponent() {
  return (
    <div className="navbar bg-base-100 shadow-lg" role="banner">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl" aria-label="Arya Moon home">
          <span className="text-2xl">🌙</span>
          Arya Moon
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/galleries">
              <span className="mr-1">🖼️</span>
              Galleries
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="mr-1">ℹ️</span>
              About
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <Link href="/auth/signin" className="btn btn-primary btn-sm">
          <span className="mr-1">🔐</span>
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default memo(HeaderComponent);
