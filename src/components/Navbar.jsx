import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const THEME_BG = 'bg-[#0f7cb1]';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const dropdownRef = useRef(null);

    const toggleDropdown = () => setServicesOpen(!servicesOpen);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setServicesOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    return (
        <header className={`${THEME_BG} text-white shadow-md fixed top-0 left-0 w-full z-50`}>

            <div className="container mx-auto px-4 py-2 flex justify-between items-center">

                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="border border-white p-1 bg-white/20 rounded-md shadow-md">
                        <img
                            src={logo}
                            alt="Rudraa logo"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <h1 className="text-xl font-bold tracking-widest">RUDRAA TECH</h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 items-center font-medium">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink>
                    <NavLink to="/who" className={({ isActive }) => isActive ? 'underline' : ''}>Who We Are</NavLink>

                    {/* Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="flex items-center gap-1">
                            Services ▾
                        </button>

                        {servicesOpen && (
                            <div className="absolute mt-3 bg-white text-black rounded-lg shadow-xl w-56 py-3 z-50">
                                <Link
                                    to="/services#pms"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                    onClick={() => setServicesOpen(false)}
                                >
                                    PMS Services
                                </Link>
                                <Link
                                    to="/services#engineering"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                    onClick={() => setServicesOpen(false)}
                                >
                                    Engineering Services
                                </Link>
                            </div>
                        )}
                    </div>

                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'underline' : ''}>Projects</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline' : ''}>Contact</NavLink>
                </nav>

                {/* Mobile Button */}
                <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">☰</button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden flex flex-col bg-white text-black px-6 py-4 space-y-4 font-medium">

                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/who" onClick={() => setOpen(false)}>Who We Are</Link>

                    {/* Mobile Dropdown */}
                    <div>
                        <button onClick={toggleDropdown} className="flex w-full justify-between">
                            Services ▾
                        </button>

                        {servicesOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                                <Link
                                    to="/services?p=pms"
                                    className="block"
                                    onClick={() => {
                                        setOpen(false);
                                        setServicesOpen(false);
                                    }}
                                >
                                    PMS Services
                                </Link>

                                <Link
                                    to="/services?p=engineering"
                                    className="block"
                                    onClick={() => {
                                        setOpen(false);
                                        setServicesOpen(false);
                                    }}
                                >
                                    Engineering Services
                                </Link>
                            </div>
                        )}
                    </div>


                    <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
}
