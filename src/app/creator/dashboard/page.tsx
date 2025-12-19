import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export default function CreatorDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Creator Dashboard</h1>
          <Button>Create New Gallery</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              Total Galleries
            </h3>
            <p className="text-3xl font-bold">0</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              Total Sales
            </h3>
            <p className="text-3xl font-bold">$0.00</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              Active Buyers
            </h3>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Your Galleries</h2>
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You haven't created any galleries yet.
            </p>
            <Button>Create Your First Gallery</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
