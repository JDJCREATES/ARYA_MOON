import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Join our gallery marketplace
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border shadow-sm">
            <p className="text-center text-gray-600 dark:text-gray-400">
              Sign up form coming soon...
            </p>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-blue-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
