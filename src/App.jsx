import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from "./components/ScrollToTop";
import Services from './pages/Services';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <ScrollToTop />
            <main className="flex-1">

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/who" element={<WhoWeAre />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}