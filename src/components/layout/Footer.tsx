import { memo } from "react";

/**
 * Footer component with DaisyUI styling and custom theme
 * Memoized to prevent unnecessary re-renders
 */
function FooterComponent() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer footer-center p-10 bg-base-200 border-t-2 border-primary/30 text-base-content rounded" role="contentinfo">
      <nav className="grid grid-flow-col gap-4">
        <a href="/galleries" className="link link-hover hover:text-primary transition-colors">Browse Galleries</a>
        <a href="/creator" className="link link-hover hover:text-primary transition-colors">Become a Creator</a>
        <a href="/support" className="link link-hover hover:text-accent transition-colors">Support</a>
        <a href="/privacy" className="link link-hover hover:text-secondary transition-colors">Privacy Policy</a>
        <a href="/terms" className="link link-hover hover:text-secondary transition-colors">Terms of Service</a>
      </nav>
      
      <aside>
        <p className="font-bold text-lg">
          <span className="text-3xl mr-2">🌙</span>
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Arya Moon Gallery Marketplace
          </span>
        </p>
        <p className="text-sm opacity-70 mt-2">Premium private gallery marketplace</p>
        <p className="text-xs opacity-50 mt-4">© {currentYear} Arya Moon. All rights reserved.</p>
      </aside>
    </footer>
  );
}

export default memo(FooterComponent);
