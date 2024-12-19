import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-extrabold">
          <Link href="/" className="hover:text-gray-400 transition duration-300">MyLogo</Link>
        </div>
        <ul className="flex space-x-8">
          <li><Link href="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
          <li><Link href="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
          <li><Link href="/work" className="text-gray-300 hover:text-white transition duration-300">Work</Link></li>
          <li><Link href="/insights" className="text-gray-300 hover:text-white transition duration-300">Insights</Link></li>
          <li><Link href="/blog" className="text-gray-300 hover:text-white transition duration-300">Blog</Link></li>
          <li><Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



