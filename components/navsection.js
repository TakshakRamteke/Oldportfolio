import styles from './navsection.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function NavSection({children}){
    
    const router = useRouter()
    function isActive(route){
        if(route==router.pathname){
            return true
        }else{
            return false
        }
    }

    return (
        <>
        <section className={styles.sec2}>
            <div className={styles.row}>
                <Link href="/about">
                    <a className={isActive('/about') ? styles.active : styles.linktext}>
                        <h1> About →</h1>
                    </a>
                </Link>
            </div>
            <div className={styles.row}>
            <Link href="/contact">
                    <a className={isActive('/contact') ? styles.active : styles.linktext}>
                        <h1>Contact →</h1>
                    </a>
                </Link>
            </div>
            <div className={styles.row}>
            <Link href="/">
                    <a className={isActive('/projects') ? styles.active : styles.linktext}>
                        <h1>Projects →</h1>
                    </a>
                </Link>
            </div>
            <div className={styles.row}>
            <Link href="/">
                    <a className={isActive('/myart') ? styles.active : styles.linktext}>
                        <h1> My art →</h1>
                    </a>
                </Link>
            </div>
        </section>
        </>
    )
}