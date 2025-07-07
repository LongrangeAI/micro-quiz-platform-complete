import Link from 'next/link';

export default function Breadcrumb({ category, quizTitle }) {
  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        </li>

        {category && (
          <>
            <li>/</li>
            <li>
              <Link href={`/quizzes/${encodeURIComponent(category)}`} className="text-blue-600 hover:underline">
                {category}
              </Link>
            </li>
          </>
        )}

        {quizTitle && (
          <>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">{quizTitle}</li>
          </>
        )}
      </ul>
    </nav>
  );
}
