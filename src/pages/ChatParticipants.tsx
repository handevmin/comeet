import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import styles from "./ChatParticipants.module.css";

const ChatParticipants: FunctionComponent = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const onBackClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const onInviteClick = useCallback(() => {
    navigate("/invite-friends");
  }, [navigate]);

  const onShareClick = useCallback(() => {
    console.log("Share chat room");
  }, []);

  const participants = [
    { id: 1, name: "(나) 민주", avatarClass: styles.avatar1, isMe: true },
    { id: 2, name: "지윤", avatarClass: styles.avatar2, isMe: false },
    { id: 3, name: "성민", avatarClass: styles.avatar3, isMe: false },
  ];

  return (
    <Box className={styles.container}>
      <StatusBar />

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.backButton} onClick={onBackClick}>
          ←
        </div>
        <div className={styles.chatAvatar}></div>
        <div className={styles.chatName}>지윤, 민주, 성민</div>
      </Box>

      {/* Search Input */}
      <Box className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="참여자..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Box>

      {/* Participants List */}
      <Box className={styles.participantsList}>
        {/* Invite Button */}
        <Box className={styles.participantItem} onClick={onInviteClick}>
          <div className={styles.inviteIcon}>+</div>
          <div className={styles.participantName}>초대하기</div>
        </Box>

        {/* Participants */}
        {participants.map((participant) => (
          <Box key={participant.id} className={styles.participantItem}>
            <div className={participant.avatarClass}></div>
            <div className={styles.participantName}>{participant.name}</div>
          </Box>
        ))}
      </Box>

      {/* Bottom Share Button */}
      <Box className={styles.shareContainer}>
        <div className={styles.shareButton} onClick={onShareClick}>
          <span>채팅방 공유하기</span>
          <div className={styles.shareIcon}>↗</div>
        </div>
      </Box>
      
      <BottomNavigation />
    </Box>
  );
};

export default ChatParticipants;
