import { FunctionComponent, useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./BottomNavigation.module.css";

const BottomNavigation: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onProfileClick = useCallback(() => {
    navigate("/friends-list");
  }, [navigate]);

  const onChatClick = useCallback(() => {
    navigate("/chat-list");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onNotificationClick = useCallback(() => {
    navigate("/notifications");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Box className={styles.bottomNav}>
      <Box 
        className={`${styles.navItem} ${isActive('/friends-list') ? styles.active : ''}`}
        onClick={onProfileClick}
      >
        <div className={styles.profileIcon}></div>
      </Box>
      
      <Box 
        className={`${styles.navItem} ${isActive('/chat-list') ? styles.active : ''}`}
        onClick={onChatClick}
      >
        <div className={styles.chatIcon}></div>
      </Box>
      
      <Box 
        className={`${styles.navItem} ${isActive('/dashboard') ? styles.active : ''}`}
        onClick={onHomeClick}
      >
        <div className={styles.homeIcon}></div>
      </Box>
      
      <Box 
        className={`${styles.navItem} ${isActive('/notifications') ? styles.active : ''}`}
        onClick={onNotificationClick}
      >
        <div className={styles.notificationIcon}>
          <div className={styles.notificationDot}></div>
        </div>
      </Box>
      
      <Box 
        className={`${styles.navItem} ${isActive('/settings') ? styles.active : ''}`}
        onClick={onSettingsClick}
      >
        <div className={styles.settingsIcon}></div>
      </Box>
    </Box>
  );
};

export default BottomNavigation;
