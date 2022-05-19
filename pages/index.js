import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/typography.module.css";
import imgstyl from "../styles/image.module.css";
import utils from "../styles/utils.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Takshak Ramteke</title>
      </Head>
      <Layout>
        <div className={utils.container}>
          <Image
            priority
            className={imgstyl.circleImage}
            responsive
            src="/images/takshak.jpg"
            width={200}
            height={200}
            alt="TakshakRamteke"
          />
          <h2 className={styles.headingM}>Hey 👋, I'm </h2>
          <h1 className={styles.headingXL}>Takshak Ramteke</h1>
          <p className={styles.tagline}>.Learn📚 .Code❤️ .art🎨</p>
        </div>
      </Layout>
    </>
  );
}
