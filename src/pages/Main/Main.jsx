import React from 'react';
import styles from './Main.module.css';
import WindowInformation from "../../components/WindowInformation/WindowInformation";
import SmartAppInformation from "../../components/SmartAppInformation/SmartAppInformation";
import {Container, Row} from 'react-bootstrap';
import StartupInfo from '../../components/StartupInfo/StartupInfo';
export default function Main() {
    return (
        <Container className={styles.app}>
            <Row className={styles.mainContent}>
               <StartupInfo/>
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
