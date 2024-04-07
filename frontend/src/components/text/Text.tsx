import React, { useEffect, useRef, useState } from "react";

interface Props {
  displayedText: string;
  delay?: number;
}

const Text = ({ displayedText, delay = 100 }: Props) => {
  const [textCount, setTextCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTextCount((prev) => prev + 1);
    }, delay);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [delay]);

  useEffect(() => {
    if (textCount > displayedText.length - 1) {
      clearInterval(intervalRef.current);
    }
  }, [displayedText.length, textCount]);
  return <div>{displayedText.slice(0, textCount)}</div>;
};

export default Text;
