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
                            <h3>FontEnd Developer</h3>
                            <p>I'm front end developer with experinece in building
                                responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experinece developing fast and optimized
                                back-ends systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/UIUXIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and
                                have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
}
