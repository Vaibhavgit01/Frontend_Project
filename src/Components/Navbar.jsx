import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiMenu, FiX } from 'react-icons/fi';
import { AuthContext } from '../Components/context/Authcontext';
import { signOut } from 'firebase/auth';
import { auth } from '../Components/firebase'
function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenu(prev => !prev); // toggle
    setShowDropdown(false);   // optional: close dropdown when toggling menu
  };

  const handleLinkClick = () => {
    setIsMenu(false);
    setShowDropdown(false);
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <nav className="w-full bg-gray-500 rounded-2xl md:rounded-3xl px-4">
      <div className="flex items-center justify-between h-20 w-full shadow-xl">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="Logo.png"
            alt="logo"
            className="w-20 p-2 rounded-3xl"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => `${isActive ? "text-blue-500 underline" : "text-white"} text-lg font-semibold`}>
            Home
          </NavLink>
          <NavLink to="/About" className={({ isActive }) => `${isActive ? "text-blue-400 underline" : "text-white"} text-lg font-semibold`}>
            About
          </NavLink>
          <div className="relative group">
            <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center text-white text-lg font-semibold">
              Services
              <IoMdArrowDropdown className={`ml-1 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showDropdown && (
              <ul className="absolute top-full mt-2 bg-black text-white w-40 rounded shadow-md z-50">
                <NavLink to="/onebhk" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-700">1 Bhk</NavLink>
                <NavLink to="/Twobhk" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-700">2 Bhk</NavLink>
                <NavLink to="/Threebhk" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-700">3 Bhk</NavLink>
              </ul>
            )}
          </div>
          <NavLink to="/Contact" className={({ isActive }) => `${isActive ? "text-blue-400 underline" : "text-white"} text-lg font-semibold`}>
            Contact Us
          </NavLink>
        </div>

        {/* Desktop Search/Login */}
        <div className="hidden md:flex items-center gap-3">
          <BsSearch className="text-white text-2xl" />
          {currentUser ? (
            <>
              <NavLink to="/cart" className="text-lg font-semibold bg-white px-4 py-2 rounded-xl text-black hover:bg-gray-200 cursor-pointer">
                🛒 Cart
              </NavLink>
              <button onClick={handleLogout} className="text-lg font-semibold bg-red-500 px-4 py-2 rounded-xl text-white hover:bg-red-700 cursor-pointer">
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/Login" className="text-lg font-semibold bg-white px-4 py-2 rounded-xl text-black hover:bg-gray-200 cursor-pointer">
              Login
            </NavLink>
          )}
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenu ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenu && (
        <div className="md:hidden flex flex-col gap-2 py-4">
          <NavLink to="/" onClick={handleLinkClick} className="text-white text-lg px-2">Home</NavLink>
          <NavLink to="/About" onClick={handleLinkClick} className="text-white text-lg px-2">About</NavLink>
          <button onClick={() => setShowDropdown(!showDropdown)} className="text-white text-lg px-2 flex items-center">
            Services <IoMdArrowDropdown className="ml-1" />
          </button>
          {showDropdown && (
            <div className="pl-4 text-white">
              <NavLink to="/onebhk" onClick={handleLinkClick} className="block py-1">1 Bhk</NavLink>
              <NavLink to="/Twobhk" onClick={handleLinkClick} className="block py-1">2 Bhk</NavLink>
              <NavLink to="/Threebhk" onClick={handleLinkClick} className="block py-1">3 Bhk</NavLink>
            </div>
          )}
          <NavLink to="/Contact" onClick={handleLinkClick} className="text-white text-lg px-2">Contact Us</NavLink>

          {/* Search/Login in mobile */}
          <div className="flex items-center gap-2 px-2 pt-2">
            <BsSearch className="text-white text-2xl" />
            {currentUser ? (
              <>
                <NavLink to="/cart" onClick={handleLinkClick} className="text-white text-lg px-2">🛒 Cart</NavLink>
                <button onClick={handleLogout} className="text-white text-lg px-2">Logout</button>
              </>
            ) : (
              <NavLink to="/Login" onClick={handleLinkClick} className="text-lg font-semibold bg-white px-4 py-1 rounded-xl text-black hover:bg-gray-200">
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
