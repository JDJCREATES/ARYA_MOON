import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export default function GalleryDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Gallery Media Preview */}
            <div className="lg:col-span-2">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Gallery Preview (ID: {params.id})</p>
              </div>
            </div>
            
            {/* Gallery Info & Purchase */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-4">Gallery Title</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This is a placeholder for the gallery description. 
                  The actual content will be loaded from the API.
                </p>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold">$0.00</span>
                  <span className="text-sm text-gray-500">0 items</span>
                </div>
                
                <Button className="w-full" size="lg">
                  Purchase Gallery
                </Button>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-2">Creator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Creator information
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
