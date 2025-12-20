import { memo } from "react";

/**
 * Footer component with DaisyUI styling
 * Memoized to prevent unnecessary re-renders
 */
function FooterComponent() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded" role="contentinfo">
      <nav className="grid grid-flow-col gap-4">
        <a href="/galleries" className="link link-hover">Browse Galleries</a>
        <a href="/creator" className="link link-hover">Become a Creator</a>
        <a href="/support" className="link link-hover">Support</a>
        <a href="/privacy" className="link link-hover">Privacy Policy</a>
        <a href="/terms" className="link link-hover">Terms of Service</a>
      </nav>
      
      <aside>
        <p className="font-bold">
          <span className="text-2xl mr-2">🌙</span>
          Arya Moon Gallery Marketplace
        </p>
        <p className="text-sm opacity-70">Premium private gallery marketplace</p>
        <p className="text-xs opacity-50 mt-2">© {currentYear} Arya Moon. All rights reserved.</p>
      </aside>
    </footer>
  );
}

export default memo(FooterComponent);
