import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, Abdul Azeem</h1>
                <p className={styles.description}>Being a software engineer, I enjoy writing code that has 
                    business value in the digital world. I am often wanting to take a deeper look into new 
                    technologies, figuring out what problems they can solve, and employing them to create 
                    solid and scalable solutions.</p>
                <ul className={styles.socailBtn}>
                    <li>
                        <a href="https://drive.google.com/file/d/1ptx7Yh3Zzr5gy9rSDqxjIiA3vV6AyQ7p/view" className={styles.contactBtn}>Download  CV</a>
                    </li>
                    <ul className={styles.BtnLinks}>
                        <li className={styles.Btn}>
                            <a href="tel:+91 9634003802">
                                <FaSquarePhone className={styles.soc_icon} />
                            </a>
                        </li>
                        <li className={styles.Btn}>
                            <a href="https://github.com/abdul645" >
                                <IoLogoGithub className={styles.soc_icon} />
                            </a>
                        </li>
                        <li className={styles.Btn}>
                            <a href="https://www.linkedin.com/in/abdulazeem96/">
                                <IoLogoLinkedin className={styles.soc_icon} />
                            </a>
                        </li>
                    </ul>

                </ul>
            </div>
            <img src={getImageUrl("hero/myimagee.png")} alt="my image" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
