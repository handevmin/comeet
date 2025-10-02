import { FunctionComponent, useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ChatList.module.css";

const ChatList: FunctionComponent = () => {
  const navigate = useNavigate();

  const onChatClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const onNewChatClick = useCallback(() => {
    navigate("/invite-friends");
  }, [navigate]);

  return (
    <Box className={styles.container}>
      {/* Status Bar */}
      <Box className={styles.statusBar}>
        <div className={styles.time}>9:41</div>
        <Box className={styles.rightSide}>
          <img className={styles.batteryIcon} alt="" src="/Battery.svg" />
          <img className={styles.wifiIcon} alt="" src="/Wifi.svg" />
          <img className={styles.mobileSignalIcon} alt="" src="/Mobile-Signal.svg" />
          <img className={styles.recordingIndicatorIcon} alt="" src="/Recording-Indicator.svg" />
        </Box>
      </Box>

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.chatTitle}>Chat</div>
        <div className={styles.logoContainer}>
          <img className={styles.comeetImage} alt="CoMeet" src="/image-1@2x.png" />
        </div>
        <div className={styles.plusButton} onClick={onNewChatClick}>
          <div className={styles.plusIcon}>+</div>
        </div>
      </Box>

      {/* Filter Pills */}
      <Box className={styles.pills}>
        <Box className={styles.pillActive}>
          <div className={styles.pillText}>전체</div>
        </Box>
        <Box className={styles.pillInactive}>
          <div className={styles.pillText}>친구</div>
        </Box>
      </Box>

      {/* Chat List */}
      <Box className={styles.chatList}>
        <Box className={styles.chatItem} onClick={onChatClick}>
          <Box className={styles.unreadDot} />
          <Box className={styles.avatar1} />
          <Box className={styles.chatContent}>
            <div className={styles.chatName}>지윤, 민주, 성민</div>
          </Box>
        </Box>

        <Box className={styles.chatItem} onClick={onChatClick}>
          <Box className={styles.unreadDot} />
          <Box className={styles.avatar2} />
          <Box className={styles.chatContent}>
            <div className={styles.chatName}>소민, 지아, 정민, 윤서 ...</div>
          </Box>
        </Box>

        <Box className={styles.chatItem} onClick={onChatClick}>
          <Box className={styles.unreadDot} />
          <Box className={styles.avatar3} />
          <Box className={styles.chatContent}>
            <div className={styles.chatName}>경주 여행 모임</div>
          </Box>
        </Box>

        <Box className={styles.chatItem} onClick={onChatClick}>
          <Box className={styles.unreadDot} />
          <Box className={styles.avatar4} />
          <Box className={styles.chatContent}>
            <div className={styles.chatName}>재민, 진서</div>
          </Box>
        </Box>

        <Box className={styles.chatItem} onClick={onChatClick}>
          <Box className={styles.unreadDot} />
          <Box className={styles.avatar5} />
          <Box className={styles.chatContent}>
            <div className={styles.chatName}>서울</div>
          </Box>
        </Box>

        <Box className={styles.chatItem} onClick={onChatClick}>
          <Box className={styles.avatar6} />
          <Box className={styles.chatContent}>
            <div className={styles.chatName}>선하, 용운, 주빈, 지예 ...</div>
          </Box>
        </Box>

        <Box className={styles.chatItem} onClick={onChatClick}>
          <Box className={styles.avatar7} />
          <Box className={styles.chatContent}>
            <div className={styles.chatName}>0626</div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatList;