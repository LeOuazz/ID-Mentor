"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Minimal Apple-like top bar with subtle blur, slight shadow
export default function NavBar() {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="
        fixed top-0 w-full h-16 flex items-center justify-between
        px-6 bg-white/60 backdrop-blur-md shadow-sm z-50
      "
        >
            {/* Brand / Logo */}
            <Link href="/" className="text-xl font-semibold text-gray-800">
                ID Mentor
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-6">
                <Link
                    href="/features"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                    Features
                </Link>
                <Link
                    href="/mentors"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                    Mentors
                </Link>
                <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                    Contact
                </Link>
            </div>
        </motion.nav>
    );
}
