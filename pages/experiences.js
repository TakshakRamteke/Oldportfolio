import Head from "next/head";
import Layout from "../components/layout";
import expStyle from "../styles/experience.module.css";

export default function Experience(){
    return(
        <>
            <Head>
                <title>My Experience</title>
            </Head>
            <Layout>
            <div className={expStyle.conatiner}>
                <h2 className={expStyle.headingL}>Experience</h2>
                    <section className={expStyle.timelineSection}>
                        <div className={expStyle.timelineItems}>
                            <div className={expStyle.timelineItem}>
                                <div className={expStyle.timelineDot}></div>
                                <div className={expStyle.timelineDate}>Jun 2021 - Present</div>
                                <div className={expStyle.timelineContent}>
                                    <h3>Webmaster</h3>
                                    <p>IEEE S.B.Jain Student Branch</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <h2 className={expStyle.headingL}>Volunteering Experience</h2>
                        <section className={expStyle.timelineSection}>
                            <div className={expStyle.timelineItems}>
                                <div className={expStyle.timelineItem}>
                                    <div className={expStyle.timelineDot}></div>
                                    <div className={expStyle.timelineDate}>Aug 2021 - Present</div>
                                    <div className={expStyle.timelineContent}>
                                        <h3>Student Representative</h3>
                                        <p>IEEE PES HAC Executive Commitee</p>
                                    </div>
                                </div>
                                    <div className={expStyle.timelineItem}>
                                        <div className={expStyle.timelineDot}></div>
                                        <div className={expStyle.timelineDate}>May 2021 - Present</div>
                                        <div className={expStyle.timelineContent}>
                                            <h3>Coordinator</h3>
                                            <p>IEEE Nagpur SubSection Technical and Website Team</p>
                                        </div>
                                    </div>
                                    <div className={expStyle.timelineItem}>
                                        <div className={expStyle.timelineDot}></div>
                                            <div className={expStyle.timelineDate}>Aug 2021 - Nov 2021</div>
                                                <div className={expStyle.timelineContent}>
                                                    <h3>Contributor</h3>
                                                    <p>GWOC'21 (GirlScript Winter of Code)</p>
                                                 </div>
                                    </div>
                                    <div className={expStyle.timelineItem}>
                                        <div className={expStyle.timelineDot}></div>
                                        <div className={expStyle.timelineDate}>Apr 2021 - Oct 2021</div>
                                        <div className={expStyle.timelineContent}>
                                            <h3>Member</h3>
                                            <p>IEEE Bombay Section Website Team</p>
                                        </div>
                                    </div>
                                    <div className={expStyle.timelineItem}>
                                        <div className={expStyle.timelineDot}></div>
                                        <div className={expStyle.timelineDate}>Jul 2021 - Sep 2021</div>
                                        <div className={expStyle.timelineContent}>
                                            <h3>University Leader</h3>
                                            <p>Community Classroom</p>
                                        </div>
                                    </div>
                                    <div className={expStyle.timelineItem}>
                                        <div className={expStyle.timelineDot}></div>
                                        <div className={expStyle.timelineDate}>May 2021 - Jul 2021</div>
                                        <div className={expStyle.timelineContent}>
                                            <h3>Event Ambassador</h3>
                                            <p>"Origo" NLP Event in IEEE Kerla Section</p>
                                        </div>
                                    </div>
                                    <div className={expStyle.timelineItem}>
                                        <div className={expStyle.timelineDot}></div>
                                        <div className={expStyle.timelineDate}>Apr 2021 - Apr 2021</div>
                                        <div className={expStyle.timelineContent}>
                                            <h3>Volunteer</h3>
                                            <p>IEEE PES Day @ PES S.B.Jain Student Chapter</p>
                                        </div>
                                    </div>
                                </div>
                        </section>
                </div>
            </Layout>
        </>
    )
}
