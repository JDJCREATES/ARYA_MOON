import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GalleriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-5xl mr-3">🖼️</span>
            Browse Galleries
          </h1>
          <p className="text-xl text-base-content/70">
            Explore our collection of exclusive private galleries.
          </p>
        </div>
        
        {/* Filters */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h3 className="card-title">Filters</h3>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-sm">All</button>
              <button className="btn btn-sm btn-outline">Photography</button>
              <button className="btn btn-sm btn-outline">Art</button>
              <button className="btn btn-sm btn-outline">Fashion</button>
              <button className="btn btn-sm btn-outline">Lifestyle</button>
            </div>
          </div>
        </div>
        
        {/* Empty state */}
        <div className="hero bg-base-200 rounded-box shadow-xl min-h-[400px]">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="text-6xl mb-4">📭</div>
              <h2 className="text-2xl font-bold mb-4">No galleries available yet</h2>
              <p className="mb-6 text-base-content/70">
                Check back soon for exclusive content!
              </p>
              <button className="btn btn-primary">
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
