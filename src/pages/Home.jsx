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
        { icon: <FaBuilding size={60} className="text-[#0f7cb1]" />, num: "10+", title: "Completed Projects" },
        { icon: <FaUsers size={60} className="text-[#0f7cb1]" />, num: "7+", title: "Happy Clients" },
        { icon: <FaTools size={60} className="text-[#0f7cb1]" />, num: "10+", title: "Industries Served" },
        { icon: <FaClock size={60} className="text-[#0f7cb1]" />, num: "3+", title: "Years Experience" }
    ];


    return (
        <>

            {/* HERO SLIDER */}
            <HeroSlider />


            {/* INTRO SECTION */}
            <section className="container mx-auto px-4 py-14">
                <h2 className="text-3xl md:text-4xl font-heading text-center mb-6 text-gray-800 tracking-wide">
                    Introduction
                </h2>
                <div className="w-24 h-1 bg-[#0f7cb1] mx-auto mb-10"></div>

                <p className="text-gray-700 text-xl leading-relaxed text-center md:text-left">
                    We are pleased to introduce ourselves as a growing Project Management & Engineering
                    Service provider. We are professionally managed by experienced & qualified personnel who
                    are actively involved in day-to-day working of all projects undertaken. As a result, we
                    consistently complete quality projects within a committed timeframe.
                </p>
            </section>


            {/* STATS SECTION */}
            <section className="py-8 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-heading text-center mb-10 text-gray-800 tracking-wide">
                    Our Achievements
                </h2>
                {/* Divider Line */}
                <div className="w-24 h-1 bg-[#0f7cb1] mx-auto mb-10"></div>

                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">

                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="text-center bg-white p-10 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                            >
                                {item.icon}
                                <h3 className="text-5xl font-bold text-gray-900 mt-4">{item.num}</h3>
                                <p className="text-gray-600 text-lg">{item.title}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="bg-white py-12">
                <div className="container mx-auto px-4">

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-heading text-center mb-6 text-gray-800 tracking-wide">
                        Why Choose Us
                    </h2>
                    <div className="w-24 h-1 bg-[#0f7cb1] mx-auto mb-12"></div>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                        {/* Text Column */}
                        <div className="text-center md:text-left">
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                As a trusted Project Management & Engineering Service Provider,
                                we deliver tailored solutions with a strong focus on quality,
                                execution, and long-term client relationships.
                            </p>

                            {/* Bullet Points */}
                            <ul className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                                <li className="flex items-start gap-3 justify-center md:justify-start">
                                    <FaChevronRight className="text-[#0f7cb1] text-lg md:text-2xl shrink-0" />
                                    Proven track record of delivering complex industrial projects
                                </li>
                                <li className="flex items-start gap-3 justify-center md:justify-start">
                                    <FaChevronRight className="text-[#0f7cb1] text-lg md:text-2xl shrink-0" />
                                    Highly experienced engineers & project supervisors
                                </li>
                                <li className="flex items-start gap-3 justify-center md:justify-start">
                                    <FaChevronRight className="text-[#0f7cb1] text-lg md:text-2xl shrink-0" />
                                    Safety, compliance & global engineering standards
                                </li>
                                <li className="flex items-start gap-3 justify-center md:justify-start">
                                    <FaChevronRight className="text-[#0f7cb1] text-lg md:text-2xl shrink-0" />
                                    Cost-effective delivery with zero compromise on quality
                                </li>
                            </ul>
                        </div>

                        {/* Animation */}
                        <div className="flex justify-center">
                            <lottie-player
                                src="https://assets2.lottiefiles.com/packages/lf20_k86wxpgr.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                                style={{ width: "100%", maxWidth: "350px", height: "auto" }}
                            ></lottie-player>
                        </div>
                    </div>
                </div>
            </section>



            {/* CLIENTS SECTION */}
            <section className="container mx-auto px-4 py-4">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-heading text-center mb-10 text-gray-800 tracking-wide">
                    Our Clients
                </h2>

                {/* Divider Line */}
                <div className="w-24 h-1 bg-[#0f7cb1] mx-auto mb-10"></div>

                {/* Client Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
                    {/* 1 */}
                    <div className="flex flex-col items-center text-center">
                        <img src={client1} alt="Client 1" className="w-28 opacity-80 hover:opacity-100 hover:scale-105 transition duration-300" />
                        <p className="text-gray-600 text-sm font-medium mt-2">Lavino Kapur Cottons Pvt Ltd</p>
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col items-center text-center">
                        <img src={client2} alt="Client 2" className="w-28 opacity-80 hover:opacity-100 hover:scale-105 transition duration-300" />
                        <p className="text-gray-600 text-sm font-medium mt-2">Arlex Chemi Pvt Ltd</p>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col items-center text-center">
                        <img src={client3} alt="Client 3" className="w-28 opacity-80 hover:opacity-100 hover:scale-105 transition duration-300" />
                        <p className="text-gray-600 text-sm font-medium mt-2">Oncure Drugs Private Ltd.</p>
                    </div>

                    {/* 4 */}
                    <div className="flex flex-col items-center text-center">
                        <img src={client4} alt="Client 4" className="w-28 opacity-80 hover:opacity-100 hover:scale-105 transition duration-300" />
                        <p className="text-gray-600 text-sm font-medium mt-2">Seven Scientific Laboratories Pvt Ltd</p>
                    </div>

                    {/* 5 */}
                    <div className="flex flex-col items-center text-center">
                        <img src={client5} alt="Client 5" className="w-28 opacity-80 hover:opacity-100 hover:scale-105 transition duration-300" />
                        <p className="text-gray-600 text-sm font-medium mt-2">Bochem Pvt Ltd</p>
                    </div>

                    {/* 6 */}
                    <div className="flex flex-col items-center text-center">
                        <img src={client6} alt="Client 6" className="w-28 opacity-80 hover:opacity-100 hover:scale-105 transition duration-300" />
                        <p className="text-gray-600 text-sm font-medium mt-2">Pioneer Industrial Corporation</p>
                    </div>

                    {/* 7 */}
                    <div className="flex flex-col items-center text-center">
                        <img src={client7} alt="Client 7" className="w-28 opacity-80 hover:opacity-100 hover:scale-105 transition duration-300" />
                        <p className="text-gray-600 text-sm font-medium mt-2">Aarti Drugs Pvt Ltd</p>
                    </div>
                </div>
            </section>

        </>
    );
}
