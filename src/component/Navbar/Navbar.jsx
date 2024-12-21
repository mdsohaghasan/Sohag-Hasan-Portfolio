// import Link from 'next/link';
// import React from 'react';
// import Image from 'next/image';
// import logo from '../../component/Navbar/Sohag-Hasan-Logo-White.png';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 p-6 shadow-lg">
//       <div className="container mx-auto ">
//         <div className="text-white text-2xl font-extrabold">
//           <Link href="/" className="hover:text-gray-400 transition duration-300">
//             <Image src={logo} alt="Sohag Logo" width={100} height={100} />
//           </Link>
//         </div>

//         {/* menu Item  */}
//         <div className="flex">
//           <ul className="text-xl text-red">
//             <li><Link href="/" className="text-red-500 hover:text-green transition duration-300">Home</Link></li>
//             <li><Link href="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
//             <li><Link href="/work" className="text-gray-300 hover:text-white transition duration-300">Work</Link></li>
//             <li><Link href="/insights" className="text-gray-300 hover:text-white transition duration-300">Insights</Link></li>
//             <li><Link href="/blog" className="text-gray-300 hover:text-white transition duration-300">Blog</Link></li>
//             <li><Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
//           </ul>
//         </div>
//         {/*  */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React from 'react'



// Grabbing everything required
const btn = document.querySelector("button.mobile-menu-btn");
const menu = document.querySelector(".mobile-menu");

// Event listener
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


const Navbar = () => {
  return (
    <div>
      <nav>
          <div class="fixed top-0 left-0 right-0 bg-white rounded-md shadow-2xl">
            <div class="flex justify-between items-center max-w-6xl mx-auto p-4">
              {/* <!--Logo and Title--> */}
              <div>
                <a href="#" class="flex space-x-3">
                  <span class="font-bold text-2xl">Tailwind Navbar</span>
                </a>
              </div>

              {/* <!--Menu Items--> */}
              <div class="hidden md:block space-x-4">
                <a href="/about" class="">About</a>
                <a href="/pricing" class="">Pricing</a>
                <a href="/contact" class="">Contact</a>
              </div>

              {/* <!--Hamburger Menu Button--> */}
              <div class="md:hidden flex">
                <button class="mobile-menu-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="mobile-menu hidden text-center">
              <a href="/about" class="block py-2 px-4">About</a>
              <a href="/pricing" class="block py-2 px-4">Pricing</a>
              <a href="/contact" class="block py-2 px-4">Contact</a>
            </div>
          </div>
        </nav>

        {/* <div class="px-4 py-32 text-center">
          <h1 class="p-4 font-extrabold text-4xl">This is a Tailwind CSS Navbar Tutorial!</h1>
          <p class="max-w-prose mx-auto text-md">Hello everyone, this is a sample Tailwind CSS navbar tutorial. I am really bad at making navbars, so this is my attempt to do so lol. My goal is to learn how to make full stack websites with Next.js, Tailwind CSS, MongoDB, and Strapi.</p>
        </div> */}
    </div>
  )
}

export default Navbar