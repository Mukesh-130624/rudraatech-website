import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 py-6">
            <div className="text-center text-sm text-white">
                © {currentYear} RUDRAA TECH. All rights reserved. We Fabricate Your Dreams.
            </div>
        </footer>
    );
}
