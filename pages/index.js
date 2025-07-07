import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// ✅ UPDATED IMPORT PATH
import { categories } from './api/quizzes/_data/mockData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Micro-Quiz Platform</title>
        <meta name="description" content="Take micro quizzes by topic" />
      </Head>

      {/* 🔲 Background with overlay */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/9HQpqQrw/Screenshot-2025-07-06-105111.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        {/* Branding */}
        <div className="absolute top-4 left-6 z-10 text-white text-xl font-bold tracking-wider">
          © Amit Singh
        </div>

        {/* Heading */}
        <div className="text-center text-white relative z-10 mt-10 mb-6">
          <h1 className="text-4xl font-bold drop-shadow">CHLO TEST DE ✍️</h1>
          <p className="text-lg mt-2 drop-shadow">"परीक्षा से परिणाम तक"</p>
        </div>

        {/* ✅ Grid of Categories with Error Prevention */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 text-white max-w-5xl mx-auto">
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/quizzes/${encodeURIComponent(cat.name)}`}
                prefetch={true}
              >
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-white/20 hover:scale-105 duration-300 ease-in-out transition cursor-pointer text-center">
                  <Image
                    src={cat.icon || '/default-icon.png'}
                    width={50}
                    height={50}
                    alt={cat.name}
                    className="mx-auto mb-3 rounded-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/default-icon.png';
                    }}
                    unoptimized
                  />
                  <h2 className="text-xl font-semibold">{cat.name}</h2>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-white col-span-full text-center">
              ⚠️ No categories found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
