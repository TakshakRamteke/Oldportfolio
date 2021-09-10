import styles from './layout.module.css'
import Section1 from './section1'
import NavSection from './navsection'
export default function Layout({children, home}){
    return (
        <body>
        <header>
		  <nav className={styles.nav}>
			  <div className={styles.logo}>LOGO</div>
			  <div className={styles.join}>
                  <a href="https://github.com/TakshakRamteke/1st-nextjs-project" className={styles.link}>
                      FORK
                </a>
                </div>
			  <div className={styles.contrib}>
                  <a href="https://github.com/TakshakRamteke/1st-nextjs-project" className={styles.link}>
                    CONTRIBUTE
                  </a>
                </div>
		  </nav>
	    </header>
        <main className={styles.main}>
            <Section1>{children}</Section1>
            <NavSection></NavSection>
        </main>
        </body>

    )

}