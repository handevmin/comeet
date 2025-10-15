import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./ChatRoomName.module.css";

const ChatRoomName: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [chatRoomName, setChatRoomName] = useState("");
  const chatType = location.state?.chatType || "";
  const selectedFriends = location.state?.selectedFriends || [];

  const onBackClick = useCallback(() => {
    navigate("/invite-friends", { state: { chatType } });
  }, [navigate, chatType]);

  const onCancelClick = useCallback(() => {
    navigate("/chat-list");
  }, [navigate]);

  const onCreateClick = useCallback(() => {
    if (chatRoomName.trim()) {
      // 채팅방 생성 완료 페이지로 이동
      console.log("Creating chat room:", chatRoomName);
      console.log("Chat room category:", chatType);
      console.log("Selected friends:", selectedFriends);
      navigate("/chat-room-created", { state: { chatRoomName, chatType, selectedFriends } });
    }
  }, [navigate, chatRoomName, chatType, selectedFriends]);

  return (
    <Box className={styles.container}>
      <StatusBar />

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.backButton} onClick={onBackClick}>
          ←
        </div>
        <div className={styles.headerTitle}>채팅방 이름</div>
        <div className={styles.placeholder}></div>
      </Box>

      {/* Main Content */}
      <Box className={styles.content}>
        <Box className={styles.inputContainer}>
          <input
            className={styles.chatRoomNameInput}
            type="text"
            placeholder="채팅방 이름을 입력하세요"
            value={chatRoomName}
            onChange={(e) => setChatRoomName(e.target.value)}
          />
        </Box>

        <Box className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onCancelClick}>
            취소
          </button>
          <button 
            className={styles.createButton} 
            onClick={onCreateClick}
            disabled={!chatRoomName.trim()}
          >
            생성
          </button>
        </Box>
      </Box>
      
      <BottomNavigation />
    </Box>
  );
};

export default ChatRoomName;
