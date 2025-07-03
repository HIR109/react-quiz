import styles from "./Result.module.css";

interface ResultProps {
    maxQuizLen: number;
    correctAnswersLen: number;
}

export default function Result({ maxQuizLen, correctAnswersLen }: ResultProps) {
    return (
        <div className={styles.result}>
            あなたの正解数は…
            <span className={styles.resultHighlight}>
                {`全${maxQuizLen}問中、${correctAnswersLen}問`}
            </span>
            でした！
        </div>
    );
}