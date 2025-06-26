import { Link } from "react-router-dom"
import { ROUTES } from "../const"
import styles from "./StartPage.module.css";

export default function StartPage() {
    const questionMarks = Array.from({ length: 30 });
    return (
        <div className={styles.topWrapper}>
            {questionMarks.map((_, index) => {
                const style = {
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                };
                return (
                    <span key={index} className={styles.questionMark} style={style}>
                        ?
                    </span>
                );
            })}

            <div className={styles.centerContent}>
                <h1>クイズゲーム</h1>
                <Link to={ROUTES.QUIZ} >
                    <button className={styles.start}>Let's Start!!</button>
                </Link>
            </div>
        </div>
    );
}
