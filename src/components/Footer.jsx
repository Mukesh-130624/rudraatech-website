import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const THEME_BG = "bg-[#0f7cb1]";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${THEME_BG} text-white py-10`}>
            <div className="container mx-auto px-6 sm:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-black transition">Home</Link></li>
                            <li><Link to="/who" className="hover:text-black transition">Who We Are</Link></li>
                            <li><Link to="/services" className="hover:text-black transition">Services</Link></li>
                            <li><Link to="/projects" className="hover:text-black transition">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-black transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* ADDRESS */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Address</h3>
                        <p className="text-sm hover:text-black transition cursor-pointer">
                            Office No-3 G.F, Building No-9,
                        </p>
                        <p className="text-sm hover:text-black transition cursor-pointer">
                            Yashvant Srusthi, Boisar, 401501
                        </p>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>

                        <p
                            className="text-sm flex items-center gap-2 hover:text-black cursor-pointer transition"
                            onClick={() => window.location.href = "mailto:saurabh.sankhe@rudraatech.in"}
                        >
                            <FaEnvelope /> saurabh.sankhe@rudraatech.in
                        </p>

                        <p
                            className="text-sm hover:text-black cursor-pointer transition mt-2"
                            onClick={() => window.location.href = "tel:9960449917"}
                        >
                            📞 +91-9960449917
                        </p>

                        <p className="text-sm hover:text-black transition mt-2">GSTIN: 27CSKPS3628A1ZO</p>

                        <div className="flex gap-4 text-xl mt-4">
                            <FaLinkedin
                                className="cursor-pointer hover:text-black transition"
                                onClick={() => window.open("https://linkedin.com", "_blank")}
                            />
                            <FaWhatsapp
                                className="cursor-pointer hover:text-black transition"
                                onClick={() => window.open("https://wa.me/919960449917", "_blank")}
                            />
                        </div>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="text-center mt-10 text-sm opacity-90">
                    © {currentYear} RUDRAA TECH. All rights reserved.
                </div>
            </div>
        </footer>

    );
}
