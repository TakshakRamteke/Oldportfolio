import styles from './layout.module.css'
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
        <section className={styles.sec1}></section>
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