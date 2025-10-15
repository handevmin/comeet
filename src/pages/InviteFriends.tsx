import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./InviteFriends.module.css";

const InviteFriends: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
  const chatType = location.state?.chatType || ""; // CreateChatRoom에서 전달받은 유형

  const friends = [
    { name: '지윤', color: 'var(--color-darkslateblue-300)' },
    { name: '성민', color: 'var(--color-lightsteelblue)' },
    { name: '소민', color: 'var(--color-thistle)' },
    { name: '진서', color: 'var(--color-mistyrose)' },
    { name: '용운', color: 'var(--color-beige)' },
    { name: '태윤', color: 'var(--color-lightsteelblue-300)' },
  ];

  const onBackClick = useCallback(() => {
    navigate("/chat-list");
  }, [navigate]);

  const onConfirmClick = useCallback(() => {
    // 채팅방 이름 설정 페이지로 이동
    console.log("선택된 친구들:", selectedFriends);
    console.log("채팅방 카테고리:", chatType);
    navigate("/chat-room-name", { state: { selectedFriends, chatType } });
  }, [navigate, selectedFriends, chatType]);

  const onFriendToggle = useCallback((friendName: string) => {
    setSelectedFriends(prev => {
      if (prev.includes(friendName)) {
        return prev.filter(name => name !== friendName);
      } else {
        return [...prev, friendName];
      }
    });
  }, []);

  const onRemoveSelected = useCallback((friendName: string) => {
    setSelectedFriends(prev => prev.filter(name => name !== friendName));
  }, []);

  return (
    <Box className={styles.container}>
      <StatusBar />

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.backButton} onClick={onBackClick}>←</div>
        <div className={styles.title}>친구 초대</div>
        <div className={styles.confirmButton} onClick={onConfirmClick}>
          {selectedFriends.length} 확인
        </div>
      </Box>

      {/* Selected Contacts */}
      <Box className={styles.selectedSection}>
        {selectedFriends.map((friendName, index) => {
          const friend = friends.find(f => f.name === friendName);
          return (
            <Box key={friendName} className={styles.selectedContact}>
              <Box 
                className={styles.selectedAvatar}
                style={{ backgroundColor: friend?.color || 'var(--color-gray)' }}
              >
                <div className={styles.removeButton} onClick={() => onRemoveSelected(friendName)}>×</div>
              </Box>
              <div className={styles.selectedName}>{friendName}</div>
            </Box>
          );
        })}
      </Box>

      {/* Filter */}
      <Box className={styles.filterSection}>
        <div className={styles.separator} />
        <Box className={styles.filterPills}>
          <Box className={styles.pillActive}>
            <div className={styles.pillText}>친구</div>
          </Box>
          <Box className={styles.pillInactive}>
            <div className={styles.pillText}>{friends.length}</div>
          </Box>
        </Box>
      </Box>

      {/* Friends List */}
      <Box className={styles.friendsList}>
        {friends.map((friend) => {
          const isSelected = selectedFriends.includes(friend.name);
          return (
            <Box 
              key={friend.name} 
              className={styles.friendItem}
              onClick={() => onFriendToggle(friend.name)}
            >
              <Box 
                className={styles.friendAvatar}
                style={{ backgroundColor: friend.color }}
              />
              <div className={styles.friendName}>{friend.name}</div>
              {isSelected && <div className={styles.checkmark}>✓</div>}
            </Box>
          );
        })}
      </Box>
      
      <BottomNavigation />
    </Box>
  );
};

export default InviteFriends;
