import React from 'react';
import styles from './Main.module.css';
import imgLogo from '../../assets/axIcon.png';

export default function Main() {
    return (
        <div className={styles.app}>
            <main className={styles.mainContent}>
                <div className={styles.iconContainer}>
                    <div className={styles.icon}><img src={imgLogo} alt="Logo"/></div>
                </div>
                <h2 className={styles.mainHeading}>Inside Window</h2>
                <p className={styles.description}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. <br/>
                    Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus<br/>
                    ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.<br/>
                    Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.
                </p>
                <button className={styles.learnMoreButton}>Learn more</button>
            </main>
        </div>
    );
}
