import { FunctionComponent, useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Component8.module.css";

const Component8: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCellContainerClick = useCallback(() => {
    // Please sync "채팅화면" to the project
  }, []);

  const onTabBarItemClick = useCallback(() => {
    // Please sync "새채팅 생성" to the project
  }, []);

  const onBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Box className={styles.div}>
      <Box className={styles.activities}>
        <Box className={styles.cell} onClick={onCellContainerClick}>
          <Box className={styles.content}>
            <Box className={styles.text}>
              <Box className={styles.nameTimestamp}>
                <div className={styles.div2}>지윤, 민주, 성민</div>
              </Box>
            </Box>
          </Box>
          <Box className={styles.dot} />
          <Box className={styles.avatar} />
        </Box>
        <Box className={styles.divCell}>
          <Box className={styles.divContent}>
            <Box className={styles.divText}>
              <Box className={styles.nameTimestamp}>
                <div className={styles.div2}>소민, 지아, 정민, 윤서 ...</div>
              </Box>
            </Box>
          </Box>
          <Box className={styles.dot} />
          <Box className={styles.divAvatar} />
        </Box>
        <Box className={styles.cell2}>
          <Box className={styles.content2}>
            <Box className={styles.divText}>
              <Box className={styles.nameTimestamp}>
                <div className={styles.div2}>경주 여행 모임</div>
              </Box>
            </Box>
          </Box>
          <Box className={styles.dot} />
          <Box className={styles.avatar2} />
        </Box>
        <Box className={styles.cell3}>
          <Box className={styles.divContent}>
            <Box className={styles.divText}>
              <Box className={styles.nameTimestamp}>
                <div className={styles.div2}>재민, 진서</div>
              </Box>
            </Box>
          </Box>
          <Box className={styles.dot} />
          <Box className={styles.avatar3} />
        </Box>
        <Box className={styles.cell4}>
          <Box className={styles.divContent}>
            <Box className={styles.divText}>
              <Box className={styles.nameTimestamp}>
                <div className={styles.div2}>서울</div>
              </Box>
            </Box>
          </Box>
          <Box className={styles.dot} />
          <Box className={styles.avatar4} />
        </Box>
        <Box className={styles.cell5}>
          <Box className={styles.divContent}>
            <Box className={styles.divText}>
              <Box className={styles.nameTimestamp}>
                <div
                  className={styles.div2}
                >{`선하, 용운, 주빈, 지예 ... `}</div>
              </Box>
            </Box>
          </Box>
          <Box className={styles.avatar5} />
        </Box>
        <Box className={styles.cell4}>
          <Box className={styles.content2}>
            <Box className={styles.divText}>
              <Box className={styles.nameTimestamp}>
                <div className={styles.div2}>0626</div>
              </Box>
            </Box>
          </Box>
          <Box className={styles.avatar6} />
        </Box>
      </Box>
      <Box className={styles.header}>
        <div 
          className={styles.backButton}
          onClick={onBackClick}
          style={{ 
            position: 'absolute', 
            left: '16px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            cursor: 'pointer',
            fontSize: 'var(--fs-16)',
            fontWeight: '500',
            color: 'var(--color-darkslateblue-400)'
          }}
        >
          ←
        </div>
        <div className={styles.chat}>출발지점 검색</div>
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
      <div
        className={styles.tabBarItem}
        style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#666' }}
        onClick={onTabBarItemClick}
      >
        +
      </div>
      <div
        className={styles.image7Icon}
        style={{ backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#666' }}
      >
        📱
      </div>
      <Box className={styles.pills}>
        <Box className={styles.pill}>
          <div className={styles.div9}>전체</div>
        </Box>
        <Box className={styles.divPill}>
          <div className={styles.div9}>친구</div>
        </Box>
      </Box>
      <div
        className={styles.tabBarIcon}
        style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#666' }}
      >
        Tab Bar
      </div>
    </Box>
  );
};

export default Component8;
