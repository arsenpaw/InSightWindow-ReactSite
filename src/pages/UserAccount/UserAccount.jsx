import styles from './UserAccount.module.css';
import UserPanel from "../../components/UserPanel/UserPanel";
import UserDevices from "../../components/UserDevice/UserDevices";
import {DeviceProvider} from "../../contexts/DeviceContext";


export default function UserAccount() {


    return (<div className={styles.allUserInfo}>
        <DeviceProvider>
        <UserPanel />
        <UserDevices  />
        </DeviceProvider>
    </div>);
}