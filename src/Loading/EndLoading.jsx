import styles from "./EndLoading.module.css"

export default function EndLoading({ isActive }) {
    return (
        <>
            <div className={`${styles.door} ${styles.left} ${isActive ? styles.leftActive : ""}`}>結果</div>
            <div className={`${styles.door} ${styles.right} ${isActive ? styles.rightActive : ""}`}>発表</div>
        </>
    )
}
