import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./StatusBar.module.css";

const StatusBar: FunctionComponent = () => {
  return (
    <Box className={styles.statusBar}>
      <Box className={styles.rightSide}>
        <img className={styles.wifiIcon} alt="" src="/Wifi.svg" />
        <img className={styles.mobileSignalIcon} alt="" src="/Mobile-Signal.svg" />
        <img className={styles.batteryIcon} alt="" src="/Battery.svg" />
      </Box>
    </Box>
  );
};

export default StatusBar;
