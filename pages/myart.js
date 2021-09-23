import Layout from "../components/layout";
import Head from 'next/head';
import utilStyle from "../styles/utils.module.css";
import typoStyle from '../styles/typography.module.css';

export default function myArt(){
    return (
        <>
        <Head>
            <title>My Art</title>
        </Head>
        <Layout>
            <div className={utilStyle.container}>
                <p className={typoStyle.taglineS}>
                    Hey 👋, Thanks for visiting this page (and my portfolio 🙂), 
                    Although I don't really draw as often but over time the sketches 
                    have piled up so i decided to Add the sketches to a Github Repo. 
                    So that this page dose'nt get filled with images.
                    <br/>
                    <br/>
                    You can find that repo 👉 <a className={typoStyle.link} href="https://github.com/TakshakRamteke/some-of-My-Art">here</a>
                    <br/>
                    <br/>
                    Hope You Like it, If you do please feel free to let me know 😄
                </p>
            </div>
        </Layout>
        </>
    )
}