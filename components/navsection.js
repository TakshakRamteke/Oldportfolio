import styles from './navsection.module.css'

export default function NavSection({children}){
    return (
        <>
        <section className={styles.sec2}>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
        </section>
        </>
    )
}