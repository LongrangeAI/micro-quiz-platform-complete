// File: pages/quiz/[quizId].js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { quizDetails } from '../../data/mockData';
import Breadcrumb from '../../components/Breadcrumb';

export async function getStaticPaths() {
  const paths = Object.keys(quizDetails).map((id) => ({
    params: { quizId: id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const quiz = quizDetails[params.quizId] || null;

  return {
    props: {
      initialQuiz: quiz,
      quizId: params.quizId,
    },
  };
}

export default function QuizPage({ initialQuiz, quizId }) {
  const [quiz, setQuiz] = useState(initialQuiz);
  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

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

  if (!quiz) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
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
