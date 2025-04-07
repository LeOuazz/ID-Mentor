"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ChatBoxProps = {
    log: string[];             // conversation
    onSendMessage: (text: string) => void;
    isExpanded: boolean;
    onToggleExpand: () => void;
};

// minimal text input
export default function ChatBox({ log, onSendMessage, isExpanded, onToggleExpand }: ChatBoxProps) {
    const [typedMsg, setTypedMsg] = useState("");

    const handleSubmit = () => {
        if (!typedMsg.trim()) return;
        onSendMessage(typedMsg.trim());
        setTypedMsg("");
    };

    return (
        <motion.div
            className="fixed bottom-20 right-6 bg-white shadow-xl border border-gray-300 flex flex-col"
            style={{
                width: isExpanded ? "300px" : "200px",
                height: isExpanded ? "400px" : "50px",
            }}
            initial={false}
            animate={{
                width: isExpanded ? 300 : 200,
                height: isExpanded ? 400 : 50,
                opacity: 1
            }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
            {/* If expanded, show the conversation */}
            {isExpanded && (
                <div className="flex-1 overflow-auto p-2 text-sm">
                    {log.map((line, i) => (
                        <div key={i} className={line.startsWith("User:") ? "text-blue-700" : line.startsWith("AI:") ? "text-green-700" : "text-gray-500"}>
                            {line}
                        </div>
                    ))}
                </div>
            )}

            {/* Always show input bar at bottom */}
            <div className="p-2 border-t flex">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded mr-2 px-2 py-1 text-sm"
                    placeholder="Say something..."
                    value={typedMsg}
                    onChange={(e) => setTypedMsg(e.target.value)}
                    onKeyDown={(e) => { if(e.key === 'Enter') handleSubmit(); }}
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm shadow"
                >
                    Send
                </button>

                {/* Expand/collapse toggle */}
                <button
                    onClick={onToggleExpand}
                    className="ml-2 text-gray-500 hover:text-black"
                >
                    {isExpanded ? "▼" : "▲"}
                </button>
            </div>
        </motion.div>
    );
}
