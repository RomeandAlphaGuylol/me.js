import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`bg-gray-900 text-white min-h-screen py-12 px-4 ${inter.className}`}>
      <title>Home - Rome</title>
      <main className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-400 mb-4">
            Oi'! Welcome
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Uhh
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          <a
            href="https://github.com/jshbb"
            className="rounded-lg bg-purple-400 text-gray-900 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out p-4 shadow-lg text-center w-64"
          >
            <h2 className="text-xl font-semibold mb-2">Github</h2>
            <p className="text-gray-900">
              Explore my web development projects and contributions on GitHub.
            </p>

          </a>
          <a
            href="/connect"
            className="rounded-lg bg-purple-400 text-gray-900 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out p-4 shadow-lg text-center w-64"
          >
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-900">
              Let's connect! Reach out to me via some social medias.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
