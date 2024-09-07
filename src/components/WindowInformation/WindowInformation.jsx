import styles from './WindowInformation.module.css';
import windowImg from '../../assets/window-icon.png';
import {Col, Row} from "react-bootstrap";

export default function WindowInformation() {
    return (
        <>
            <Row className={styles.container}>
                <Col xs={6} md={6} lg={6}>
                    <img src={windowImg} alt="Window" className={styles.windowIcon}/>
                </Col>
                <Col xs={6} md={6} lg={6}>
                    <h2 className={styles.windowTitle}>Smart Window </h2>
                    <p className={styles.windowDescription}>Your description here...</p>
                </Col>
            </Row>
        </>
    );
}
