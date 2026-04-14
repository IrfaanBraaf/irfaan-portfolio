import { useState, useEffect, useRef } from "react";

export const useTypewriter = (linesQueue, setOutputLines) => {
  const [isTyping, setIsTyping] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef(null);
  const queueRef = useRef([]);
  const prevQueueRef = useRef([]);

  useEffect(() => {
    const safeQueue = Array.isArray(linesQueue)
      ? linesQueue.map((line) => ({
          type: line?.type || "output",
          content: typeof line?.content === "string" ? line.content : "",
        }))
      : [];

    const queueChanged =
      safeQueue.length !== prevQueueRef.current.length ||
      safeQueue.some(
        (line, idx) =>
          line.type !== prevQueueRef.current[idx]?.type ||
          line.content !== prevQueueRef.current[idx]?.content
      );

    if (!queueChanged) {
      return;
    }

    queueRef.current = safeQueue;
    prevQueueRef.current = safeQueue;

    if (safeQueue.length === 0) {
      setIsTyping(false);
      setCurrentLineIndex(0);
      setCharIndex(0);
      return;
    }

    if (!isTyping) {
      setCurrentLineIndex(0);
      setCharIndex(0);
      setIsTyping(true);
    }
  }, [linesQueue, isTyping]);

  useEffect(() => {
    const queue = queueRef.current;
    if (!isTyping || queue.length === 0) {
      return;
    }

    if (currentLineIndex >= queue.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = queue[currentLineIndex];
    if (!currentLine || typeof currentLine.content !== "string") {
      setCurrentLineIndex((prev) => prev + 1);
      setCharIndex(0);
      return;
    }

    const fullText = currentLine.content;

    if (charIndex === 0) {
      setOutputLines((prev) => {
        const lastIdx = prev.length - 1;
        if (
          lastIdx >= 0 &&
          prev[lastIdx].type === currentLine.type &&
          prev[lastIdx].content === ""
        ) {
          return prev;
        }
        return [...prev, { type: currentLine.type, content: "" }];
      });
    }

    if (charIndex < fullText.length) {
      const delay = 10 + Math.random() * 15;
      timeoutRef.current = setTimeout(() => {
        setOutputLines((prev) => {
          const updated = [...prev];
          const lastIdx = updated.length - 1;
          if (!updated[lastIdx] || updated[lastIdx].type !== currentLine.type) {
            updated.push({ type: currentLine.type, content: "" });
          }
          updated[lastIdx] = {
            ...updated[lastIdx],
            content: (updated[lastIdx].content || "") + fullText[charIndex],
          };
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      }, delay);
    } else {
      if (currentLineIndex + 1 < queue.length) {
        setCurrentLineIndex((prev) => prev + 1);
        setCharIndex(0);
      } else {
        setIsTyping(false);
        queueRef.current = [];
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isTyping, currentLineIndex, charIndex, setOutputLines]);

  return { isTyping };
};