"use client";

import { motion } from "framer-motion";

type ExpandChatButtonProps = {
    isOpen: boolean; // or pass just an onClick
    onToggle: () => void;
};

export default function ExpandChatButton({ isOpen, onToggle }: ExpandChatButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={onToggle}
            className="
        w-12 h-12 bg-blue-600 rounded-full text-white
        flex items-center justify-center
        shadow-2xl
      "
            title="Expand/Collapse Chat"
        >
            {/* Use a bubble or speech icon */}
            {isOpen ? "⬆" : "💬"}
        </motion.button>
    );
}
