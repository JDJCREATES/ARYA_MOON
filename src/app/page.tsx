import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center max-w-4xl">
        <h1 className="text-4xl font-bold text-center">
          Arya Moon Gallery Marketplace
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400">
          Premium Private Image & Video Galleries
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
          <Link 
            href="/galleries"
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">Browse Galleries</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our collection of exclusive galleries
            </p>
          </Link>
          
          <Link 
            href="/auth/signin"
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">Sign In</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Access your purchased galleries
            </p>
          </Link>
          
          <Link 
            href="/creator/dashboard"
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">Creator Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Manage and sell your galleries
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
