import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-6xl mr-3">🌙</span>
              Arya Moon Gallery Marketplace
            </h1>
            <p className="text-xl mb-8 opacity-80">
              Premium Private Image & Video Galleries
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Link href="/galleries" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body items-center text-center">
                  <div className="text-5xl mb-4">🖼️</div>
                  <h2 className="card-title">Browse Galleries</h2>
                  <p className="opacity-70">
                    Explore our collection of exclusive galleries
                  </p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-primary btn-sm">Explore</button>
                  </div>
                </div>
              </Link>
              
              <Link href="/auth/signin" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body items-center text-center">
                  <div className="text-5xl mb-4">🔐</div>
                  <h2 className="card-title">Sign In</h2>
                  <p className="opacity-70">
                    Access your purchased galleries
                  </p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-secondary btn-sm">Sign In</button>
                  </div>
                </div>
              </Link>
              
              <Link href="/creator/dashboard" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body items-center text-center">
                  <div className="text-5xl mb-4">📊</div>
                  <h2 className="card-title">Creator Dashboard</h2>
                  <p className="opacity-70">
                    Manage and sell your galleries
                  </p>
                  <div className="card-actions mt-4">
                    <button className="btn btn-accent btn-sm">Dashboard</button>
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
