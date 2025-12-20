import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GalleriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-6xl mr-3">🖼️</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Browse Galleries
            </span>
          </h1>
          <p className="text-xl text-base-content/70">
            Explore our collection of exclusive private galleries.
          </p>
        </div>
        
        {/* Filters */}
        <div className="card bg-base-200 border border-primary/20 shadow-xl shadow-primary/5 mb-8">
          <div className="card-body">
            <h3 className="card-title text-primary">Filters</h3>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-sm btn-primary">All</button>
              <button className="btn btn-sm btn-outline btn-primary hover:btn-accent">Photography</button>
              <button className="btn btn-sm btn-outline btn-primary hover:btn-accent">Art</button>
              <button className="btn btn-sm btn-outline btn-primary hover:btn-accent">Fashion</button>
              <button className="btn btn-sm btn-outline btn-primary hover:btn-accent">Lifestyle</button>
            </div>
          </div>
        </div>
        
        {/* Empty state */}
        <div className="hero bg-base-200 border-2 border-secondary/20 rounded-box shadow-xl min-h-[400px]">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="text-7xl mb-6">📭</div>
              <h2 className="text-3xl font-bold mb-4 text-primary">No galleries available yet</h2>
              <p className="mb-8 text-base-content/70 text-lg">
                Check back soon for exclusive content!
              </p>
              <button className="btn btn-accent btn-lg hover:scale-105 transition-transform">
                <span className="mr-2">🔔</span>
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
