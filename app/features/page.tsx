"use client";

import { motion } from "framer-motion";
// Example icons from react-icons
import { FaRobot, FaMicrophone, FaLightbulb } from "react-icons/fa";
import Link from "next/link";

export default function FeaturesPage() {
    // Example 3 features
    const features = [
        {
            icon: <FaRobot size={32} className="text-blue-600" />,
            title: "AI Expertise",
            description:
                "Powered by state-of-the-art language models for instant, accurate insights.",
        },
        {
            icon: <FaMicrophone size={32} className="text-blue-600" />,
            title: "Voice Recognition",
            description:
                "Seamless continuous STT for real-time conversation and effortless queries.",
        },
        {
            icon: <FaLightbulb size={32} className="text-blue-600" />,
            title: "Real-time Insights",
            description:
                "Receive partial streams of data or text, no waiting for entire responses.",
        },
    ];

    return (
        <main className="min-h-screen flex flex-col items-center bg-white">
            {/* Hero/Heading */}
            <section className="w-full h-[40vh] flex flex-col items-center justify-center bg-gray-50 mb-10 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2 text-center"
                >
                    Our Key Features
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-500 text-md md:text-lg max-w-xl text-center"
                >
                    Discover how our AI Mentor delivers an elegant, seamless experience.
                </motion.p>
            </section>

            {/* Features Grid */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start"
                        >
                            <div className="mb-4">{feat.icon}</div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                {feat.title}
                            </h2>
                            <p className="text-gray-600 text-sm">
                                {feat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action at bottom */}
            <section className="w-full flex flex-col items-center mb-16 px-4">
                <p className="text-gray-500 text-sm mb-4">
                    Ready to see these features in action?
                </p>
                <Link href="/mentors">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md font-semibold"
                    >
                        Get Started
                    </motion.button>
                </Link>
            </section>
        </main>
    );
}

