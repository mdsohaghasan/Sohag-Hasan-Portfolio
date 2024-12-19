import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../../component/Navbar/Sohag-Hasan-Logo-White.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-extrabold">
          <Link href="/" className="hover:text-gray-400 transition duration-300">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </Link>
        </div>

        {/* menu Item  */}
        <div className="flex justify-end">
          <ul className="flex space-x-5 text-xl">
            <li><Link href="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
            <li><Link href="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
            <li><Link href="/work" className="text-gray-300 hover:text-white transition duration-300">Work</Link></li>
            <li><Link href="/insights" className="text-gray-300 hover:text-white transition duration-300">Insights</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-white transition duration-300">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
