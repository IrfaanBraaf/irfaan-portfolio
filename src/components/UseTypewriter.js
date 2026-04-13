import { useState, useEffect, useRef } from "react";

export const useTypewriter = (linesQueue, setOutputLines) => {
    const [isTyping, setIsTyping] = useState(false);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (linesQueue.length === 0) {
            setIsTyping(false);
            setCurrentLineIndex(0);
            setCharIndex(0);
            return;
        }

        if (!isTyping && currentLineIndex >= linesQueue.length) {
            setCurrentLineIndex(0);
            setCharIndex(0);
            setIsTyping(true);
            return;
        }

        if (!isTyping && currentLineIndex < linesQueue.length) {
            setIsTyping(true);
            setCharIndex(0);
        }
    }, [linesQueue, isTyping, currentLineIndex]);

    useEffect(() => {
        if (!isTyping) return;
        if (currentLineIndex >= linesQueue.length) {
            setIsTyping(false);
            return;
        }

        const currentLine = linesQueue[currentLineIndex];
        if (typeof currentLine.content !== "string") {
            setCurrentLineIndex((prev) => prev + 1);
            return;
        }

        const fullText = currentLine.content;

        if (charIndex === 0) {
            setOutputLines((prev) => [
                ...prev,
                { type: currentLine.type, content: "" },
            ]);
        }

        if (charIndex < fullText.length) {
            const delay = 1 + Math.random() * 2;
            timeoutRef.current = setTimeout(() => {
                setOutputLines((prev) => {
                    const updated = [...prev];
                    const lastIdx = updated.length - 1;
                    updated[lastIdx] = {
                        ...updated[lastIdx],
                        content: (updated[lastIdx].content || "") + fullText[charIndex],
                    };
                    return updated;
                });
                setCharIndex((prev) => prev + 1);
            }, delay);
        } else {
            if (currentLineIndex + 1 < linesQueue.length) {
                setCurrentLineIndex((prev) => prev + 1);
                setCharIndex(0);
            } else {
                setIsTyping(false);
            }
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isTyping, currentLineIndex, charIndex, linesQueue, setOutputLines]);

    return { isTyping };
};