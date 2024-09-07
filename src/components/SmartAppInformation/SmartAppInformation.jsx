import React from 'react';
import styles from './SmartAppInformation.module.css';
import phoneIcon from '../../assets/smart-app-icon.png';
import { Col,Container,Row } from 'react-bootstrap';

export default function SmartAppInformation() {
    return (
        <Container>
            <Row  className={styles.container}>
                <Col xs={6} md={6} lg={4}>
                    <img src={phoneIcon} alt="Application" className={styles.phoneIcon} />
              </Col>
                <Col xs={6} md={6} lg={4}>
                    <div className={styles.windowTitle}>
                        <h2>Phone Application</h2>
                        <p className={styles.windowDescription}>Your description here...</p>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}
