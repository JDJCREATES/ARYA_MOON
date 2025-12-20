import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CreatorDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold">
            <span className="text-6xl mr-3">📊</span>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Creator Dashboard
            </span>
          </h1>
          <button className="btn btn-accent btn-lg hover:scale-105 transition-transform">
            <span className="mr-2">➕</span>
            Create New Gallery
          </button>
        </div>
        
        {/* Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-2xl shadow-primary/10 mb-8 w-full bg-base-200 border-2 border-primary/20">
          <div className="stat bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="stat-figure text-primary text-4xl">
              🖼️
            </div>
            <div className="stat-title text-base-content/70">Total Galleries</div>
            <div className="stat-value text-primary text-5xl">0</div>
            <div className="stat-desc text-base-content/60">All time</div>
          </div>
          
          <div className="stat bg-gradient-to-br from-secondary/10 to-secondary/5">
            <div className="stat-figure text-secondary text-4xl">
              💰
            </div>
            <div className="stat-title text-base-content/70">Total Sales</div>
            <div className="stat-value text-secondary text-5xl">$0.00</div>
            <div className="stat-desc text-base-content/60">Revenue this month</div>
          </div>
          
          <div className="stat bg-gradient-to-br from-accent/10 to-accent/5">
            <div className="stat-figure text-accent text-4xl">
              👥
            </div>
            <div className="stat-title text-base-content/70">Active Buyers</div>
            <div className="stat-value text-accent text-5xl">0</div>
            <div className="stat-desc text-base-content/60">Last 30 days</div>
          </div>
        </div>
        
        {/* Galleries section */}
        <div className="card bg-base-200 border-2 border-secondary/20 shadow-2xl shadow-secondary/10">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-6 text-secondary">Your Galleries</h2>
            
            <div className="hero bg-base-300 border border-primary/10 rounded-box min-h-[300px]">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <div className="text-7xl mb-6">🎨</div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">You haven't created any galleries yet</h3>
                  <p className="mb-8 text-base-content/70 text-lg">
                    Start creating your first gallery and share your work with the world!
                  </p>
                  <button className="btn btn-accent btn-lg hover:scale-105 transition-transform">
                    <span className="mr-2">➕</span>
                    Create Your First Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
