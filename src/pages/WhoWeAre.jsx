import React from "react";
import vision from "../assets/vision.jpg";

export default function Who() {
    return (
        <>
            {/* 🔵 BLUE HEADER */}
            <section className="bg-blue-700 text-white text-center py-28 md:py-32 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Who We Are
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                    Delivering reliable, sustainable, and high-quality engineering solutions with expertise and professionalism.
                </p>
            </section>

            {/* 🔽 MAIN CONTENT */}
            <section className="container mx-auto px-4 py-16">

                {/* Two-column Section */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
                    <img
                        src={vision}
                        alt="Company Overview"
                        className="rounded-xl shadow-lg w-full h-80 object-cover"
                    />

                    <div>
                        <h3 className="text-3xl font-heading mb-4 text-gray-800">
                            Our Vision
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                            Deliver reliable, sustainable, and quality engineering solutions on time.
                            Our goal is to become a trusted partner in the industrial engineering domain
                            by combining innovation, technical expertise, and professionalism.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-white/40 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg">

                    <h3 className="text-3xl font-heading mb-4 text-center text-gray-800">
                        Our Team
                    </h3>

                    <div className="w-24 h-1 bg-blue-700 mx-auto mb-10"></div>

                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse text-center shadow-md">
                            <thead className="bg-gray-200 text-gray-800 font-semibold">
                                <tr>
                                    <th className="p-3 border">Sr. No.</th>
                                    <th className="p-3 border">Designation</th>
                                    <th className="p-3 border">Experience</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                    <td className="p-3 border">1</td>
                                    <td className="p-3 border">Project Manager</td>
                                    <td className="p-3 border">12 Years</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border">2</td>
                                    <td className="p-3 border">Licensed Structural Engineer</td>
                                    <td className="p-3 border">50 Years</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border">3</td>
                                    <td className="p-3 border">Licensed Architect</td>
                                    <td className="p-3 border">30 Years</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border">4</td>
                                    <td className="p-3 border">Draftsman</td>
                                    <td className="p-3 border">13 Years</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border">5</td>
                                    <td className="p-3 border">Site Supervisor</td>
                                    <td className="p-3 border">15 Years</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </>
    );
}