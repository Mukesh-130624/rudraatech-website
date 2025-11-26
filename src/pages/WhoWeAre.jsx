import React from "react";
import vision from "../assets/vision.jpg";

export default function Who() {
    return (
        <section className="container mx-auto px-4 py-24">

            {/* Title */}
            <h2 className="font-heading text-center text-3xl md:text-4xl mb-6 tracking-wide">
                Who We Are
            </h2>

            <div className="w-24 h-1 bg-[#0f7cb1] mx-auto mb-10"></div>

            {/* Two-column Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                <img
                    src={vision}
                    alt="Company Overview"
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                />

                <div>
                    <h3 className="text-3xl font-heading mb-4 text-gray-800">
                        Our Vision
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                        Deliver reliable, sustainable, and quality engineering solutions on time.
                        Our goal is to become a trusted partner in the industrial engineering domain
                        by combining innovation, technical expertise, and professionalism.
                    </p>
                </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white/40 backdrop-blur-md p-4 md:p-10 rounded-xl shadow-lg">
                <h3 className="text-3xl font-heading mb-4 text-center text-gray-800">Experience</h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                    <h2 className="font-heading text-xl "> Our Main Accountabilities:</h2>
                    • Preparing building layout plans and site plans for BCC approvals.<br />
                    • Preparation of equipment and process diagrams.<br />
                    • Cost and time analysis of projects.<br />
                    • Steel work fabrication.<br />
                    • Industrial piping installation (SS, MS, PP, PPRC, HDPE, MS-HDPE, etc.).<br />
                    <br />
                    With a wide variety of project executions and industrial installations,
                    our team has achieved a high level of technical proficiency through experience
                    and continuous learning.<br /><br />
                    We have successfully executed numerous projects in the Tarapur MIDC industrial zone,
                    including reactor installations, condensers, spray dryers, mezzanine fabrication,
                    large-scale pipeline work, and complex industrial erection.
                </p>

                {/* Team Table */}
                <h3 className="text-3xl font-heading mb-4 text-center text-gray-800">Our Team</h3>

                <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left shadow-md ">
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
    );
}
