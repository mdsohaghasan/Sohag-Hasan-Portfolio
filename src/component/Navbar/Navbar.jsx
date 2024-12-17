import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="/">MyLogo</a>
        </div>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
          <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
          <li><Link href="/service" className="text-gray-300 hover:text-white">Service</Link></li>
          <li><Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
          <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
          <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

