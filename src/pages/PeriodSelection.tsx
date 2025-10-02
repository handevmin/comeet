import { FunctionComponent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./PeriodSelection.module.css";

const PeriodSelection: FunctionComponent = () => {
  const navigate = useNavigate();
  const [selectedDates, setSelectedDates] = useState<number[]>([]);

  const onBackClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const onDateClick = useCallback((date: number) => {
    setSelectedDates(prev => {
      if (prev.includes(date)) {
        return prev.filter(d => d !== date);
      } else {
        return [...prev, date].sort();
      }
    });
  }, []);

  const onShareClick = useCallback(() => {
    if (selectedDates.length === 0) {
      alert("선택된 날짜가 없습니다.");
      return;
    }
    
    // 선택된 날짜들을 문자열로 변환
    const dateString = selectedDates
      .sort((a, b) => a - b)
      .map(date => `${date}일`)
      .join(', ');
    
    // 채팅창으로 돌아가면서 선택된 날짜 정보 전달
    navigate("/chat", { 
      state: { 
        sharedDates: selectedDates,
        dateMessage: `가능한 날짜: ${dateString}`
      }
    });
  }, [selectedDates, navigate]);

  const isDateSelected = useCallback((date: number) => {
    return selectedDates.includes(date);
  }, [selectedDates]);

  const isDateSelectable = useCallback((date: number) => {
    const today = new Date();
    const currentDate = new Date(today.getFullYear(), today.getMonth(), date);
    return currentDate >= today; // 오늘 이후 날짜만 선택 가능
  }, []);

  const getCalendarDays = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay(); // 0 = 일요일
    
    const days = [];
    
    // 이전 달의 빈 날짜들 (시작 요일까지)
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({ date: null, isCurrentMonth: false });
    }
    
    // 현재 달의 날짜들
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: i, isCurrentMonth: true });
    }
    
    return { days, year, month };
  };

  const { days: calendarDays, year, month } = getCalendarDays();
  const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

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

      {/* Period Selection */}
      <div className={styles.periodTitle}>기간 선택</div>
      <div className={styles.monthYear}>{monthNames[month]} {year}</div>

      {/* Days of Week */}
      <Box className={styles.daysOfWeek}>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day} className={styles.dayOfWeek}>
            {day}
          </div>
        ))}
      </Box>

      {/* Calendar Grid */}
      <Box className={styles.calendarGrid}>
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`${styles.dateCell} ${
              day.date && isDateSelected(day.date) ? styles.selected : ''
            } ${
              !day.isCurrentMonth ? styles.otherMonth : ''
            } ${
              day.date && !isDateSelectable(day.date) ? styles.disabled : ''
            }`}
            onClick={() => day.date && isDateSelectable(day.date) && onDateClick(day.date)}
          >
            {day.date}
          </div>
        ))}
      </Box>

      {/* Share Button */}
      <Box className={styles.shareButton} onClick={onShareClick}>
        <div className={styles.shareText}>공유</div>
      </Box>
    </Box>
  );
};

export default PeriodSelection;
