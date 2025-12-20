import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <Header />
      
      <main className="flex-1 hero">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="text-7xl">🌙</span>
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Arya Moon Gallery Marketplace
            </h1>
            <p className="text-2xl mb-12 text-base-content/80">
              Premium Private Image & Video Galleries
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Link href="/galleries" className="group">
                <div className="card bg-base-200 border-2 border-primary/20 hover:border-primary shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="card-body items-center text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🖼️</div>
                    <h2 className="card-title text-primary text-2xl">Browse Galleries</h2>
                    <p className="text-base-content/70">
                      Explore our collection of exclusive galleries
                    </p>
                    <div className="card-actions mt-6">
                      <button className="btn btn-primary btn-lg group-hover:bg-accent group-hover:text-accent-content group-hover:border-accent transition-colors">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/auth/signin" className="group">
                <div className="card bg-base-200 border-2 border-secondary/20 hover:border-secondary shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="card-body items-center text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🔐</div>
                    <h2 className="card-title text-secondary text-2xl">Sign In</h2>
                    <p className="text-base-content/70">
                      Access your purchased galleries
                    </p>
                    <div className="card-actions mt-6">
                      <button className="btn btn-secondary btn-lg group-hover:bg-accent group-hover:text-accent-content group-hover:border-accent transition-colors">
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/creator/dashboard" className="group">
                <div className="card bg-base-200 border-2 border-accent/20 hover:border-accent shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="card-body items-center text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                    <h2 className="card-title text-accent text-2xl">Creator Dashboard</h2>
                    <p className="text-base-content/70">
                      Manage and sell your galleries
                    </p>
                    <div className="card-actions mt-6">
                      <button className="btn btn-accent btn-lg group-hover:scale-105 transition-transform">
                        Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
