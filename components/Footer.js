import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-6 shadow-inner w-full mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Profile Info */}
        <div className="flex items-center gap-4">
          <Image
            src="https://i.ibb.co/f7ZnZMN/1702694277187.jpg"
            alt="Amit Singh"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">Amit Singh</h1>
            <p className="text-sm text-gray-300">
              Email: <a href="mailto:singhamitsingh010@gmail.com" className="text-blue-400 hover:underline">singhamitsingh010@gmail.com</a>
            </p>
            <p className="text-sm text-gray-300">
              Phone: <a href="tel:9990902905" className="text-blue-400 hover:underline">9990902905</a>
            </p>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col items-center md:items-end text-sm">
          <div className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/amit621"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-blue-400 hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://github.com/LongrangeAI"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-blue-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </Link>
          </div>
          <p className="mt-3 text-gray-400 text-xs text-center md:text-right">
            &copy; {currentYear} Amit Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
