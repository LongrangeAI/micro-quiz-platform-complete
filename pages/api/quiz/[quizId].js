// File: pages/api/quiz/[quizId].js (ensure these logs are 
import { quizzes, quizDetails } from '../quizzes/_data/mockData'; // This is the correct path for this file!

export default function handler(req, res) {
  const { quizId } = req.query; 

  console.log('API Request received for quizId (individual quiz):', quizId); // ADD THIS
  console.log('Type of quizId (individual quiz):', typeof quizId); // ADD THIS

  if (!quizId) {
    console.log('Error: Quiz ID parameter is missing in query string.'); // ADD THIS
    return res.status(400).json({ error: 'Quiz ID parameter is missing.' });
  }

  const quiz = quizDetails[quizId];

  console.log('Value of quizDetails[quizId] before check (individual quiz):', quiz); // ADD THIS

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    console.log(`Error: Quiz not found or has no questions for quizId: ${quizId}`); // ADD THIS
    return res.status(404).json({ error: 'Quiz not found or has no questions' });
  }

  console.log(`Success: Found quiz for quizId: ${quizId}`); // ADD THIS
  res.status(200).json(quiz);
}