import Head from 'next/head'
import Layout from '../components/layout'
import typoStyle from '../styles/typography.module.css'
import utilStyle from '../styles/utils.module.css'
import Image from 'next/image'
import contactStyle from '../styles/contact.module.css'
import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare, faLinkedin, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons'

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
                        <FontAwesomeIcon icon = {faGithubSquare} className={contactStyle.logo}/>
                        </a>
                        
                    </li>
                    <li className={contactStyle.contactContainerElement}>
                        <a href="https://twitter.com/TakshakRamteke" target="_blank">
                        <FontAwesomeIcon icon = {faTwitterSquare} className={contactStyle.logo}/>
                        </a>
                        
                    </li>
                    <li className={contactStyle.contactContainerElement}>
                        <a href="https://www.linkedin.com/in/takshak-ramteke-15b840206/" target="_blank">
                        <FontAwesomeIcon icon = {faLinkedin} className={contactStyle.logo}/>
                        </a>
                        
                    </li>
                    <li className={contactStyle.contactContainerElement}>
                        <a href="mailto:takshakramteke0708@gmail.com" target="_blank">
                        <FontAwesomeIcon icon = {faGooglePlusSquare} className={contactStyle.logo}/>
                        </a>
                        
                    </li>
                </ul>
                <h3 className={contactStyle.H3}>If i can help you with something  </h3>
                <h3 className={contactStyle.H3}> just 'Drop a HI'</h3>
                <form className={contactStyle.form}>
                    <div>
                        <label>Your Name : </label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Your Email : </label>
                        <input type="email"/>
                    </div>
                    <div>
                        <label>Your Message : </label>
                        <input type="text"/>
                    </div>
                    <input type="submit" className={contactStyle.submit}/>
                </form>
                </div>
        </Layout>
        </>
        
    )
}