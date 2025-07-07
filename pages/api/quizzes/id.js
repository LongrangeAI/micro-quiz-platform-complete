// File: pages/api/quizzes/id.js

import { quizDetails } from '../../../data/mockData.js';

export default function handler(req, res) {
  const { id } = req.query;
  const quiz = quizDetails[id];

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return res.status(404).json({ error: 'Quiz not found or has no questions' });
  }

  res.status(200).json(quiz);
}