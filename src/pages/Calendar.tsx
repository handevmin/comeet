import { FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import styles from "./Calendar.module.css";

interface CalendarProps {
  onDateClick?: (date: Date) => void;
}

const Calendar: FunctionComponent<CalendarProps> = ({ onDateClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());
  
  const days = [];
  const today = new Date();
  
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    
    const isCurrentMonth = date.getMonth() === month;
    const isToday = date.toDateString() === today.toDateString();
    const isSelected = false; // 선택된 날짜 로직 추가 가능
    
    // 현재 달이 아닌 날짜는 빈 공간으로 표시
    if (!isCurrentMonth) {
      days.push(
        <div key={i} className={styles.emptyDay}>
        </div>
      );
    } else {
      days.push(
        <div
          key={i}
          className={`${styles.day} ${isToday ? styles.today : ''} ${isSelected ? styles.selected : ''}`}
          onClick={() => onDateClick?.(date)}
        >
          {date.getDate()}
        </div>
      );
    }
  }
  
  const monthNames = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ];
  
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };
  
  return (
    <Box className={styles.calendar}>
      <Box className={styles.header}>
        <button className={styles.navButton} onClick={goToPreviousMonth}>
          ‹
        </button>
        <div className={styles.monthYear}>
          {year}년 {monthNames[month]}
        </div>
        <button className={styles.navButton} onClick={goToNextMonth}>
          ›
        </button>
      </Box>
      
      <Box className={styles.weekDays}>
        {weekDays.map((day, index) => (
          <div key={index} className={styles.weekDay}>
            {day}
          </div>
        ))}
      </Box>
      
      <Box className={styles.days}>
        {days}
      </Box>
    </Box>
  );
};

export default Calendar;
