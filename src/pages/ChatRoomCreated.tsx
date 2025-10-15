import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./ChatRoomCreated.module.css";

const ChatRoomCreated: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [linkCopied, setLinkCopied] = useState(false);
  
  const chatRoomName = location.state?.chatRoomName || "새 채팅방";
  const chatType = location.state?.chatType || "";

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
    // 채팅방 생성 완료 후 ChatList로 이동하면서 카테고리 정보 전달
    navigate("/chat-list", { state: { newChatRoom: { name: chatRoomName, category: chatType } } });
  }, [navigate, chatRoomName, chatType]);

  return (
    <Box className={styles.container}>
      <StatusBar />

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.backButton} onClick={onBackClick}>
          ←
        </div>
        <div className={styles.headerTitle}>채팅방 생성 완료</div>
        <div className={styles.placeholder}></div>
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
      
      <BottomNavigation />
    </Box>
  );
};

export default ChatRoomCreated;
