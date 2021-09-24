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
                                <a href="https://github.com/TakshakRamteke/AlienInvasion">
                                    <Image className={projectStyle.projectImage} src="/projects/alieninvasion.jpg" width={1200} height={600}/>  
                                </a>
                            </div>
                        </div>
                        <div className={projectStyle.projectCard}>
                            <div className={projectStyle.projectDetail}>
                                <a href="https://github.com/TakshakRamteke/prankboard-Ble">
                                    <Image className={projectStyle.projectImage} src="/projects/prankboard-ble.jpg" width={1200} height={600}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}