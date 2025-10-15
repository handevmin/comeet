import { FunctionComponent, useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./Settings.module.css";

const Settings: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    // 로그아웃 처리
    console.log("로그아웃");
    navigate("/");
  }, [navigate]);

  return (
    <Box className={styles.container}>
      <StatusBar />

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.title}>설정</div>
        <div className={styles.logoContainer}>
          <img className={styles.comeetImage} alt="CoMeet" src="/image-1@2x.png" />
        </div>
      </Box>

      {/* Content */}
      <Box className={styles.content}>
        <Box className={styles.logoutButton} onClick={onLogoutClick}>
          <div className={styles.logoutIcon}></div>
          <div className={styles.logoutText}>로그아웃</div>
        </Box>
      </Box>

      <BottomNavigation />
    </Box>
  );
};

export default Settings;
