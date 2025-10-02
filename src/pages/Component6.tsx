import { FunctionComponent, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Component6.module.css";

const Component6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/midpoint");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Box className={styles.div}>
      <div className={styles.timestamp}>{`2025년 6월 13일, 오전 9:30 `}</div>
      <Box className={styles.header}>
        <img
          className={styles.iconchevronLeft}
          alt=""
          src="/Chevron.svg"
          onClick={onBackClick}
          style={{ cursor: 'pointer' }}
        />
        <div className={styles.profileImageIcon} style={{ backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>👤</div>
        <Box className={styles.text}>
          <div className={styles.div2}>지윤, 민주, 성민</div>
          <div className={styles.div3}>11분 전 활동</div>
        </Box>
        <Box className={styles.iconvideo}>📹</Box>
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
      <Box className={styles.child} />
      <div className={styles.timestamp}>{`2025년 6월 13일, 오전 9:30 `}</div>
      <Box className={styles.header}>
        <img
          className={styles.iconchevronLeft}
          alt=""
          src="/Chevron.svg"
          onClick={onBackClick}
          style={{ cursor: 'pointer' }}
        />
        <div className={styles.profileImageIcon} style={{ backgroundColor: '#e0e0e0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>👤</div>
        <Box className={styles.divText}>
          <div className={styles.div2}>지윤, 민주, 성민</div>
        </Box>
        <div className={styles.divIconvideo} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>📹</div>
      </Box>
      <Box className={styles.divStatusBar}>
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
      <Box className={styles.item} />
      <div className={styles.div5} onClick={onTextClick}>
        입력하기
      </div>
      <div className={styles.div6}>지윤</div>
      <Box className={styles.footerInput}>
        <Box className={styles.homeIndicator} />
        <Box className={styles.reply} />
        <Box className={styles.tabBarItem} />
      </Box>
      <div className={styles.iconcreate} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✏️</div>
      <div
        className={styles.recipientChatIcon}
        style={{ backgroundColor: '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#666' }}
      >
        💬
      </div>
      <div className={styles.div7}>
        <Typography className={styles.p} variant="inherit">
          중간지점을 찾는 중 입니다.
        </Typography>
        <Typography className={styles.p} variant="inherit">
          출발지를 입력해주세요.
        </Typography>
      </div>
    </Box>
  );
};

export default Component6;
