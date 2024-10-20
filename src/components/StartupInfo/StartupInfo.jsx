import styles from './StartupInfo.module.css';
import {Col, Row} from "react-bootstrap";
import imgLogo from "../../assets/axIcon.png";
import Button from "react-bootstrap/Button";
import React from "react";

export default function StartupInfo() {
    return (
        <>
            <Row className={styles.mainContent}>
                <Col className={styles.iconContainer}>
                    <div className={styles.icon}>
                        <img src={imgLogo} alt="Logo"/>
                    </div>
                </Col>
                <Col>
                    <h2 className={styles.mainHeading}>Inside Window</h2>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. <br/>
                        Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus<br/>
                        ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.<br/>
                        Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget
                        diam.
                    </p>
                    <Button className={styles.learnMoreButton} onClick={() => {
                        const section = document.getElementById("moreInfoSection");
                        if (section) {
                            section.scrollIntoView({behavior: "smooth"});
                        }
                    }}>Learn more
                    </Button>
                </Col>
            </Row>
        </>
    );
}
