"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaGlobe, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
    // form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // on submit, you can do an API call or something else
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Name:", name, "Email:", email, "Message:", message);
        // Or fetch("/api/contact", { method: "POST", body: JSON.stringify({ name, email, message }) })
        alert("Thanks! We'll get in touch soon.");
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center pt-10">
            {/* Page Header */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-10 text-center px-6"
            >
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
                    Get in Touch with <span className="text-blue-600">ID Studio</span>
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto">
                    We’re a creative agency specializing in <strong>Branding</strong>,
                    <strong> Web Development</strong>, and <strong>AI Solutions</strong>.
                    Let’s collaborate on your next big idea!
                </p>
            </motion.section>

            {/* Contact Form */}
            <section className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 mb-10">
                <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="self-start bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md"
                    >
                        Send
                    </motion.button>
                </motion.form>
            </section>

            {/* Extra Links / Info */}
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full max-w-xl text-center px-4 mb-16"
            >
                <p className="text-gray-600 mb-3">
                    Prefer direct contact?
                </p>

                {/* Social / Direct Links */}
                <div className="flex flex-col items-center space-y-4">
                    {/* Instagram */}
                    <Link
                        href="https://www.instagram.com/id_studio927"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 hover:text-black"
                    >
                        <FaInstagram size={20} className="text-pink-600" />
                        <span>@id_studio927</span>
                    </Link>

                    {/* Founder site */}
                    <Link
                        href="https://LeOuazz.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 hover:text-black"
                    >
                        <FaGlobe size={20} className="text-green-600" />
                        <span>LeOuazz.xyz (Lead Dev & Founder)</span>
                    </Link>

                    {/* Email */}
                    <Link
                        href="mailto:leouazz@gmail.com"
                        className="flex items-center space-x-2 text-gray-700 hover:text-black"
                    >
                        <FaEnvelope size={20} className="text-blue-600" />
                        <span>leouazz@gmail.com</span>
                    </Link>

                    {/* WhatsApp */}
                    <Link
                        href="https://wa.me/33698928492"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 hover:text-black"
                    >
                        <FaWhatsapp size={20} className="text-green-500" />
                        <span>+33 6 98 92 84 92</span>
                    </Link>
                </div>
            </motion.section>
        </main>
    );
}
