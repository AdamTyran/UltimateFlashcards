import React, { useEffect, useRef, useState } from "react";

interface Props {
  displayedText: string;
  delay?: number;
}

const Text = ({ displayedText, delay = 100 }: Props) => {
  const [textCounter, setTextCounter] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTextCounter((prev) => prev + 1);
    }, delay);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [delay]);

  useEffect(() => {
    if (textCounter > displayedText.length - 1) {
      clearInterval(intervalRef.current);
    }
  }, [displayedText.length, textCounter]);
  return <div>{displayedText.slice(0, textCounter)}</div>;
};

export default Text;
