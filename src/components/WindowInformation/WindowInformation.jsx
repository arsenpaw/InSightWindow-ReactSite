import styles from './WindowInformation.module.css';
import windowImg from '../../assets/window-icon.png';
export default function WindowInformation() {
  return (
      <div className={styles.container}>
          <img src={windowImg} alt="Window" className={styles.windowIcon}/>
          <div className={styles.windowTitle}>
              <h2>Smart Window
              </h2>
              <p className={styles.windowDescription}>Your description here...</p>
          </div>
      </div>
  );
}
