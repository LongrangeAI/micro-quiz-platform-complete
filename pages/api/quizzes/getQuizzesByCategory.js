// File: pages/api/quizzes/getQuizzesByCategory.js


import { quizzes } from '../../../data/mockData.js';
// Import quizzes mock data from the correct path

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { category } = req.query;

  if (!category) {
    return res.status(400).json({ message: 'Category is required' });
  }

  // Case-insensitive category matching
  const matchedKey = Object.keys(quizzes).find(
    (key) => key.toLowerCase() === category.toLowerCase()
  );

  if (!matchedKey) {
    console.log("❌ No match found for category:", category);
    console.log("Available categories:", Object.keys(quizzes));
    return res.status(404).json({ message: 'No quizzes found for this category' });
  }

  console.log("✅ Matched category:", matchedKey);
  return res.status(200).json(quizzes[matchedKey]);
}
