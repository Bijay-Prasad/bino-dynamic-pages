import { ShinyButton } from '@/components/magicui/shiny-button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-md sm:text-xl mb-8">The page you requested doesn't exist!</p>
      <Link href="/" className="">
        <ShinyButton>Return to Home</ShinyButton>
      </Link>
    </div>
  );
}