import styles from "./Display.module.css"

type Props={
  children:React.ReactNode;
}

export default function Display({children}:Props) {
  return (
    <div className={styles.display}>{children}</div>
  )
}
