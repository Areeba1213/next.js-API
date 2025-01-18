// components/Navbar.jsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4 text-white">
      <div className="text-2xl font-bold">
        <Link href="/">Areeba</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-yellow-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-yellow-300">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

