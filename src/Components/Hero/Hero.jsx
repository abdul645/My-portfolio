import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Abdul Azeem</h1>
                <p className={styles.description}>My name is Abdul Azeem, and I am an enthusiastic 
                    software engineer with a profound commitment to developing impactful code that
                     excels in the digital realm. I possess a keen interest in exploring emerging technologies,
                      understanding the problems they address, and leveraging them to construct superior
                       and scalable products.</p>
                <ul className={styles.socailBtn}>
                    <li>
                        <a href="https://drive.google.com/file/d/1i8sit-8VdaHRCzKYlhaleZ7L22OpbRkE/view?usp=drivesdk" className={styles.contactBtn}>Download  CV</a>
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
