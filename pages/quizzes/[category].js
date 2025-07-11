// File: pages/quizzes/[category].js

import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../../components/Breadcrumb';
import { quizzes, categories } from '../../data/mockData';

export async function getStaticPaths() {
  const paths = categories.map(cat => ({
    params: { category: cat.slug }, // we are routing by slug
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  const categoryObj = categories.find(cat => cat.slug === category);
  const categoryName = categoryObj ? categoryObj.name : null;
  const categoryQuizzes = categoryName ? quizzes[categoryName] || [] : [];

  return {
    props: {
      categoryQuizzes,
      categoryName: categoryName || category,
    },
  };
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
                  <Link href={`/quiz/${q.id}`}>
                    <div className="p-5 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer transition shadow">
                      <h2 className="text-xl font-semibold">{q.title}</h2>
                    </div>
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

      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </>
  );
}
