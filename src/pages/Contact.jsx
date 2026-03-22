import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const [status, setStatus] = useState("");

    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const USER_ID = "YOUR_PUBLIC_KEY";

    const office = {
        address: "Office No-3 G.F, Building No-9, Yashvant Srusthi, Boisar, 401501",
        email: "saurabh.sankhe@rudraatech.in",
        // phone: "+91-9960449917",
        gstin: "27CSKPS3628A1ZO",
    };

    function handleSubmit(e) {
        e.preventDefault();
        setStatus("Sending...");

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then(() => {
                setStatus("Message Sent Successfully!");
                e.target.reset();
            })
            .catch(() => {
                setStatus("Something went wrong. Try again.");
            });
    }

    return (
        <section className="container mx-auto px-4 py-28">
            <h2 className="font-heading text-center text-3xl md:text-4xl mb-6 tracking-wide">
                Contact Us
            </h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-10"></div>
            <div className="grid md:grid-cols-2 gap-10">

                {/* ---- OFFICE BOX ---- */}
                <div
                    className="p-6 rounded-xl shadow-lg"
                    style={{ background: "rgba(255, 255, 255, 0.6)" }}
                >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Office Information
                    </h3>

                    <div className="space-y-3 text-[18px] leading-relaxed text-gray-700">
                        <p className="tracking-wide capitalize font-medium">
                            {office.address}
                        </p>

                        <p>
                            Email:{" "}
                            <a href={`mailto:${office.email}`} className="text-blue-600 underline hover:text-blue-800">
                                {office.email}
                            </a>
                        </p>

                        {/* <p>
                            Phone:{" "}
                            <a href={`tel:${office.phone}`} className="underline hover:text-blue-600">
                                {office.phone}
                            </a>
                        </p> */}

                        <p>GSTIN: {office.gstin}</p>
                    </div>
                </div>

                {/* ---- FORM ---- */}
                <form
                    onSubmit={handleSubmit}
                    className="p-6 rounded-xl shadow-lg"
                    style={{ background: "rgba(255, 255, 255, 0.6)" }}
                >
                    <div className="space-y-5">
                        <input name="name" required placeholder="Full Name"
                            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none" />

                        <input name="email" type="email" required placeholder="Email"
                            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none" />

                        <input name="phone" placeholder="Phone Number"
                            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none" />

                        <textarea name="message" rows="4" required placeholder="Your Message"
                            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-400 outline-none"></textarea>

                        <button type="submit"
                            className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-[#0c5c82] transition-all tracking-wide">
                            Send Message
                        </button>
                    </div>

                    {status && (
                        <p className="text-center text-sm text-green-700 mt-4">
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
