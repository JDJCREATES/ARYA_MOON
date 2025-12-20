import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CreatorDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">
            <span className="text-5xl mr-3">📊</span>
            Creator Dashboard
          </h1>
          <button className="btn btn-primary">
            <span className="mr-2">➕</span>
            Create New Gallery
          </button>
        </div>
        
        {/* Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl mb-8 w-full">
          <div className="stat">
            <div className="stat-figure text-primary text-3xl">
              🖼️
            </div>
            <div className="stat-title">Total Galleries</div>
            <div className="stat-value text-primary">0</div>
            <div className="stat-desc">All time</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary text-3xl">
              💰
            </div>
            <div className="stat-title">Total Sales</div>
            <div className="stat-value text-secondary">$0.00</div>
            <div className="stat-desc">Revenue this month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-accent text-3xl">
              👥
            </div>
            <div className="stat-title">Active Buyers</div>
            <div className="stat-value text-accent">0</div>
            <div className="stat-desc">Last 30 days</div>
          </div>
        </div>
        
        {/* Galleries section */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Your Galleries</h2>
            
            <div className="hero bg-base-200 rounded-box min-h-[300px]">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold mb-4">You haven't created any galleries yet</h3>
                  <p className="mb-6 text-base-content/70">
                    Start creating your first gallery and share your work with the world!
                  </p>
                  <button className="btn btn-primary btn-lg">
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
