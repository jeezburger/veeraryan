'use client';

import { useState, useEffect, useRef } from 'react';

export default function MiniTerminal() {
    const [lines, setLines] = useState([
        `Last login: ${new Date().toString()} on ttys000`,
        '(base) apple@vance ~ % What is your name?'
    ]);
    const [step, setStep] = useState(0);
    const [input, setInput] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isComplete, setIsComplete] = useState(false);
    const [isTerminated, setIsTerminated] = useState(false);
    const inputRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [lines]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    useEffect(() => {
        if (isComplete) {
            const sendForm = async () => {
                try {
                    await fetch('https://formsubmit.co/ajax/3744b740a3799b97151789da7c141d05', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        },
                        body: JSON.stringify({
                            name: formData.name,
                            email: formData.email,
                            message: formData.message,
                            _subject: 'New Terminal Message!',
                            _captcha: 'false',
                            _template: 'table',
                        }),
                    });

                    setLines(prev => [
                        ...prev,
                        'Message sent successfully. Thank you!',
                        '(base) apple@vance ~ %'
                    ]);
                    setIsTerminated(true);
                } catch (err) {
                    setLines(prev => [
                        ...prev,
                        'Oops, something went wrong while sending your message.',
                        '(base) apple@vance ~ %'
                    ]);
                    setIsTerminated(true);
                }
            };

            sendForm();
        }
    }, [isComplete]);

    const handleKeyDown = (e) => {
        if (isTerminated) return;

        if (e.key === 'Enter') {
            const nextLines = [...lines, `(base) apple@vance ~ % ${input}`];

            if (step === 0) {
                setFormData({ ...formData, name: input });
                nextLines.push(`Hey ${input}! What's your email?`);
                setStep(1);
            } else if (step === 1) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input)) {
                    nextLines.push(`Email doesn't seem to be right.`);
                    setIsTerminated(true);
                } else {
                    setFormData({ ...formData, email: input });
                    nextLines.push(`What's your message?`);
                    setStep(2);
                }
            } else if (step === 2) {
                setFormData({ ...formData, message: input });
                nextLines.push(`Sending your message...`);
                setStep(3);
                setIsComplete(true);
            }

            setLines(nextLines);
            setInput('');
        } else if (e.key === 'Backspace') {
            setInput(input.slice(0, -1));
        } else if (e.key.length === 1) {
            setInput(input + e.key);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[75vw] lg:max-w-[460px] h-[240px] bg-black text-white font-mono text-sm border border-green-700 rounded-lg z-50 shadow-2xl overflow-hidden flex flex-col crt">
            {/* Title Bar */}
            <div className="flex items-center justify-start h-8 px-3 bg-neutral-900 border-b border-green-800 shrink-0">
                <div className="flex space-x-2">
                    <span className="h-3 w-3 bg-red-500 rounded-full shadow-md"></span>
                    <span className="h-3 w-3 bg-yellow-500 rounded-full shadow-md"></span>
                    <span className="h-3 w-3 bg-green-500 rounded-full shadow-md"></span>
                </div>
                <div className="flex-1 text-center text-xs text-green-300 ml-[-48px]">
                    bash — 80x24
                </div>
            </div>

            {/* Terminal Body */}
            <div
                ref={scrollRef}
                className="flex-1 p-3 bg-black text-green-400 leading-relaxed overflow-y-auto relative"
                onClick={() => inputRef.current?.focus()}
            >
                {/* Scanlines Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(to_bottom,rgba(0,255,0,0.05)_0px,rgba(0,255,0,0.05)_1px,transparent_1px,transparent_2px)] z-10"></div>

                <pre className="whitespace-pre-wrap z-20 relative text-shadow-crt">
                    <code>
                        {lines.join('\n')}
                        {!isComplete && !isTerminated && `\n(base) apple@vance ~ % ${input}`}
                        {!isComplete && !isTerminated && <span className="animate-pulse">█</span>}
                    </code>
                </pre>
                {!isTerminated && (
                    <input
                        ref={inputRef}
                        type="text"
                        className="absolute opacity-0"
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                )}
            </div>

            <style jsx>{`
                .text-shadow-crt {
                    text-shadow: 0 0 1px #00ff00, 0 0 2px #00ff00;
                }
                .crt {
                    animation: flicker 1.5s infinite alternate;
                }
                @keyframes flicker {
                    0% { opacity: 1; }
                    50% { opacity: 0.97; }
                    100% { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
