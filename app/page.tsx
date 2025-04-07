"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            {/* Hero Section fills most vertical space */}
            <section className="flex-1 flex flex-col items-center justify-center bg-gray-50 relative overflow-hidden">
                {/* Optional background image or shape
            <img src="/hero.png" alt="Hero" className="absolute w-full h-full object-cover" />
        */}

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-semibold text-gray-800 text-center z-10"
                >
                    Welcome to <span className="text-blue-600">AI Mentor</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 text-gray-500 text-md md:text-lg max-w-xl text-center px-4 z-10"
                >
                    Your personal voice & text companion for real-time insights.
                    Minimal design, maximum impact.
                </motion.p>

                {/* Get Started Button */}
                <Link href="/aimentor" className="z-10 mt-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md font-semibold"
                    >
                        Get Started
                    </motion.button>
                </Link>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} ID Studio. All rights reserved.</p>
            </footer>
        </main>
    );
}
