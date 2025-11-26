import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Services() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 200);
            }
        }
    }, [hash]);

    return (
        <div className="container mx-auto px-4 pt-28 pb-10">
            {/* Page Title */}
            <h1 className="text-3xl md:text-4xl font-heading text-center mb-6 text-gray-800 tracking-wide">
                Our Services
            </h1>
            <div className="w-24 h-1 bg-[#0f7cb1] mx-auto mb-12"></div>
            {/* Sections go here */}
            <section id="pms" className="py-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Project Management Services
                </h2>
                {/* Content ... */}
                {/* PMS Services */}
                <div id="pms-services" className="mb-6">

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We deliver complete end-to-end project consultancy for industries with
                        optimized planning, streamlined coordination & timely project completion.
                    </p>

                    <ul className="space-y-6 text-gray-700">
                        <li>
                            <span className="font-semibold text-[#0f7cb1]">1️⃣ Land Surveyor Reports :</span>
                            Accurate land measurement and documentation to assist in project planning & approvals.
                        </li>

                        <li>
                            <span className="font-semibold text-[#0f7cb1]">2️⃣ Factory Layout Plan :</span>
                            Efficient plant layout designs ensuring safety, space utilization & smooth workflow.
                        </li>

                        <li>
                            <span className="font-semibold text-[#0f7cb1]">3️⃣ P & I D Drawings :</span>
                            Detailed piping & instrumentation diagrams supporting safe process engineering.
                        </li>

                        <li>
                            <span className="font-semibold text-[#0f7cb1]">4️⃣ Equipment Layout Plan :</span>
                            Positioning of equipment with compliance and operational feasibility in mind.
                        </li>

                        <li>
                            <span className="font-semibold text-[#0f7cb1]">5️⃣ Structural Consultancy :</span>
                            Structural assessment & designs ensuring durability and regulatory standards.
                        </li>

                        <li>
                            <span className="font-semibold text-[#0f7cb1]">6️⃣ Architectural Consultancy :</span>
                            Creative yet practical architectural planning matched with industrial design needs.
                        </li>

                        <li>
                            <span className="font-semibold text-[#0f7cb1]">7️⃣ Project Execution Supervision & Inspection :</span>
                            On-site project monitoring ensuring quality, productivity & adherence to schedule.
                        </li>
                    </ul>
                </div>

            </section>
            {/* Divider */}
            <div className="w-full h-[2px] bg-gray-300 my-6"></div>

            <section id="engineering" className="py-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Engineering Services
                </h2>
                {/* Content ... */}
                <div id="engineering-services">

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Our on-site engineering team ensures safe fabrication, process utility setup,
                        and industrial maintenance with high-quality workmanship.
                    </p>

                    <ul className="space-y-6 text-gray-700">
                        <li>
                            <span className="font-semibold text-[#0f7cb1]">1️⃣ MS Structural Fabrication Work :</span>
                            Fabrication & installation of MS structures with precision & compliance.
                        </li>

                        <li>
                            <span className="font-semibold text-[#0f7cb1]">2️⃣ FRP Coating Work :</span>
                            Anti-corrosive coating for long-term protection of industrial surfaces.
                        </li>

                        <li>
                            <span className="font-semibold text-[#0f7cb1]">3️⃣ HDPE, PP, MS-HDPE, Metal Piping Work :</span>
                            High-quality industrial process piping installation for multiple utilities.
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    );
}

