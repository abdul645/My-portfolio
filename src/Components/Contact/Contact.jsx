import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/mail.png")} alt="Email icon" />
                <a href="mailto:azeem.mymail@gmail.com">azeem.mymail@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/abdulazeem96/">linkedin.com/in/abdulazeem96/</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="github icon" />
                <a href="https://github.com/abdul645">github.com/abdul645</a>
            </li>
        </ul>
    </footer>
  )
}
