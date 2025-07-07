import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Breadcrumb from '../../components/Breadcrumb.js';

export default function QuizPage({ initialQuiz, quizId }) {
  const [quiz, setQuiz] = useState(initialQuiz);
  const [loading, setLoading] = useState(!initialQuiz);
  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!quiz) {
      setLoading(true);
      fetch(`/api/quiz/${quizId}`)
        .then((res) => res.json())
        .then((data) => {
          setQuiz(data);
          setLoading(false);
        })
        .catch(() => {
          toast.error('❌ Failed to load quiz.');
          setLoading(false);
        });
    }
  }, [quiz, quizId]);

  const handleOptionClick = (qIndex, option) => {
    if (userAnswers[qIndex] !== undefined) return;

    const correctAnswer = quiz.questions[qIndex].answer;
    const isCorrect = option === correctAnswer;

    setUserAnswers((prev) => ({ ...prev, [qIndex]: option }));
    if (isCorrect) setScore((prev) => prev + 1);

    if (Object.keys(userAnswers).length + 1 === quiz.questions.length) {
      setTimeout(() => {
        setShowScore(true);
        toast.success('✅ Quiz completed!');
      }, 300);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <p className="text-xl animate-pulse">Loading quiz...</p>
      </main>
    );
  }

  if (!quiz) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <p className="text-xl text-red-400">❌ Quiz not found.</p>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{quiz.title || 'Quiz'} | Micro Quiz Platform</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb quizTitle={quiz.title} />

          <h1 className="text-3xl font-bold mb-6 drop-shadow">{quiz.title}</h1>
          <p className="mb-6 text-gray-300 italic">
            {quiz.description || 'No description provided.'}
          </p>

          <ul className="space-y-6">
            {quiz.questions && quiz.questions.length > 0 ? (
              quiz.questions.map((q, index) => (
                <li key={index} className="bg-white/10 p-6 rounded-lg shadow-lg">
                  <h2 className="font-semibold text-lg mb-2">
                    {index + 1}. {q.question}
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((opt, i) => {
                      const isSelected = userAnswers[index] === opt;
                      const isCorrect = quiz.questions[index].answer === opt;
                      const isWrongSelected = isSelected && !isCorrect;

                      return (
                        <li
                          key={i}
                          onClick={() => handleOptionClick(index, opt)}
                          className={`px-4 py-2 rounded cursor-pointer transition 
                            ${userAnswers[index]
                              ? isCorrect
                                ? 'bg-green-500/60'
                                : isWrongSelected
                                ? 'bg-red-500/50'
                                : 'bg-white/20'
                              : 'bg-white/20 hover:bg-white/30'}`}
                        >
                          {opt}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))
            ) : (
              <li className="text-gray-400">No questions available.</li>
            )}
          </ul>

          {showScore && (
            <div className="mt-8 text-center text-xl font-semibold text-green-400">
              🏁 You scored {score} out of {quiz.questions.length}
            </div>
          )}

          <div className="mt-10 text-center">
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

// Server-side fetch
export async function getServerSideProps(context) {
  const { quizId } = context.params;

  try {
    const protocol = context.req?.headers['x-forwarded-proto'] || 'http';
    const host = context.req?.headers.host;
    const baseUrl = host ? `${protocol}://${host}` : '';
    const apiUrl = `${baseUrl}/api/quiz/${quizId}`;

    const res = await fetch(apiUrl);
    const data = await res.json();

    if (!res.ok) {
      return { notFound: true };
    }

    return {
      props: {
        initialQuiz: data,
        quizId,
      },
    };
  } catch (error) {
    console.error('Error fetching quiz:', error);
    return {
      props: {
        initialQuiz: null,
        quizId,
      },
    };
  }
}
