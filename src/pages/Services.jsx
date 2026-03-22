import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Services() {
    const { hash } = useLocation();
    const location = useLocation();

    useEffect(() => {
        const section = location.state?.scrollTo;

        if (section) {
            const element = document.getElementById(section);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            {/* 🔵 BLUE HEADER */}
            <section className="bg-blue-700 text-white text-center py-28 md:py-32 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Our Services
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                    Comprehensive project management and engineering solutions tailored for industrial excellence.
                </p>
            </section>

            {/* 🔽 MAIN CONTENT */}
            <div className="container mx-auto px-4 py-12">

                {/* PMS SECTION */}
                <section id="pms" className="py-6">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Project Management Services
                    </h2>

                    <div id="pms-services" className="mb-6">
                        <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                            We deliver complete end-to-end project consultancy for industries with
                            optimized planning, streamlined coordination & timely project completion.
                        </p>

                        <ul className="space-y-6 text-gray-700 text-base md:text-lg">
                            <li>
                                <span className="font-semibold text-blue-700">1️⃣ Land Surveyor Reports :</span>
                                Accurate land measurement and documentation to assist in project planning & approvals.
                            </li>

                            <li>
                                <span className="font-semibold text-blue-700">2️⃣ Factory Layout Plan :</span>
                                Efficient plant layout designs ensuring safety, space utilization & smooth workflow.
                            </li>

                            <li>
                                <span className="font-semibold text-blue-700">3️⃣ P & I D Drawings :</span>
                                Detailed piping & instrumentation diagrams supporting safe process engineering.
                            </li>

                            <li>
                                <span className="font-semibold text-blue-700">4️⃣ Equipment Layout Plan :</span>
                                Positioning of equipment with compliance and operational feasibility in mind.
                            </li>

                            <li>
                                <span className="font-semibold text-blue-700">5️⃣ Structural Consultancy :</span>
                                Structural assessment & designs ensuring durability and regulatory standards.
                            </li>

                            <li>
                                <span className="font-semibold text-blue-700">6️⃣ Architectural Consultancy :</span>
                                Creative yet practical architectural planning matched with industrial design needs.
                            </li>

                            <li>
                                <span className="font-semibold text-blue-700">7️⃣ Project Execution Supervision & Inspection :</span>
                                On-site project monitoring ensuring quality, productivity & adherence to schedule.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Divider */}
                <div className="w-full h-[2px] bg-gray-300 my-10"></div>

                {/* ENGINEERING SECTION */}
                <section id="engineering" className="py-6">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Engineering Services
                    </h2>

                    <div id="engineering-services">
                        <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                            Our on-site engineering team ensures safe fabrication, process utility setup,
                            and industrial maintenance with high-quality workmanship.
                        </p>

                        <ul className="space-y-6 text-gray-700 text-base md:text-lg">
                            <li>
                                <span className="font-semibold text-blue-700">1️⃣ MS Structural Fabrication Work :</span>
                                Fabrication & installation of MS structures with precision & compliance.
                            </li>

                            <li>
                                <span className="font-semibold text-blue-700">2️⃣ FRP Coating Work :</span>
                                Anti-corrosive coating for long-term protection of industrial surfaces.
                            </li>

                            <li>
                                <span className="font-semibold text-blue-700">3️⃣ HDPE, PP, MS-HDPE, Metal Piping Work :</span>
                                High-quality industrial process piping installation for multiple utilities.
                            </li>
                        </ul>
                    </div>
                </section>

            </div>
        </>
    );
}