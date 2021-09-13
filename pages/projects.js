import Head from 'next/head'
import Image from'next/image'
import Layout from "../components/layout";
import projectStyle from "../styles/projects.module.css"
import typoStyle from '../styles/typography.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Projects(){
    return (
        <>
            <Head>
                <title>Some Projects</title>
            </Head>
            <Layout>
                <div className={utilStyles.container}>
                    <h1 className={typoStyle.headingM}>Some of my projects ⚙️</h1>
                    <div className={projectStyle.projectArea}>
                        <div className={projectStyle.projectCard}>
                            <div className={projectStyle.projectDetail}>
                                <Image className={projectStyle.projectImage} src="/projects/AlienInvasion.png" width={300} height={172}/>
                                <div className={projectStyle.projectTittle}><a href="https://github.com/TakshakRamteke/AlienInvasion" target="_blank">AlienInvasion</a></div>
                                <div className={projectStyle.projectDate}>Apr, 2021 - Present</div>
                                <div className={projectStyle.projectAbout}>
                                    A simple 2D game made with python's Pygame library. A clone of Space Invaders.
                                </div>
                            </div>
                        </div>
                        <div className={projectStyle.projectCard}>
                            <div className={projectStyle.projectDetail}>
                                <Image className={projectStyle.projectImage} src="/projects/prankboard.png" width={300} height={172}/>
                                <div className={projectStyle.projectTittle}><a href="https://github.com/TakshakRamteke/prankboard-Ble" target="_blank">PrankBoard-Ble</a></div>
                                <div className={projectStyle.projectDate}>Aug, 2021 - Present</div>
                                <div className={projectStyle.projectAbout}>
                                    Something similar to a USB Rubber ducky but over Bluetooth
                                    instead of USB.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}