import { FunctionComponent, useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Calendar from "./Calendar";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/add-event");
  }, [navigate]);

  const onChatClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const onChatListClick = useCallback(() => {
    navigate("/chat-list");
  }, [navigate]);

  const onLogoutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDateClick = useCallback((date: Date) => {
    // 날짜 클릭 시 일정 추가 페이지로 이동
    navigate("/add-event");
  }, [navigate]);

  return (
    <Box className={styles.div}>
      <StatusBar />
      
      <Box className={styles.header}>
        <img className={styles.comeetImage} alt="CoMeet" src="/image-1@2x.png" />
      </Box>
      
      <Box className={styles.pills}>
        <Box className={styles.pill}>
          <div className={styles.div7}>약속</div>
        </Box>
        <Box className={styles.divPill}>
          <div className={styles.div7}>학교 시간표</div>
        </Box>
        <Box className={styles.plusButton} onClick={onImageClick}>
          <div className={styles.plusIcon}>+</div>
        </Box>
      </Box>
      
      <Box className={styles.scrollContainer}>
        <Box className={styles.calendarContainer}>
          <Calendar onDateClick={onDateClick} />
        </Box>
        
        <Box className={styles.list}>
          <div className={styles.div6}>일정</div>
          <Box className={styles.lists}>
            <Box className={styles.cell} onClick={onChatClick} style={{ cursor: 'pointer' }}>
              <Box className={styles.avatar}>
                <Box className={styles.avatarChild} />
              </Box>
              <Box className={styles.text}>
                <div className={styles.div2}>지윤, 민주, 성민</div>
                <div className={styles.emailfakedomainnet}>25.06.23 | 19:00</div>
              </Box>
            </Box>
            <Box className={styles.cell}>
              <Box className={styles.avatar}>
                <Box className={styles.avatarInner} />
              </Box>
              <Box className={styles.text}>
                <div className={styles.div2}>소민, 지아, 정민, 윤서 ...</div>
                <div className={styles.emailfakedomainnet}>25.06.28 | 13:00</div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      
      <BottomNavigation />
    </Box>
  );
};

export default Dashboard;
