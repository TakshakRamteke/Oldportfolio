import Head from 'next/head'
import Layout from '../components/layout'
import typoStyle from '../styles/typography.module.css'
import utilStyle from '../styles/utils.module.css'
import Image from 'next/image'
import contactStyle from '../styles/contact.module.css'

export default function Contact(){
    return (
        <>
        <Head>
            <title>Contact me</title>
        </Head>
        <Layout>
            <div className={utilStyle.container}>
                <h1>Feel free to </h1>
                <h1 className={typoStyle.dripyHeading}>Contact me 🤙</h1>
                <ul className={contactStyle.contactContainer}>
                    <li className={contactStyle.contactContainerElement}>
                        <a href="https://github.com/TakshakRamteke" target="_blank">
                        <Image
                            src='/icons/contact/github.png'
                            width={60}
                            height={60}
                        />
                        </a>
                        
                    </li>
                    <li className={contactStyle.contactContainerElement}>
                        <a href="https://twitter.com/TakshakRamteke" target="_blank">
                        <Image
                            src='/icons/contact/twitter.png'
                            width={60}
                            height={60}
                        />
                        </a>
                        
                    </li>
                    <li className={contactStyle.contactContainerElement}>
                        <a href="https://www.linkedin.com/in/takshak-ramteke-15b840206/" target="_blank">
                        <Image
                            src='/icons/contact/linkedin.png'
                            width={60}
                            height={60}
                        />
                        </a>
                        
                    </li>
                    <li className={contactStyle.contactContainerElement}>
                        <a href="mailto:takshakramteke0708@gmail.com" target="_blank">
                        <Image
                            src='/icons/contact/gmail.png'
                            width={60}
                            height={60}
                        />
                        </a>
                        
                    </li>
                </ul>
                </div>
        </Layout>
        </>
        
    )
}