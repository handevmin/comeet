import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./Chat.module.css";

const Chat: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBottomIcons, setShowBottomIcons] = useState(false);
  const [sharedMessage, setSharedMessage] = useState<string | null>(null);
  const [showSystemMessage, setShowSystemMessage] = useState(false);
  const [showLocationSystemMessage, setShowLocationSystemMessage] = useState(false);
  const [sharedLocationText, setSharedLocationText] = useState<string>("");
  const [aggregatedResults, setAggregatedResults] = useState<string[] | null>(null);
  const [aggregatedMessage, setAggregatedMessage] = useState<string | null>(null);
  const [showRegistrationMessage, setShowRegistrationMessage] = useState(false);
  const [selectedDates, setSelectedDates] = useState<boolean[]>([]);
  const [showMidpointFound, setShowMidpointFound] = useState(false);

  useEffect(() => {
    // PeriodSelection 또는 DateTimeSelection에서 전달받은 메시지 처리
    if (location.state?.dateMessage) {
      setShowSystemMessage(true); // 날짜 공유 후 시스템 메시지 표시
    } else if (location.state?.timeMessage) {
      setSharedMessage(location.state.timeMessage);
      setShowSystemMessage(true); // 시간 공유 후 시스템 메시지 표시
    } else if (location.state?.aggregatedMessage) {
      setAggregatedMessage(location.state.aggregatedMessage);
      setAggregatedResults(location.state.aggregatedResults);
      setShowSystemMessage(true); // 집계 결과 표시
      // 선택 상태 초기화 (모든 날짜는 선택되지 않은 상태로)
      if (location.state.aggregatedResults) {
        const initialSelection = new Array(location.state.aggregatedResults.length).fill(false);
        setSelectedDates(initialSelection);
      }
    } else if (location.state?.locationMessage) {
      // 위치 메시지는 표시하지 않고 시스템 메시지만 표시
      setShowLocationSystemMessage(true); // 위치 공유 후 시스템 메시지 표시
      // 2초 후에 중간지점을 찾았다는 메시지 표시
      setTimeout(() => {
        setShowMidpointFound(true);
      }, 2000);
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
    navigate("/map");
  }, [navigate]);

  const onViewMidpointClick = useCallback(() => {
    navigate("/midpoint-result");
  }, [navigate]);

  const onRegisterClick = useCallback(() => {
    setShowRegistrationMessage(true);
    // 3초 후에 메시지 자동 제거
    setTimeout(() => {
      setShowRegistrationMessage(false);
    }, 3000);
  }, []);

  const onDateToggle = useCallback((index: number) => {
    setSelectedDates(prev => {
      const newSelected = [...prev];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  }, []);

  // 선택된 날짜들을 가져오는 함수
  const getSelectedDates = useCallback(() => {
    if (!aggregatedResults) return [];
    return aggregatedResults.filter((_, index) => selectedDates[index]);
  }, [aggregatedResults, selectedDates]);

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
        <div className={styles.menuButton} onClick={onMenuClick}>
          ≡
        </div>
      </Box>

      {/* Main Content Area */}
      <Box className={styles.content}>
        <div className={styles.dateMarker}>2025년 10월 29일, 오후 6시</div>
        
        {/* System Message with Input Button (My message - right side) */}
        {showSystemMessage && (
          <Box className={styles.myMessage}>
            <div className={styles.myBubble}>
              <div className={styles.myText}>
                <div>만날 수 있는 날짜를 찾는 중 입니다.</div>
                <div>가능한 시간과 날짜를 입력해주세요.</div>
              </div>
              <div className={styles.inputButton} onClick={() => navigate("/datetime-selection")}>
                입력하기
              </div>
            </div>
          </Box>
        )}

        {/* Location System Message (My message - right side) */}
        {showLocationSystemMessage && (
          <Box className={styles.myMessage}>
            <div className={styles.myBubble}>
              <div className={styles.myText}>
                <div>중간지점을 찾는 중 입니다.</div>
                <div>출발지를 입력해주세요.</div>
              </div>
              <div className={styles.inputButton} onClick={() => navigate("/map")}>
                입력하기
              </div>
            </div>
          </Box>
        )}

        {/* Midpoint Found Message (My message - right side) */}
        {showMidpointFound && (
          <Box className={styles.myMessage}>
            <div className={styles.myBubble}>
              <div className={styles.myText}>
                <div>중간 지점을 찾았습니다.</div>
              </div>
              <div className={styles.inputButton} onClick={onViewMidpointClick}>
                보러가기
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

        {/* Aggregated Dates Message (Right side - My message) */}
        {aggregatedResults && (
          <Box className={styles.myMessage}>
            <div className={styles.myBubble}>
              <div className={styles.myText}>
                <div>가능한 날짜가 집계되었습니다</div>
                {aggregatedResults.map((result, index) => (
                  <div key={index} className={styles.dateItem}>
                    <span 
                      className={`${styles.checkButton} ${selectedDates[index] ? styles.checked : ''}`}
                      onClick={() => onDateToggle(index)}
                    >
                      {selectedDates[index] ? '✓' : ''}
                    </span>
                    <span>{index + 1}. {result}</span>
                  </div>
                ))}
                <div className={styles.registerButton} onClick={onRegisterClick}>
                  일정 등록
                </div>
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
        <div className={styles.inputField} onClick={onPlusClick}>
          <div className={styles.plusButton}>
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
      
      <BottomNavigation />
    </Box>
  );
};

export default Chat;