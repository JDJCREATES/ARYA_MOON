import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="card w-full max-w-lg bg-base-200 border-2 border-primary/30 shadow-2xl shadow-primary/10">
          <div className="card-body">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🔐</div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-base-content/70 mt-2 text-lg">
                Sign in to your account
              </p>
            </div>
            
            <SignInForm />
            
            <div className="divider text-base-content/50">OR</div>
            
            <div className="text-center">
              <p className="text-sm text-base-content/70">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="link link-primary hover:link-accent font-semibold">
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
