
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCashRegister } from "react-icons/fa"; // POS-like icon

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-950 shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo with Icon */}
                    <div className="flex items-center space-x-2 text-2xl font-bold text-indigo-600">
                        <FaCashRegister />
                        <Link to="/">EasyPOS</Link>
                    </div>

                    {/* Center Menu */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-gray-300 font-medium">
                        <Link to="/" className="hover:text-indigo-400 transition">HOME</Link>
                        <Link to="/about" className="hover:text-indigo-400 transition">ABOUT</Link>
                        <Link to="/contact" className="hover:text-indigo-400 transition">CONTACT</Link>
                    </div>

                    {/* Right Side Buttons */}
                    <div className="hidden md:flex space-x-4 ml-auto">
                        <Link to="/dashboard" className="px-4 py-1 rounded-full bg-green-600 text-white text-sm hover:bg-green-700 transition">
                            Dashboard
                        </Link>
                        <Link to="/login" className="px-4 py-1 rounded-full border border-red-400 text-red-400 text-sm hover:bg-red-600 hover:text-white transition">
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
                    <Link to="/" className="block text-gray-700 hover:text-indigo-600">HOME</Link>
                    <Link to="/about" className="block text-gray-700 hover:text-indigo-600">ABOUT</Link>
                    <Link to="/contact" className="block text-gray-700 hover:text-indigo-600">CONTACT</Link>
                    <Link to="/dashboard" className="block text-gray-700 hover:text-green-600">DASHBOARD</Link>
                    <Link to="/login" className="block text-gray-700 hover:text-red-600">LOGIN</Link>
                </div>
            )}
        </nav>
    );
};


