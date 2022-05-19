import Head from "next/head";
import Layout from "../components/layout";
import typoStyle from "../styles/typography.module.css";
import utilStyle from "../styles/utils.module.css";
import contactStyle from "../styles/contact.module.css";
import {
  FiGithub,
  FiDribbble,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import { SiGmail } from "react-icons/si";

export default function Contact() {
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
                <FiGithub className={contactStyle.icon} />
              </a>
            </li>

            <li className={contactStyle.contactContainerElement}>
              <a href="https://dribbble.com/TakshakRamteke">
                <FiDribbble className={contactStyle.icon} />
              </a>
            </li>

            <li className={contactStyle.contactContainerElement}>
              <a href="https://twitter.com/TakshakRamteke" target="_blank">
                <FiTwitter className={contactStyle.icon} />
              </a>
            </li>

            <li className={contactStyle.contactContainerElement}>
              <a
                href="https://www.linkedin.com/in/takshak-ramteke-15b840206/"
                target="_blank"
              >
                <FiLinkedin className={contactStyle.icon} />
              </a>
            </li>

            <li className={contactStyle.contactContainerElement}>
              <a href="mailto:takshakramteke0708@gmail.com" target="_blank">
                <SiGmail className={contactStyle.icon} />
              </a>
            </li>

            <li className={contactStyle.contactContainerElement}>
              <a href="https://www.instagram.com/takshak_ramteke/">
                <FiInstagram className={contactStyle.icon} />
              </a>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}
