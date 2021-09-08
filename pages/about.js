import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/typography.module.css'

export default function About(){
    return(
        <>
            <Head>
                <title>About me</title>
            </Head>
            <Layout>
                <h1 className={styles.headingL}>A bit 
                </h1>
                <h1 className={styles.dripyHeading}>About me
                </h1>
            </Layout>
        </>    
    )
}