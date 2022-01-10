import Head from 'next/head'
import Layout from '../components/layout'
import typoStyle from '../styles/typography.module.css'
import utilStyle from '../styles/utils.module.css'
import contactStyle from '../styles/contact.module.css'
import {GithubOutlined, TwitterOutlined, LinkedinOutlined, GooglePlusOutlined} from '@ant-design/icons';

export default function Contact(){
    return (
        <>
        <Head>
            <title>Contact me</title>
        </Head>
        <Layout>
            <div className={utilStyle.container}>
                <h1>Feel free to </h1>
                <h1 className={typoStyle.headingM}>Contact me 🤙</h1>
                <ul className={contactStyle.contactContainer}>
                    <li className={contactStyle.contactContainerElement}>
                        <a href="https://github.com/TakshakRamteke" target="_blank">
                            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
                        </a>
                    </li>

                    <li className={contactStyle.contactContainerElement}>
                        <a href="https://dribbble.com/TakshakRamteke">
                            <img src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" />
                        </a>
                    </li>

                    <li className={contactStyle.contactContainerElement}>
                        <a href="https://twitter.com/TakshakRamteke" target="_blank">
                            <img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" />
                        </a>
                    </li>

                    <li className={contactStyle.contactContainerElement}>
                        <a href="https://www.linkedin.com/in/takshak-ramteke-15b840206/" target="_blank">
                            <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
                        </a>
                    </li>

                    <li className={contactStyle.contactContainerElement}>
                        <a href="mailto:takshakramteke0708@gmail.com" target="_blank">
                            <img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" />
                        </a>
                    </li>

                    <li className={contactStyle.contactContainerElement}>
                        <a href="https://www.instagram.com/takshak_ramteke/">
                            <img src ="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
                        </a>
                    </li>

                </ul>
                </div>
        </Layout>
        </>
        
    )
}