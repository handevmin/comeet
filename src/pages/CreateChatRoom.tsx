import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./CreateChatRoom.module.css";

const CreateChatRoom: FunctionComponent = () => {
  const navigate = useNavigate();
  const [chatRoomName, setChatRoomName] = useState("");

  const onBackClick = useCallback(() => {
    navigate("/chat-list");
  }, [navigate]);

  const onCancelClick = useCallback(() => {
    navigate("/chat-list");
  }, [navigate]);

  const onCreateClick = useCallback(() => {
    if (chatRoomName.trim()) {
      // 채팅방 생성 로직
      console.log("Creating chat room:", chatRoomName);
      navigate("/chat-room-created", { state: { chatRoomName } });
    }
  }, [navigate, chatRoomName]);

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
        <Box className={styles.filterPill}>
          <div className={styles.filterText}>친구</div>
        </Box>
        
        <Box className={styles.inputContainer}>
          <input
            className={styles.chatRoomNameInput}
            type="text"
            placeholder="채팅방 이름"
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
    </Box>
  );
};

export default CreateChatRoom;
