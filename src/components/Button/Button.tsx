import styles from "./Button.module.css"

type Props = {
    children: React.ReactNode;
    onClick: () => void;
};

export default function Button({ children, onClick }: Props) {
    return (
        <button className={styles.button} type="button" onClick={onClick}>
            <span className={styles.buttonInner}>{children}</span>
        </button>
    )
}
