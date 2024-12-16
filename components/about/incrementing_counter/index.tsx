"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
type Props = {
  finalValue: number;
  duration: number;
  content: string;
};

const IncrementingCounter: React.FC<Props> = ({
  finalValue,
  duration,
  content,
}) => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    let interval: any;
    if (count < finalValue) {
      interval = setInterval(() => {
        return setCount((prevCount) => prevCount + 1);
      }, duration);
    }

    return () => clearInterval(interval);
  }, [count, finalValue]);
  return (
    <div className={styles.content}>
      <div>
        <p>{content}</p>
      </div>
      <div>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default IncrementingCounter;
