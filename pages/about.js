import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/typography.module.css'
import abtstyl from '../styles/about.module.css'
import utils from '../styles/utils.module.css'

export default function About(){
    return(
        <>
            <Head>
                <title>About me</title>
            </Head>
            
            <Layout>
                <div className={utils.container}>
                    <h1 className={styles.dripyHeading}>A bit About me</h1>
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
                    
                    <div>
                        <h1 className={styles.headingSCenter}>Some of my skills</h1>
                        <ul className={abtstyl.skillGrid}>
                            <li className={abtstyl.skill}>
                                Languages :
                                <Image
                                responsive
                                src="/icons/languages/python.png"
                                width={37}
                                height={37}
                                /> 
                                <Image
                                responsive 
                                src="/icons/languages/JS.png"
                                width={37}
                                height={37}
                                />
                                <Image
                                responsive
                                src="/icons/languages/bash.png"
                                width={37}
                                height={37}
                                /> 
                                <Image
                                responsive  
                                src="/icons/languages/java.png"
                                width={35}
                                height={37}
                                />
                                <Image
                                responsive  
                                src="/icons/languages/c++.png"
                                width={32}
                                height={37}
                                />
                            </li>
                            <li className={abtstyl.skill}>
                                Franeworks :
                                <Image 
                                responsive 
                                src="/icons/frameworks/nextjs.png"
                                width={32}
                                height={32}
                                />
                                <Image  
                                responsive
                                src="/icons/frameworks/node.png"
                                width={33}
                                height={37}
                                />
                                <Image  
                                responsive
                                src="/icons/frameworks/react.png"
                                width={43}
                                height={37}
                                />
                                <Image  
                                responsive
                                src="/icons/frameworks/django.png"
                                width={27}
                                height={37}
                                />
                                <Image  
                                responsive
                                src="/icons/frameworks/flask.png"
                                width={43}
                                height={37}
                                />
                            </li>
                            <li className={abtstyl.skill}>
                                Tools : 
                                <Image  
                                responsive
                                src="/icons/tools/docker.png"
                                width={46}
                                height={37}
                                />
                                <Image  
                                responsive
                                src="/icons/tools/inkscape.png"
                                width={38}
                                height={37}
                                />
                                <Image  
                                responsive
                                src="/icons/tools/gimp.png"
                                width={37}
                                height={37}
                                />
                                <Image 
                                responsive 
                                src="/icons/tools/canva.png"
                                width={37}
                                height={37}
                                />
                            </li>
                            <li className={abtstyl.skill}>
                                Platforms :
                                <Image  
                                responsive
                                src="/icons/platforms/esp.png"
                                width={37}
                                height={37}
                                />
                                <Image  
                                responsive
                                src="/icons/platforms/rpi.png"
                                width={27}
                                height={40}
                                />
                                <Image  
                                responsive
                                src="/icons/platforms/arduino.png"
                                width={37}
                                height={37}
                                />
                                <Image  
                                responsive
                                src="/icons/platforms/GC.png"
                                width={48}
                                height={37}
                                />
                            </li>
                        </ul>
                    </div>
                    </div>
            </Layout>
        </>    
    )
}