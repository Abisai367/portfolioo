import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome} from 'react-icons/fa';
import { FaUserGroup } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { LuServer } from "react-icons/lu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray/80 backdrop-blur-md border-b border-gray-100 mb-8">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-4xl font-bold tracking-tight" onClick={handleLinkClick}>
          Abisai
        </Link>

        <nav className="hidden md:flex space-x-10 text-lg font-medium text-gray-400">
          <Link to="/home" className="hover:text-green-100 bg-gray/80 transition flex"><FaHome className="mr-2 size-8"/>Home</Link>
          <Link to="/skills" className="hover:text-green-100 transition flex"> <LuServer className="mr-2 size-8"/> Skills</Link>
          <Link to="/project" className="hover:text-green-100 transition flex"><GrProjects className="mr-2 size-8"/> Projects</Link>
          <Link to="/contact" className="hover:text-green-100 transition flex"> <FaUserGroup className="mr-2 size-8"/> Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/hire" className="inline-flex items-center justify-center px-4 h-9 text-lg font-medium text-white bg-gray-700 hover:bg-gray-800 rounded-lg transition">
            Hire Me
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-b mb-8 rounded-md border-gray-100 bg-gray-400 px-6 py-4 flex flex-col space-y-4 text-lg font-medium text-gray-600">
          <Link to="/home" onClick={handleLinkClick} className="hover:text-green-600 transition flex"> <FaHome className="mr-2 size-6"/>Home</Link>
          <Link to="/skills" onClick={handleLinkClick} className="hover:text-green-600 transition flex"> <LuServer className="mr-2 size-6"/>Skills</Link>
          <Link to="/project" onClick={handleLinkClick} className="hover:text-green-600 transition flex"> <GrProjects className="mr-2 size-6"/>Projects</Link>
          <Link to="/contact" onClick={handleLinkClick} className="hover:text-green-600 transition flex"> <FaUserGroup className="mr-2 size-6"/>Contact</Link>
          <Link to="/hire" onClick={handleLinkClick} className="inline-flex items-center justify-center px-4 h-9 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition w-full">
            Hire Me
          </Link>
        </nav>
      )}
    </header>
  );
}
