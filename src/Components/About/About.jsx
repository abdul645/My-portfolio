import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

export const About = () => {
    return (

        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutimg.png")} 
                alt="about image"
                className={styles.aboutImage}
                />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>FrontEnd Developer</h3>
                            <p>I'm a front-end developer with experience in creating responsive and optimized web applications.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>BackEnd Developer</h3>
                            <p>I have experience in building fast and optimized back-end systems and APIs.</p>
                        </div>
                    </li>
                    {/* <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/UIUXIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and
                                have created design systems as well</p>
                        </div>
                    </li> */}
                </ul>
            </div>

        </section>
    )
}
