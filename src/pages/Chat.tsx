import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Chat.module.css";

const Chat: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBottomIcons, setShowBottomIcons] = useState(false);
  const [sharedMessage, setSharedMessage] = useState<string | null>(null);
  const [showSystemMessage, setShowSystemMessage] = useState(false);
  const [aggregatedResults, setAggregatedResults] = useState<string[] | null>(null);
  const [aggregatedMessage, setAggregatedMessage] = useState<string | null>(null);
  const [showRegistrationMessage, setShowRegistrationMessage] = useState(false);

  useEffect(() => {
    // PeriodSelection 또는 DateTimeSelection에서 전달받은 메시지 처리
    if (location.state?.dateMessage) {
      setSharedMessage(location.state.dateMessage);
      setShowSystemMessage(true); // 날짜 공유 후 시스템 메시지 표시
      // 메시지는 계속 유지 (자동 제거하지 않음)
    } else if (location.state?.timeMessage) {
      setSharedMessage(location.state.timeMessage);
      setShowSystemMessage(true); // 시간 공유 후 시스템 메시지 표시
    } else if (location.state?.aggregatedMessage) {
      setAggregatedMessage(location.state.aggregatedMessage);
      setAggregatedResults(location.state.aggregatedResults);
      setShowSystemMessage(true); // 집계 결과 표시
    }
  }, [location.state]);

  const onBackClick = useCallback(() => {
    navigate("/chat-list");
  }, [navigate]);

  const onMenuClick = useCallback(() => {
    navigate("/chat-participants");
  }, [navigate]);

  const onPlusClick = useCallback(() => {
    setShowBottomIcons(!showBottomIcons);
  }, [showBottomIcons]);

  const onCalendarClick = useCallback(() => {
    navigate("/period-selection");
    setShowBottomIcons(false);
  }, [navigate]);

  const onLocationClick = useCallback(() => {
    console.log("Location clicked");
    setShowBottomIcons(false);
  }, []);

  const onRegisterClick = useCallback(() => {
    setShowRegistrationMessage(true);
    // 3초 후에 메시지 자동 제거
    setTimeout(() => {
      setShowRegistrationMessage(false);
    }, 3000);
  }, []);

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
        <div className={styles.chatAvatar}></div>
        <div className={styles.chatName}>지윤, 민주, 성민</div>
        <div className={styles.menuButton} onClick={onMenuClick}>
          ≡
        </div>
      </Box>

      {/* Main Content Area */}
      <Box className={styles.content}>
        <div className={styles.dateMarker}>2025년 6월 13일, 오전 9:30</div>
        
        {/* System Message with Input Button (Other person's message - left side) */}
        {showSystemMessage && (
          <Box className={styles.otherMessage}>
            <div className={styles.otherBubble}>
              <div className={styles.otherText}>
                <div>만날 수 있는 날짜를 찾는 중 입니다.</div>
                <div>가능한 시간과 날짜를 입력해주세요.</div>
              </div>
              <div className={styles.inputButton} onClick={() => navigate("/datetime-selection")}>
                입력하기
              </div>
            </div>
          </Box>
        )}
        
        {/* Shared Message (My message - right side) */}
        {sharedMessage && (
          <Box className={styles.myMessage}>
            <div className={styles.myBubble}>
              <div className={styles.myText}>{sharedMessage}</div>
            </div>
          </Box>
        )}

        {/* Aggregated Results (Other person's message - left side) */}
        {aggregatedMessage && aggregatedResults && (
          <Box className={styles.otherMessage}>
            <div className={styles.otherBubble}>
              <div className={styles.otherText}>{aggregatedMessage}</div>
              <Box className={styles.resultsList}>
                {aggregatedResults.map((result, index) => (
                  <div key={index} className={styles.resultItem}>
                    {index + 1}. {result}
                  </div>
                ))}
              </Box>
              <div className={styles.registerButton} onClick={onRegisterClick}>
                일정 등록
              </div>
            </div>
          </Box>
        )}

        {/* Registration Success Message */}
        {showRegistrationMessage && (
          <Box className={styles.registrationMessage}>
            <div className={styles.registrationBubble}>
              <div className={styles.registrationText}>
                일정이 캘린더에 등록되었습니다.
              </div>
            </div>
          </Box>
        )}
      </Box>

      {/* Message Input Bar */}
      <Box className={styles.inputBar}>
        <div className={styles.inputField}>
          <div className={styles.plusButton} onClick={onPlusClick}>
            +
          </div>
        </div>
      </Box>

      {/* Bottom Icons */}
      {showBottomIcons && (
        <Box className={styles.bottomIcons}>
          <div className={styles.iconButton} onClick={onCalendarClick}>
            <div className={styles.calendarIcon}></div>
          </div>
          <div className={styles.iconButton} onClick={onLocationClick}>
            <div className={styles.locationIcon}></div>
          </div>
        </Box>
      )}
    </Box>
  );
};

export default Chat;