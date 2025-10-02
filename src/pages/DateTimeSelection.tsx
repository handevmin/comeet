import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./DateTimeSelection.module.css";

const DateTimeSelection: FunctionComponent = () => {
  const navigate = useNavigate();
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const [isAM, setIsAM] = useState(true);

  const onBackClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const onConfirmClick = useCallback(() => {
    if (selectedSlots.length === 0) {
      alert("선택된 시간이 없습니다.");
      return;
    }
    
    // 집계된 결과 생성 (예시 데이터)
    const aggregatedResults = [
      "16일 16:00~18:00",
      "17일 19:00~23:00"
    ];
    
    // 채팅창으로 돌아가면서 집계된 결과 전달
    navigate("/chat", { 
      state: { 
        aggregatedResults: aggregatedResults,
        aggregatedMessage: "가능한 날짜가 집계되었습니다"
      }
    });
  }, [selectedSlots, navigate]);

  const onSlotClick = useCallback((date: number, time: number) => {
    const slot = `${date}-${time}`;
    setSelectedSlots(prev => {
      if (prev.includes(slot)) {
        return prev.filter(s => s !== slot);
      } else {
        return [...prev, slot].sort();
      }
    });
  }, []);

  const isSlotSelected = useCallback((date: number, time: number) => {
    return selectedSlots.includes(`${date}-${time}`);
  }, [selectedSlots]);

  const dates = [16, 17, 18, 19, 20, 21];
  const times = isAM 
    ? Array.from({ length: 12 }, (_, i) => i) // 오전: 0시부터 11시까지
    : Array.from({ length: 12 }, (_, i) => i + 12); // 오후: 12시부터 23시까지

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
      </Box>

      {/* Month/Year */}
      <div className={styles.monthYear}>6월 2025</div>

      {/* AM/PM Toggle */}
      <Box className={styles.amPmToggle}>
        <div 
          className={`${styles.amPmButton} ${isAM ? styles.active : ''}`}
          onClick={() => setIsAM(true)}
        >
          오전
        </div>
        <div 
          className={`${styles.amPmButton} ${!isAM ? styles.active : ''}`}
          onClick={() => setIsAM(false)}
        >
          오후
        </div>
      </Box>

      {/* Time/Date Grid */}
      <Box className={styles.gridContainer}>
        {/* Header Row */}
        <Box className={styles.headerRow}>
          <div className={styles.timeLabel}>시\일</div>
          {dates.map((date) => (
            <div key={date} className={styles.dateHeader}>
              {date}
            </div>
          ))}
        </Box>

        {/* Time Slots */}
        {times.map((time) => (
          <Box key={time} className={styles.timeRow}>
            <div className={styles.timeLabel}>
              {isAM ? time : time - 12}
            </div>
            {dates.map((date) => (
              <div
                key={`${date}-${time}`}
                className={`${styles.timeSlot} ${
                  isSlotSelected(date, time) ? styles.selected : ''
                }`}
                onClick={() => onSlotClick(date, time)}
              />
            ))}
          </Box>
        ))}
      </Box>

      {/* Confirm Button */}
      <Box className={styles.confirmButton} onClick={onConfirmClick}>
        <div className={styles.confirmText}>확인</div>
      </Box>
    </Box>
  );
};

export default DateTimeSelection;
