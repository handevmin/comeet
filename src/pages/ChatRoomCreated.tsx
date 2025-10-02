import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./ChatRoomCreated.module.css";

const ChatRoomCreated: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [linkCopied, setLinkCopied] = useState(false);
  
  const chatRoomName = location.state?.chatRoomName || "새 채팅방";

  const onBackClick = useCallback(() => {
    navigate("/chat-list");
  }, [navigate]);

  const onShareClick = useCallback(() => {
    // 링크 복사 로직
    const shareLink = `https://comeet.app/chat/${Date.now()}`;
    navigator.clipboard.writeText(shareLink).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000);
    });
  }, []);

  const onConfirmClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  return (
    <Box className={styles.container}>
      {/* Status Bar */}
      <Box className={styles.statusBar}>
        <div className={styles.time}>9:41</div>
        <Box className={styles.rightSide}>
          <img className={styles.batteryIcon} alt="" src="/Battery.svg" />
          <img className={styles.wifiIcon} alt="" src="/Wifi.svg" />
          <img
            className={styles.mobileSignalIcon}
            alt=""
            src="/Mobile-Signal.svg"
          />
        </Box>
      </Box>

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.backButton} onClick={onBackClick}>
          ←
        </div>
        <div className={styles.headerTitle}>Chat</div>
        <div className={styles.logoContainer}>
          <img className={styles.comeetImage} alt="CoMeet" src="/image-1@2x.png" />
        </div>
      </Box>

      {/* Main Content */}
      <Box className={styles.content}>
        <Box className={styles.messageContainer}>
          <div className={styles.messageText}>채팅방이 생성되었습니다.</div>
        </Box>

        <Box className={styles.buttonContainer}>
          <button className={styles.shareButton} onClick={onShareClick}>
            공유
          </button>
          <button className={styles.confirmButton} onClick={onConfirmClick}>
            확인
          </button>
        </Box>

        {linkCopied && (
          <div className={styles.copyMessage}>링크가 복사되었습니다</div>
        )}
      </Box>
    </Box>
  );
};

export default ChatRoomCreated;
