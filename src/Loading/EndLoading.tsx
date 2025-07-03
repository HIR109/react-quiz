import styles from "./EndLoading.module.css"

type Props = {
    isActive: boolean;
};

export default function EndLoading({ isActive }: Props) {
    return (
        <>
            <div className={`${styles.door} ${styles.left} ${isActive ? styles.leftActive : ""}`}>結果</div>
            <div className={`${styles.door} ${styles.right} ${isActive ? styles.rightActive : ""}`}>発表</div>
        </>
    )
}
