import { useState, useEffect } from "react";
import styles from "./StartLoading.module.css";

export default function StartLoading({ onFinish }) {
    const [count, setCount] = useState(3);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (count > 0) {
           const startTimer =  setTimeout(() => {
                setCount((prev) => prev - 1);
            }, 1000);
            return () => clearTimeout(startTimer);
        }
    }, [count]);

    useEffect(() => {
        if (count === 0) {
           const finishTimer = setTimeout(() => {
                setOpen(true);
            },1000);
            return () => clearTimeout(finishTimer);
        }
    },[count]);

useEffect(() => {
    if (open===true) {
      const finishTimer = setTimeout(() => {
        onFinish();
      }, 1000);
      return () => clearTimeout(finishTimer);
    }
  }, [open]);

    return (
        <div className={`${styles.loadingWrapper} ${open ? styles.open : ""}`}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
            <div className={styles.countText}>
                {count === 0 ? "Start!!" : count}
            </div>
        </div>
    );
}