import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12 bg-base-200">
        <div className="card w-full max-w-lg bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🔐</div>
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-base-content/70 mt-2">
                Sign in to your account
              </p>
            </div>
            
            <SignInForm />
            
            <div className="divider">OR</div>
            
            <div className="text-center">
              <p className="text-sm text-base-content/70">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="link link-primary">
                  Sign up
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
