import React, { useEffect, useState } from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";


const words = ["Full Stack Developer", "Programmer","Tech Enthusiast"];
export const Hero = () => {

    const [displayText, setDisplayText] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];
            if (!isDeleting) {
                // Typing effect: Add one character at a time
                if (charIndex < currentWord.length) {
                    setDisplayText((prev) => prev + currentWord[charIndex]);
                    setCharIndex((prev) => prev + 1);
                } else {
                    // Word is fully typed, start deleting after a delay
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                // Deleting effect: Remove one character at a time
                if (charIndex > 0) {
                    setDisplayText((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    // Word is fully deleted, switch to the next word
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        const typingSpeed = isDeleting ? 100 : 150; // Speed up deleting
        const timeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentWordIndex]);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am</h1>
                <p className={styles.nameTitle}>Abdul Azeem</p>
                <p className={styles.profileTitle}>
                I am a{" "}
                    <span className={styles.animatedWord}>{displayText}</span>
                    <span className={styles.cursor}></span>
                </p>
                <p className={styles.description}>Being a software engineer, I enjoy writing code that has
                    business value in the digital world. I am often wanting to take a deeper look into new
                    technologies, figuring out what problems they can solve, and employing them to create
                    solid and scalable solutions.</p>
                <ul className={styles.socailBtn}>
                    <li>
                        <a href="https://drive.google.com/file/d/1bX2pkeq2Jeil8DTGFRpoDqnV5pBYKb2i/view?usp=drivesdk" target='_blank' className={styles.contactBtn}>Download  CV</a>
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
