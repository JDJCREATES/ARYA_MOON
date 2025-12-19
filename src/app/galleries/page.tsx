import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GalleriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Browse Galleries</h1>
        
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400">
            Explore our collection of exclusive private galleries.
          </p>
        </div>
        
        {/* Filters would go here */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-500">Filters coming soon...</p>
        </div>
        
        {/* Gallery grid would go here */}
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No galleries available yet. Check back soon!
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
