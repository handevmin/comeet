import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./ChatList.module.css";

const ChatList: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState<string>("전체");
  const [chatRooms, setChatRooms] = useState([
    { id: 1, name: "지윤, 민주, 성민", category: "일반", hasUnread: true },
    { id: 2, name: "재민, 진서", category: "일반", hasUnread: true },
    { id: 3, name: "서울", category: "일반", hasUnread: true },
  ]);

  // 새로 생성된 채팅방 추가
  useEffect(() => {
    if (location.state?.newChatRoom) {
      const newRoom = {
        id: Date.now(),
        name: location.state.newChatRoom.name,
        category: location.state.newChatRoom.category,
        hasUnread: true
      };
      setChatRooms(prev => [newRoom, ...prev]);
      // 새 채팅방 추가 시에는 필터를 변경하지 않음 (전체 유지)
    }
  }, [location.state]);

  const onChatClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const onNewChatClick = useCallback(() => {
    navigate("/create-chat-room");
  }, [navigate]);

  const onFilterClick = useCallback((filter: string) => {
    setSelectedFilter(filter);
  }, []);

  // 필터링된 채팅방 목록
  const filteredChatRooms = selectedFilter === "전체" 
    ? chatRooms 
    : chatRooms.filter(room => (room.category || "일반") === selectedFilter);

  return (
    <Box className={styles.container}>
      <StatusBar />

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
        <Box 
          className={selectedFilter === "전체" ? styles.pillActive : styles.pillInactive}
          onClick={() => onFilterClick("전체")}
        >
          <div className={styles.pillText}>전체</div>
        </Box>
        {/* 동적으로 생성된 유형들만 표시 (새로 생성된 채팅방이 있을 때만) */}
        {Array.from(new Set(chatRooms.map(room => room.category || "일반")))
          .filter(category => category !== "일반") // 기본 유형 제외
          .map(category => (
            <Box 
              key={category}
              className={selectedFilter === category ? styles.pillActive : styles.pillInactive}
              onClick={() => onFilterClick(category)}
            >
              <div className={styles.pillText}>{category}</div>
            </Box>
          ))
        }
      </Box>

      {/* Chat List */}
      <Box className={styles.chatList}>
        {filteredChatRooms.map((room, index) => (
          <Box key={room.id} className={styles.chatItem} onClick={onChatClick}>
            {room.hasUnread && <Box className={styles.unreadDot} />}
            <Box className={styles[`avatar${(index % 7) + 1}`]} />
            <Box className={styles.chatContent}>
              <div className={styles.chatName}>{room.name}</div>
              <div className={styles.chatCategory}>{room.category || "일반"}</div>
            </Box>
          </Box>
        ))}
      </Box>
      
      <BottomNavigation />
    </Box>
  );
};

export default ChatList;