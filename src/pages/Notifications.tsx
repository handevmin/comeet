import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./Notifications.module.css";

interface Notification {
  id: number;
  title: string;
  message: string;
  avatarClass: string;
  isUnread: boolean;
}

const Notifications: FunctionComponent = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("news");

  const notifications: Notification[] = [
    {
      id: 1,
      title: "지윤, 민주, 성민",
      message: "장소 조율 요청이 도착했습니다",
      avatarClass: styles.avatar1,
      isUnread: true,
    },
    {
      id: 2,
      title: "소민, 지아, 정민, 윤서 ...",
      message: "날짜 조율 요청이 도착했습니다",
      avatarClass: styles.avatar2,
      isUnread: true,
    },
    {
      id: 3,
      title: "경주 여행 모임",
      message: "중간 지점을 찾았습니다",
      avatarClass: styles.avatar3,
      isUnread: true,
    },
    {
      id: 4,
      title: "재민, 진서",
      message: "가능한 날짜가 집계되었습니다",
      avatarClass: styles.avatar4,
      isUnread: true,
    },
  ];

  const onNotificationClick = useCallback((notification: Notification) => {
    console.log("Notification clicked:", notification.title);
    // 알림 상세 페이지로 이동하거나 알림 처리 로직
  }, []);

  return (
    <Box className={styles.container}>
      <StatusBar />

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.notificationsTitle}>알림 화면</div>
        <div className={styles.logoContainer}>
          <img className={styles.comeetImage} alt="CoMeet" src="/image-1@2x.png" />
        </div>
      </Box>

      {/* Filter Pill */}
      <Box className={styles.filterContainer}>
        <Box
          className={activeFilter === "news" ? styles.pillActive : styles.pillInactive}
          onClick={() => setActiveFilter("news")}
        >
          <div className={styles.pillText}>소식</div>
        </Box>
      </Box>

      {/* Notifications List */}
      <Box className={styles.notificationsList}>
        {notifications.map((notification) => (
          <Box
            key={notification.id}
            className={styles.notificationItem}
            onClick={() => onNotificationClick(notification)}
          >
            {notification.isUnread && <div className={styles.unreadDot}></div>}
            <div className={notification.avatarClass}></div>
            <Box className={styles.notificationContent}>
              <div className={styles.notificationTitle}>{notification.title}</div>
              <div className={styles.notificationMessage}>{notification.message}</div>
            </Box>
          </Box>
        ))}
      </Box>
      
      <BottomNavigation />
    </Box>
  );
};

export default Notifications;
