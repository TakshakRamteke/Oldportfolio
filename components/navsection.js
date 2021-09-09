import styles from './navsection.module.css'
import Link from 'next/link'

export default function NavSection({children}){
    return (
        <>
        <section className={styles.sec2}>
            <div className={styles.row}>
                <Link href="/about">
                    <a className={styles.linktext}><h1> About →</h1></a>
                </Link>
            </div>
            <div className={styles.row}>
            <Link href="/">
                    <a className={styles.linktext}><h1>Contact →</h1></a>
                </Link>
            </div>
            <div className={styles.row}>
            <Link href="/">
                    <a className={styles.linktext}><h1>Projects →</h1></a>
                </Link>
            </div>
            <div className={styles.row}>
            <Link href="/">
                    <a className={styles.linktext}><h1> My art →</h1></a>
                </Link>
            </div>
        </section>
        </>
    )
}