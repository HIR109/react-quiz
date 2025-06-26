import styles from "./Result.module.css"
export default function Result({ maxQuizLen, correctAnswersLen }) {
    return (
        <div className={styles.result}>
            あなたの正解数は...
            <span className={styles.resultHighlight}>{`全${maxQuizLen}問中、${correctAnswersLen}問`}</span>
            でした！
        </div>
    )
}
