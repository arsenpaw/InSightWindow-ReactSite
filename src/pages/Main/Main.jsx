import React from 'react';
import styles from './Main.module.css';
import imgLogo from '../../assets/axIcon.png';
import WindowInformation from "../../components/WindowInformation/WindowInformation";
import SmartAppInformation from "../../components/SmartAppInformation/SmartAppInformation";

import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';

export default function Main() {
    return (
        <Container className={styles.app}>
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
                    }}>
                        Learn more
                    </Button>
                </Col>
            </Row>
            <Row id="moreInfoSection">
                <WindowInformation/>
            </Row>
            <Row>
                <SmartAppInformation/>

            </Row>


        </Container>
    );
}
