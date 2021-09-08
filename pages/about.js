import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/typography.module.css'
import utils from '../styles/utils.module.css'

export default function About(){
    return(
        <>
            <Head>
                <title>About me</title>
            </Head>
            
            <Layout>
                    <h1 className={styles.dripyHeading}>A bit About me
                    </h1>
                    <ul className={styles.taglineS}>
                        <li>
                            👨‍🎓 I'm a student from 🇮🇳, currently pursuing Bachelors in Computer Science and Engineering.
                        </li>
                        <li>
                            🖥️ I'm really passionate about learning new Stuff about computers and technology in general.
                        </li>
                        <li>
                            💙 In love with Anime, Manga.
                        </li>
                        <li>
                            🎨 Also love making Sketche's sometimes.
                        </li>
                    </ul>
            </Layout>
        </>    
    )
}