import React from 'react';
import styles from './SmartAppInformation.module.css';
import phoneIcon from '../../assets/smart-app-icon.png';
import { Col,Row } from 'react-bootstrap';

export default function SmartAppInformation() {
    return (
        <>
            <Row className={styles.container}>
                <Col xs={12} md={6} lg={4} className={styles.windowTitle}>
                    <h2 className={styles.windowBranding}>Phone Application</h2>
                    <p className={styles.windowDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    </p>
                </Col>
                <Col xs={6} md={6} lg={4} className={styles.phoneIcon}>
                    <img src={phoneIcon} alt="Application" />
                </Col>
            </Row>
        </>
    );
}
