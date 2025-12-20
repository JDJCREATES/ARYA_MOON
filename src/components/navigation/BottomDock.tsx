"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

interface PageSnapshot {
  path: string;
  title: string;
  icon: string;
  timestamp: number;
}

/**
 * Bottom Navigation Dock with Page Stack Preview
 * Shows navigation icons at the bottom with a stack of recent pages on the right
 */
export default function BottomDock() {
  const pathname = usePathname();
  const [pageStack, setPageStack] = useState<PageSnapshot[]>([]);
  const [showStack, setShowStack] = useState(false);

  // Navigation items
  const navItems = [
    { path: "/", icon: "🏠", label: "Home" },
    { path: "/galleries", icon: "🖼️", label: "Galleries" },
    { path: "/auth/signin", icon: "🔐", label: "Sign In" },
    { path: "/creator/dashboard", icon: "📊", label: "Dashboard" },
  ];

  // Page titles for stack
  const pageTitles: Record<string, string> = {
    "/": "Home",
    "/galleries": "Browse Galleries",
    "/auth/signin": "Sign In",
    "/auth/signup": "Sign Up",
    "/creator/dashboard": "Creator Dashboard",
  };

  useEffect(() => {
    // Add current page to stack
    const currentPage: PageSnapshot = {
      path: pathname,
      title: pageTitles[pathname] || pathname,
      icon: navItems.find(item => item.path === pathname)?.icon || "📄",
      timestamp: Date.now(),
    };

    setPageStack(prev => {
      // Remove duplicate if exists
      const filtered = prev.filter(p => p.path !== pathname);
      // Add to top, keep last 5
      return [currentPage, ...filtered].slice(0, 5);
    });
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Bottom Navigation Dock */}
      <div className="btm-nav btm-nav-lg bg-base-200 border-t-2 border-base-300 shadow-2xl z-50">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={isActive(item.path) ? "active bg-primary text-primary-content" : ""}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="btm-nav-label text-xs">{item.label}</span>
          </Link>
        ))}
        
        {/* Stack Toggle Button */}
        <button
          onClick={() => setShowStack(!showStack)}
          className={`${showStack ? "active bg-secondary text-secondary-content" : ""}`}
        >
          <span className="text-2xl">📚</span>
          <span className="btm-nav-label text-xs">Pages</span>
          {pageStack.length > 0 && (
            <div className="badge badge-sm badge-error absolute top-2 right-2">
              {pageStack.length}
            </div>
          )}
        </button>
      </div>

      {/* Page Stack Sidebar - Right Side */}
      <div 
        className={`fixed right-0 bottom-20 h-[calc(100vh-10rem)] w-80 bg-base-200 border-l-2 border-base-300 shadow-2xl transform transition-transform duration-300 z-40 overflow-hidden ${
          showStack ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Recent Pages</h3>
            <button 
              onClick={() => setShowStack(false)}
              className="btn btn-sm btn-circle btn-ghost"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3">
            {pageStack.length === 0 ? (
              <div className="text-center text-base-content/50 py-8">
                <p>No pages visited yet</p>
              </div>
            ) : (
              pageStack.map((page, index) => (
                <Link
                  key={page.timestamp}
                  href={page.path}
                  onClick={() => setShowStack(false)}
                  className={`block`}
                >
                  <div
                    className={`card bg-base-100 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
                      index === 0 
                        ? "border-primary scale-105" 
                        : "border-base-300 hover:border-primary"
                    } ${index === 0 ? "ring-2 ring-primary ring-offset-2 ring-offset-base-200" : ""}`}
                  >
                    <div className="card-body p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{page.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold truncate ${index === 0 ? "text-primary" : ""}`}>
                            {page.title}
                          </h4>
                          <p className="text-xs text-base-content/60 truncate">
                            {page.path}
                          </p>
                        </div>
                        {index === 0 && (
                          <div className="badge badge-primary badge-sm">
                            Current
                          </div>
                        )}
                      </div>
                      
                      {/* Mini preview mockup */}
                      <div className="mt-3 bg-base-300 rounded-lg p-2 text-xs opacity-70">
                        <div className="h-16 bg-base-100 rounded flex items-center justify-center">
                          <span className="text-2xl opacity-50">{page.icon}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-base-300">
            <button 
              onClick={() => setPageStack([])}
              className="btn btn-sm btn-outline btn-error w-full"
            >
              Clear History
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {showStack && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setShowStack(false)}
        />
      )}
    </>
  );
}
