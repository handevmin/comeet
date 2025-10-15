import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./FriendsList.module.css";

const FriendsList: FunctionComponent = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("friends");

  const onProfileClick = useCallback(() => {
    // 프로필 기능 구현
    console.log("Profile clicked");
  }, []);

  const onFriendClick = useCallback((friendName: string) => {
    console.log("Friend clicked:", friendName);
  }, []);

  const friends = [
    { id: 1, name: "지윤", avatarClass: styles.avatar1 },
    { id: 2, name: "성민", avatarClass: styles.avatar2 },
    { id: 3, name: "소민", avatarClass: styles.avatar3 },
    { id: 4, name: "진서", avatarClass: styles.avatar4 },
    { id: 5, name: "용운", avatarClass: styles.avatar5 },
    { id: 6, name: "태윤", avatarClass: styles.avatar6 },
  ];

  return (
    <Box className={styles.container}>
      <StatusBar />

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.friendsTitle}>친구 목록</div>
        <div className={styles.logoContainer}>
          <img className={styles.comeetImage} alt="CoMeet" src="/image-1@2x.png" />
        </div>
      </Box>

      {/* Profile Section */}
      <Box className={styles.profileSection}>
        <div className={styles.profileAvatar}></div>
        <div className={styles.profileName}>민주</div>
      </Box>

      {/* Filter Pills */}
      <Box className={styles.filterContainer}>
        <Box
          className={activeFilter === "friends" ? styles.pillActive : styles.pillInactive}
          onClick={() => setActiveFilter("friends")}
        >
          <div className={styles.pillText}>친구</div>
        </Box>
        <Box className={styles.friendCount}>
          <div className={styles.countText}>26</div>
        </Box>
      </Box>

      {/* Friends List */}
      <Box className={styles.friendsList}>
        {friends.map((friend) => (
          <Box
            key={friend.id}
            className={styles.friendItem}
            onClick={() => onFriendClick(friend.name)}
          >
            <div className={friend.avatarClass}></div>
            <div className={styles.friendName}>{friend.name}</div>
          </Box>
        ))}
      </Box>
      
      <BottomNavigation />
    </Box>
  );
};

export default FriendsList;
