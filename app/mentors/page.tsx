"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaHeartbeat,
    FaPiggyBank,
    FaLightbulb,
    FaHandsHelping,
    FaBook,
    FaComments
} from "react-icons/fa";

export default function MentorsPage() {
    // Six mentors (replace with your domain names/icons)
    const mentors = [
        {
            id: "health",
            icon: <FaHeartbeat size={30} className="text-red-500" />,
            title: "Health Mentor",
            subtitle: "Wellness & Lifestyle",
            description: "General health & wellness guidance (not a doctor!)."
        },
        {
            id: "finance",
            icon: <FaPiggyBank size={30} className="text-green-600" />,
            title: "Finance Mentor",
            subtitle: "Money & Investing",
            description: "Financial insights & budgeting tips (not formal advice!)."
        },
        {
            id: "motivation",
            icon: <FaLightbulb size={30} className="text-yellow-500" />,
            title: "Motivation Mentor",
            subtitle: "Inspiration & Goals",
            description: "Get pumped and find your drive to chase your dreams."
        },
        {
            id: "relationships",
            icon: <FaHandsHelping size={30} className="text-pink-500" />,
            title: "Relationships Mentor",
            subtitle: "Empathy & Communication",
            description: "Advice for friendships, dating, and healthy communication."
        },
        {
            id: "study",
            icon: <FaBook size={30} className="text-blue-600" />,
            title: "Study Mentor",
            subtitle: "Academics & Learning",
            description: "Better study habits, time management, exam strategies."
        },
        {
            id: "spiritual",
            icon: <FaComments size={30} className="text-purple-600" />,
            title: "Spiritual Mentor",
            subtitle: "Mindfulness & Reflection",
            description: "Perspective & reflection for deeper spiritual insight."
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center pt-10">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2 text-center"
            >
                Choose Your Mentor
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-500 text-md md:text-lg max-w-xl text-center mb-8 px-4"
            >
                Find the perfect domain expert to guide you.
                Each mentor is specialized, with disclaimers built in!
            </motion.p>

            {/* Mentor Cards Grid */}
            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {mentors.map((mentor, i) => (
                        <motion.div
                            key={mentor.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
                        >
                            <div className="mb-4 flex items-center">
                                {mentor.icon}
                                <div className="ml-3">
                                    <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                                        {mentor.title}
                                    </h2>
                                    <p className="text-sm text-gray-500">{mentor.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm flex-1">
                                {mentor.description}
                            </p>
                            <div className="mt-4">
                                <Link href={`/aimentor?domain=${mentor.id}`}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow-sm"
                                    >
                                        Go Mentor
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
