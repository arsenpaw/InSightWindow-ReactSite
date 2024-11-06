// import styles from './WindowInformation.module.css';
// import windowImg from '../../assets/window-icon.png';
// import {Col, Row} from "react-bootstrap";
// import React from "react";
//
// export default function WindowInformation() {
//     return (
//         <>
//             <Row className={styles.container}>
//                 <Col xs={6} md={6} lg={6}>
//                     <img src={windowImg} alt="Window" className={styles.windowIcon}/>
//                 </Col>
//                 <Col xs={6} md={6} lg={6}>
//                     <h2 className={styles.windowTitle}>Smart Window </h2>
//                     <p className={styles.windowDescription}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Integer nec odio.</p>
//                 </Col>
//             </Row>
//         </>
//     );
// }

import React from 'react';
import styles from './WindowInformation.module.css';
import windowImg from '../../assets/window-icon.png';
import { Col, Row } from 'react-bootstrap';

export default function SmartAppInformation() {
    return (
        <>
            <Row className={styles.container}>
                <Col xs={6} md={6} lg={6} className={styles.windowImg}>
                    <img src={windowImg} alt="Application" />
                </Col>
                <Col xs={6} md={6} lg={6} className={styles.windowTitle}>
                    <h2 className={styles.windowBranding}>Smart Window</h2>
                    <p className={styles.windowDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    </p>
                </Col>
            </Row>
        </>
    );
}