// File: pages/quizzes/[category].js

import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../../components/Breadcrumb';

export async function getServerSideProps(context) {
  const { category } = context.params;

  const apiBase = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  try {
    const res = await fetch(
      `${apiBase}/api/quizzes/getQuizzesByCategory?category=${encodeURIComponent(category)}`
    );
    const data = await res.json();

    if (!res.ok) {
      return { notFound: true };
    }

    return {
      props: {
        categoryQuizzes: data,
        categoryName: category,
      },
    };
  } catch (error) {
    console.error(`❌ Error fetching quizzes for category: ${category}`, error);
    return {
      props: {
        categoryQuizzes: [],
        categoryName: category,
      },
    };
  }
}

export default function CategoryPage({ categoryQuizzes, categoryName }) {
  const quizzes = categoryQuizzes || [];
  const category = categoryName;

  return (
    <>
      <Head>
        <title>{category ? `${category} Quizzes` : 'Loading...'}</title>
        <meta name="description" content={`Quizzes about ${category}`} />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb category={category} />

          <h1 className="text-4xl font-bold mb-6 text-center capitalize drop-shadow">
            {category} Quizzes
          </h1>

          {quizzes.length === 0 ? (
            <p className="text-center text-gray-400">No quizzes found for this category.</p>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2">
              {quizzes.map((q) => (
                <li key={q.id}>
                  <Link href={`/quiz/${q.id}`} legacyBehavior>
                    <a>
                      <div className="p-5 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer transition shadow">
                        <h2 className="text-xl font-semibold">{q.title}</h2>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-400 hover:text-blue-200 transition">
              &larr; Back to Categories
            </Link>
          </div>
        </div>
      </main>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
