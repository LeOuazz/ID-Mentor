"use client";

import { motion } from "framer-motion";

interface CallButtonProps {
    inCall: boolean;
    onToggleCall: () => void;
}

// Default export, so you can do:
// import CallButton from "@/components/CallButton";
export default function CallButton({ inCall, onToggleCall }: CallButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onToggleCall}
            className={`
        flex items-center justify-center
        w-16 h-16 rounded-full text-white font-semibold
        shadow-2xl
        ${inCall ? "bg-red-600" : "bg-green-600"}
      `}
        >
            {inCall ? "📴" : "📞"}
        </motion.button>
    );
}
