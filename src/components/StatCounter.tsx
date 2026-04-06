import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";

interface StatCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

const StatCounter = ({ value, suffix = "", className = "" }: StatCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);
  const count = useCounter(value, isInView);

  return (
    <span ref={ref} className={`font-['Space_Grotesk'] font-bold ${className}`}>
      {count}{suffix}
    </span>
  );
};

export default StatCounter;
