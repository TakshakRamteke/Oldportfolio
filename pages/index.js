import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/typography.module.css'
import imgstyl from '../styles/image.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Takshak Ramteke</title>
      </Head>
      <Layout>
        <Image
          priority
          className = {imgstyl.circleImage}
          src = "/images/takshak.jpg"
          width = {250}
          height = {250}
        />
        <h2 className = {styles.headingM}>Hey 👋, I'm </h2>
        <h1 className={styles.headingXL}>Takshak Ramteke</h1>
        <p className={styles.tagline}>.Learn📚 .Code❤️ .art🎨</p>
      </Layout>
    </>
  )
}
