import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Arya Moon
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/galleries" className="hover:text-gray-600">
            Galleries
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/auth/signin" className="hover:text-gray-600">
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
