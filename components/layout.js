import styles from './layout.module.css'
import Section1 from './section1'
import NavSection from './navsection'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Layout({children, home}){

    const router = useRouter()
    function isActive(route){
        if(route==router.pathname){
            return true
        }else{
            return false
        }
    }

    return (
        <body>
        <header>
		  <nav className={styles.nav}>
			  <div className={isActive('/') ? styles.logoActive : styles.logo}>
                  <Link href="/">
                  <a className={styles.link}>
                      HOME
                    </a>
                </Link>
                  
                </div>
			  <div className={styles.resume}>
                  <a href="https://drive.google.com/file/d/1HtIcaywIU4wXDGk6f9RmWEQzVz31JtP1/view?usp=sharing" target="_blank" className={styles.link}>
                      Resume
                </a>
                </div>
			  <div className={isActive('/experiences') ? styles.experienceActive : styles.experience}>
                  <Link href="/experiences">
                    <a className={styles.link}>
                        Experience
                    </a>
                  </Link>
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