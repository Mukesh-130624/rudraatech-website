import React from 'react';
import HeroSlider from '../components/HeroSlider';

// Client Logos
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.jpg";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.webp";
import client6 from "../assets/clients/client6.jpg";
import client7 from "../assets/clients/client7.png";

// Icons for Stats Section
import { FaBuilding, FaUsers, FaTools, FaClock, FaChevronRight } from "react-icons/fa";

export default function Home() {

    const stats = [
        { icon: <FaBuilding size={60} className="text-blue-700" />, num: "10+", title: "Completed Projects" },
        { icon: <FaUsers size={60} className="text-blue-700" />, num: "7+", title: "Happy Clients" },
        { icon: <FaTools size={60} className="text-blue-700" />, num: "10+", title: "Industries Served" },
        { icon: <FaClock size={60} className="text-blue-700" />, num: "13+", title: "Years Experience" }
    ];

    const clients = [
        { img: client1, name: "Lavino Kapur Cottons Pvt Ltd" },
        { img: client2, name: "Arlex Chemi Pvt Ltd" },
        { img: client3, name: "Oncure Drugs Private Ltd" },
        { img: client4, name: "Seven Scientific Laboratories Pvt Ltd" },
        { img: client5, name: "Bochem Pvt Ltd" },
        { img: client6, name: "Pioneer Industrial Corporation" },
        { img: client7, name: "Aarti Drugs Pvt Ltd" }
    ];


    return (
        <>

            {/* HERO SLIDER */}
            <HeroSlider />


            {/* INTRO SECTION */}
            <section className="container mx-auto px-4 py-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-heading text-gray-800 tracking-wide">
                        Introduction
                    </h2>
                    <div className="w-20 h-1 bg-blue-700 mx-auto mt-4"></div>
                </div>

                <p className="text-gray-700 md:text-xl font-sans text-base leading-relaxed 
                  max-w-5xl mx-auto text-center">
                    We are pleased to introduce ourselves as a growing Project Management & Engineering
                    Service provider. We are professionally managed by experienced & qualified personnel who
                    are actively involved in day-to-day working of all projects undertaken. As a result, we
                    consistently complete quality projects within a committed timeframe.
                </p>
            </section>


            {/* SERVICES SECTION */}
            <section id="services" className="py-12 bg-white">
                <div className="container mx-auto px-6">

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-heading text-gray-800 
                       tracking-wide text-center">
                        Our PMC & Engineering Services
                    </h2>
                    <div className="w-20 h-1 bg-blue-700 mx-auto mt-4 mb-12"></div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Service Card 1 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg 
                            hover:shadow-2xl hover:-translate-y-2 
                            transition duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-blue-700">
                                Project Management
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Land Surveyor Reports</li>
                                <li>Factory Layout Plan & Equipment Layout</li>
                                <li>Structural & Architectural Consultancy</li>
                                <li>Project Execution Supervision & Inspection</li>
                            </ul>
                        </div>

                        {/* Service Card 2 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg 
                            hover:shadow-2xl hover:-translate-y-2 
                            transition duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-blue-700">
                                Fabrication & Piping
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>MS Structural Fabrication Work</li>
                                <li>HDPE, PP, MS-HDPE, Metal Piping</li>
                                <li>FRP Coating Work</li>
                                <li>Steel Work Fabrication</li>
                            </ul>
                        </div>

                        {/* Service Card 3 */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg 
                            hover:shadow-2xl hover:-translate-y-2 
                            transition duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-blue-700">
                                Technical Expertise
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>P & I D drawings</li>
                                <li>Cost & Time Analysis of projects</li>
                                <li>Installation of Reactors (SSR & GLR)</li>
                                <li>Vacuum System Installation</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>



            {/* STATS SECTION */}
            <section className="py-10 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-heading text-center mb-6 text-gray-800 tracking-wide">
                    Our Achievements
                </h2>

                {/* Underline */}
                <div className="w-24 h-1 bg-blue-700 mx-auto mb-12"></div>

                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">

                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="text-center bg-white p-10 rounded-xl shadow-md 
                               hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                            >
                                {/* Icon */}
                                <div className="text-blue-700 text-5xl mx-auto">
                                    {item.icon}
                                </div>

                                <h3 className="text-5xl font-bold text-gray-900 mt-4">
                                    {item.num}
                                </h3>

                                <p className="text-gray-600 text-lg mt-2">
                                    {item.title}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            <section className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-4">

                    <h2 className="text-3xl md:text-4xl font-heading text-center mb-4 text-gray-800 tracking-wide">
                        Why Choose Us
                    </h2>
                    <div className="w-24 h-1 bg-blue-700 mx-auto mb-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6 items-center">


                        <div className="text-center md:text-left">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                As a trusted Project Management & Engineering Service Provider,
                                we deliver tailored solutions with a strong focus on quality,
                                execution, and long-term client relationships.
                            </p>

                            {/* Bullet Points */}
                            <ul className="mt-5 space-y-3 text-gray-700 text-base md:text-lg leading-relaxed">
                                <li className="flex items-start gap-3 justify-center md:justify-start">
                                    <FaChevronRight className="text-blue-700 text-lg md:text-xl shrink-0 mt-1" />
                                    Proven track record of delivering complex industrial projects
                                </li>
                                <li className="flex items-start gap-3 justify-center md:justify-start">
                                    <FaChevronRight className="text-blue-700 text-lg md:text-xl shrink-0 mt-1" />
                                    Highly experienced engineers & project supervisors
                                </li>
                                <li className="flex items-start gap-3 justify-center md:justify-start">
                                    <FaChevronRight className="text-blue-700 text-lg md:text-xl shrink-0 mt-1" />
                                    Safety, compliance & global engineering standards
                                </li>
                                <li className="flex items-start gap-3 justify-center md:justify-start">
                                    <FaChevronRight className="text-blue-700 text-lg md:text-xl shrink-0 mt-1" />
                                    Cost-effective delivery with zero compromise on quality
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <lottie-player
                                src="https://assets2.lottiefiles.com/packages/lf20_k86wxpgr.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                                style={{ width: "100%", maxWidth: "300px" }}
                            ></lottie-player>
                        </div>
                    </div>
                </div>
            </section>


            {/* CLIENTS SECTION */}
            <section className="container mx-auto px-4 py-10 overflow-hidden mb-6">
                <h2 className="text-3xl md:text-4xl font-heading text-center mb-6 text-gray-800 tracking-wide">
                    Trusted by Key Industries in Tarapur MIDC
                </h2>

                <div className="w-84 h-1 bg-blue-700 mx-auto mb-12"></div>

                {/* Slider */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll">

                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[200px] mx-10 flex flex-col items-center text-center"
                            >
                                <img
                                    src={client.img}
                                    alt={client.name}
                                    className="w-24 rounded-md opacity-80 
                                   hover:opacity-100 hover:scale-105 
                                   transition duration-300"
                                />
                                <p className="text-gray-600 text-sm font-medium mt-3 whitespace-nowrap">
                                    {client.name}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


        </>
    );
}
