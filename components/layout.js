import styles from './layout.module.css'
import Section1 from './section1'
export default function Layout({children}){
    return (
        <>
        <header>
		  <nav className={styles.nav}>
			  <div className={styles.logo}>LOGO</div>
			  <div className={styles.join}>JOIN</div>
			  <div className={styles.contrib}>CONTRIBUTE</div>
		  </nav>
	    </header>
        <main className={styles.main}>
            <Section1></Section1>
        <section className={styles.sec2}>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
        </section>
        </main>
        </>
    )

}