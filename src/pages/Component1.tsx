import { FunctionComponent, useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Component1.module.css";

const Component1: FunctionComponent = () => {
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

  return (
    <Box className={styles.div}>
      <Box className={styles.list}>
        <Box className={styles.lists}>
          <Box className={styles.cell} onClick={onChatClick} style={{ cursor: 'pointer' }}>
            <Box className={styles.avatar}>
              <Box className={styles.avatarChild} />
              <Box className={styles.avatarChild} />
            </Box>
            <Box className={styles.text}>
              <div className={styles.div2}>지윤, 민주, 성민</div>
              <div
                className={styles.emailfakedomainnet}
              >{`25.06.23 | 19:00 `}</div>
            </Box>
          </Box>
          <Box className={styles.cell}>
            <Box className={styles.avatar}>
              <Box className={styles.avatarInner} />
            </Box>
            <Box className={styles.text}>
              <div className={styles.div2}>소민, 지아, 정민, 윤서 ...</div>
              <div
                className={styles.emailfakedomainnet}
              >{`25.06.28 | 13:00 `}</div>
            </Box>
          </Box>
          <Box className={styles.cell}>
            <Box className={styles.avatar}>
              <Box className={styles.avatarChild} />
            </Box>
            <Box className={styles.text}>
              <div className={styles.carloEmilion}>Carlo Emilion</div>
              <div className={styles.emailfakedomainnet}>
                email@fakedomain.net
              </div>
            </Box>
          </Box>
          <Box className={styles.cell}>
            <Box className={styles.avatar}>
              <Box className={styles.avatarInner} />
            </Box>
            <Box className={styles.text}>
              <div className={styles.carloEmilion}>Daniel Jay Park</div>
              <div className={styles.emailfakedomainnet}>djpark@gmail.com</div>
            </Box>
          </Box>
          <Box className={styles.cell}>
            <Box className={styles.avatar}>
              <Box className={styles.avatarChild} />
            </Box>
            <Box className={styles.text}>
              <div className={styles.carloEmilion}>Mark Rojas</div>
              <div className={styles.emailfakedomainnet}>
                rojasmar@skiff.com
              </div>
            </Box>
          </Box>
        </Box>
        <div className={styles.div6}>일정</div>
      </Box>
      <Box className={styles.header}>
        <div className={styles.comeet}>CoMeet</div>
        <div 
          className={styles.chatButton} 
          onClick={onChatListClick}
          style={{ 
            position: 'absolute', 
            right: '80px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            padding: '8px 16px', 
            backgroundColor: 'var(--color-darkslateblue-400)', 
            color: 'white', 
            borderRadius: 'var(--br-8)', 
            cursor: 'pointer',
            fontSize: 'var(--fs-14)',
            fontWeight: '500'
          }}
        >
          채팅
        </div>
        <div 
          className={styles.logoutButton} 
          onClick={onLogoutClick}
          style={{ 
            position: 'absolute', 
            right: '16px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            padding: '8px 16px', 
            backgroundColor: 'var(--color-gray-200)', 
            color: 'white', 
            borderRadius: 'var(--br-8)', 
            cursor: 'pointer',
            fontSize: 'var(--fs-14)',
            fontWeight: '500'
          }}
        >
          로그아웃
        </div>
      </Box>
      <Box className={styles.pills}>
        <Box className={styles.pill}>
          <div className={styles.div7}>약속</div>
        </Box>
        <Box className={styles.divPill}>
          <div className={styles.div7}>학교 시간표</div>
        </Box>
      </Box>
      <Box className={styles.statusBar}>
        <img className={styles.notchIcon} alt="" src="/Notch@2x.png" />
        <Box className={styles.rightSide}>
          <img className={styles.batteryIcon} alt="" src="/Battery.svg" />
          <img className={styles.wifiIcon} alt="" src="/Wifi.svg" />
          <img
            className={styles.mobileSignalIcon}
            alt=""
            src="/Mobile-Signal.svg"
          />
          <img
            className={styles.recordingIndicatorIcon}
            alt=""
            src="/Recording-Indicator.svg"
          />
        </Box>
        <img className={styles.leftSideIcon} alt="" src="/Left-Side.svg" />
      </Box>
      <img
        className={styles.image7Icon}
        alt=""
        src="/image-1@2x.png"
        onClick={onImageClick}
      />
      <Box className={styles.avatar2} />
      <div className={styles.div9}>19:00</div>
      <Box className={styles.avatar3} />
      <div className={styles.div10}>{`13:00 `}</div>
      <div className={styles.iconcreate}>+</div>
      <div className={styles.tabBarIcon}>Tab Bar</div>
    </Box>
  );
};

export default Component1;
