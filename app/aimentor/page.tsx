"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// FontAwesome icons from `react-icons`
import { FaPhone, FaPhoneSlash, FaPaperPlane } from "react-icons/fa";

export default function AIMentorPage() {
    // Chat log, typed input, call state
    const [log, setLog] = useState<string[]>([]);
    const [typedMsg, setTypedMsg] = useState("");
    const [inCall, setInCall] = useState(false);

    // Reference to the SpeechRecognition instance
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    // Setup STT once
    useEffect(() => {
        const SpeechRecognition =
            typeof window !== "undefined"
                ? (window.SpeechRecognition || (window as any).webkitSpeechRecognition)
                : null;
        if (!SpeechRecognition) {
            console.warn("No speech recognition support");
            return;
        }
        const rec = new SpeechRecognition();
        rec.lang = "en-US";
        rec.continuous = true;
        rec.interimResults = false;

        rec.onresult = (event: SpeechRecognitionEvent) => {
            const text = event.results[event.resultIndex][0].transcript.trim();
            if (text) {
                addMessage(`User: ${text}`);
                callSSE(text);
            }
        };

        recognitionRef.current = rec;
    }, []);

    // SSE call for partial AI responses
    async function callMentor(domain: string, userText: string) {
        const res = await fetch("/api/mentor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: currentUser?.uid,
                domain,
                userMessage: userText
            })
        });
        if (!res.ok) throw new Error("Mentor SSE error");
        // SSE reading
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let partialBuffer = "";

        while(true){
            const { value, done } = await reader.read();
            if (done) break;
            partialBuffer += decoder.decode(value, {stream: true});
            const events = partialBuffer.split("\n\n");
            partialBuffer = events.pop() || "";

            for(const e of events){
                if(!e.trim()) continue;
                if(e.startsWith("data:")){
                    const chunk = e.replace("data: ","");
                    // display partial text, do TTS, etc
                } else if(e.startsWith("event: done")){
                    // done
                }
            }
        }
    }

    // TTS
    function speak(text: string) {
        if (typeof window === "undefined") return;
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = "en-US";
        window.speechSynthesis.speak(utter);
    }

    // Helpers
    function addMessage(line: string) {
        setLog((prev) => [...prev, line]);
    }

    function handleSend() {
        if (!typedMsg.trim()) return;
        addMessage(`User: ${typedMsg}`);
        callSSE(typedMsg);
        setTypedMsg("");
    }

    function toggleCall() {
        if (!recognitionRef.current) {
            alert("No speech API available");
            return;
        }
        if (!inCall) {
            // Start voice input
            setInCall(true);
            recognitionRef.current.start();
            addMessage("System: Voice input started. Speak freely!");
        } else {
            // Stop voice input
            setInCall(false);
            recognitionRef.current.stop();
            addMessage("System: Voice input stopped.");
        }
    }

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center pt-10 relative">
            {/* Top Title, Apple-like minimal style */}
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">Your AI Mentor</h1>
            <p className="text-gray-500 text-sm mb-8">
                Talk or type below for real-time AI
            </p>

            {/* Conversation Log (like a simplified chat window) */}
            <div className="w-full max-w-md px-4 mb-auto">
                <div className="bg-white rounded-2xl shadow-md p-4 h-64 overflow-auto">
                    {log.map((line, i) => {
                        if (line.startsWith("User:")) {
                            return <div key={i} className="text-blue-700">{line}</div>;
                        } else if (line.startsWith("AI:")) {
                            return <div key={i} className="text-green-700">{line}</div>;
                        } else {
                            return <div key={i} className="text-gray-400 italic">{line}</div>;
                        }
                    })}
                </div>
            </div>

            {/* The bottom center section: input + call button */}
            <div className="fixed bottom-10 w-full flex flex-col items-center gap-3">
                {/* Text input bar */}
                <div className="flex items-center bg-white shadow-md rounded-full border border-gray-300 px-3 py-2">
                    <input
                        type="text"
                        placeholder="Say something..."
                        value={typedMsg}
                        onChange={(e) => setTypedMsg(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
                        className="flex-1 outline-none text-sm text-gray-700"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={handleSend}
                        className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full ml-2 flex items-center justify-center"
                    >
                        <FaPaperPlane size={14} />
                    </motion.button>
                </div>

                {/* Big call/hangup button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={toggleCall}
                    className={`
            w-14 h-14 rounded-full flex items-center justify-center 
            text-white shadow-xl 
            ${inCall ? "bg-red-600" : "bg-green-600"}
          `}
                >
                    {inCall ? <FaPhoneSlash size={18} /> : <FaPhone size={18} />}
                </motion.button>
            </div>
        </main>
    );
}
