import { FunctionComponent, useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./AddEvent.module.css";

const AddEvent: FunctionComponent = () => {
  const navigate = useNavigate();
  
  // Form states
  const [title, setTitle] = useState<string>("");
  const [eventType, setEventType] = useState<string>("일정");
  const [category, setCategory] = useState<string>("약속");
  const [isAllDay, setIsAllDay] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>("2025-06-29");
  const [startTime, setStartTime] = useState<string>("23:00");
  const [endDate, setEndDate] = useState<string>("2025-06-30");
  const [endTime, setEndTime] = useState<string>("03:00");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [reminder, setReminder] = useState<string>("30분 전");
  const [selectedColor, setSelectedColor] = useState<string>("#4A90E2");
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState<string>("");
  const [videoConference, setVideoConference] = useState<string>("");

  const onCancelClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onSaveClick = useCallback(() => {
    const eventData = {
      title,
      eventType,
      category,
      isAllDay,
      startDate,
      startTime,
      endDate,
      endTime,
      location,
      description,
      reminder,
      color: selectedColor,
      participants,
      videoConference
    };
    
    console.log("일정 저장:", eventData);
    // 여기서 실제 API 호출
    navigate("/dashboard");
  }, [navigate, title, eventType, category, isAllDay, startDate, startTime, endDate, endTime, location, description, reminder, selectedColor, participants, videoConference]);

  const addParticipant = useCallback(() => {
    if (newParticipant.trim() && !participants.includes(newParticipant.trim())) {
      setParticipants(prev => [...prev, newParticipant.trim()]);
      setNewParticipant("");
    }
  }, [newParticipant, participants]);

  const removeParticipant = useCallback((participant: string) => {
    setParticipants(prev => prev.filter(p => p !== participant));
  }, []);

  const formatDateTime = (date: string, time: string) => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const weekdays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const weekday = weekdays[dateObj.getDay()];
    return `${month}월 ${day}일 ${weekday} ${time}`;
  };

  return (
    <Box className={styles.container}>
      <StatusBar />
      
      {/* Header */}
      <Box className={styles.header}>
        <Typography className={styles.cancelButton} onClick={onCancelClick}>
          취소
        </Typography>
        <Typography className={styles.title}>일정 추가</Typography>
        <Typography className={styles.saveButton} onClick={onSaveClick}>
          저장
        </Typography>
      </Box>

      {/* Main Content */}
      <Box className={styles.content}>
        {/* Title Input */}
        <input
          type="text"
          placeholder="일정 제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.titleInput}
        />

        {/* Event Type Pills */}
        <Box className={styles.typePills}>
          {['일정', '할 일', '생일'].map((type) => (
            <Box 
              key={type}
              className={eventType === type ? styles.pill : styles.divPill}
              onClick={() => setEventType(type)}
            >
              <div className={styles.pillText}>{type}</div>
            </Box>
          ))}
        </Box>

        {/* All Day Toggle */}
        <Box className={styles.allDaySection} onClick={() => setIsAllDay(!isAllDay)}>
          <div className={styles.attachFileIcon}>📎</div>
          <Typography className={styles.allDayText}>종일</Typography>
          <div className={`${styles.checkbox} ${isAllDay ? styles.checkboxChecked : ''}`}>
            {isAllDay && <span className={styles.checkmark}>✓</span>}
          </div>
        </Box>

        {/* Date and Time */}
        <Box className={styles.dateTimeSection}>
          <Box className={styles.dateTimeItem}>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={styles.dateInput}
            />
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className={styles.timeInput}
              disabled={isAllDay}
            />
          </Box>
          <Box className={styles.dateTimeItem}>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={styles.dateInput}
            />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className={styles.timeInput}
              disabled={isAllDay}
            />
          </Box>
        </Box>

        {/* More Options */}
        <Typography className={styles.moreOptionsText}>옵션 더보기</Typography>

        {/* Category Pills */}
        <Box className={styles.categoryPills}>
          {['약속', '학교 시간표'].map((cat) => (
            <Box 
              key={cat}
              className={category === cat ? styles.pill3 : styles.pill4}
              onClick={() => setCategory(cat)}
            >
              <div className={styles.pillText}>{cat}</div>
            </Box>
          ))}
        </Box>

        {/* Options List */}
        <Box className={styles.optionsList}>
          {/* Participants */}
          <Box className={styles.optionItem}>
            <div className={styles.personIcon}>👤</div>
            <Typography className={styles.optionText}>참석자 추가</Typography>
            <Box className={styles.participantInputContainer}>
              <input
                type="text"
                placeholder="참석자 이름을 입력하세요"
                value={newParticipant}
                onChange={(e) => setNewParticipant(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addParticipant()}
                className={styles.participantInput}
              />
              <button 
                onClick={addParticipant}
                className={styles.addButton}
                disabled={!newParticipant.trim()}
              >
                추가
              </button>
            </Box>
            {participants.length > 0 && (
              <Box className={styles.participantList}>
                {participants.map((participant, index) => (
                  <Box key={index} className={styles.participantTag}>
                    <span className={styles.participantName}>{participant}</span>
                    <button 
                      onClick={() => removeParticipant(participant)}
                      className={styles.removeButton}
                    >
                      ×
                    </button>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          
          {/* Video Conference */}
          <Box className={styles.optionItem}>
            <Box className={styles.camera}>
              <div className={styles.icon}>📷</div>
            </Box>
            <Typography className={styles.optionText}>화상 회의 추가</Typography>
            <input
              type="text"
              placeholder="화상 회의 링크를 입력하세요"
              value={videoConference}
              onChange={(e) => setVideoConference(e.target.value)}
              className={styles.videoConferenceInput}
            />
          </Box>

          <Box className={styles.optionItem}>
            <div className={styles.locationOnIcon}>📍</div>
            <Typography className={styles.optionText}>위치 추가</Typography>
            <input
              type="text"
              placeholder="위치를 입력하세요"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={styles.locationInput}
            />
          </Box>

          <Box className={styles.optionItem}>
            <Box className={styles.bell}>
              <div className={styles.divIcon}>🔔</div>
            </Box>
            <select
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              className={styles.reminderSelect}
            >
              <option value="30분 전">30분 전</option>
              <option value="1시간 전">1시간 전</option>
              <option value="2시간 전">2시간 전</option>
              <option value="1일 전">1일 전</option>
              <option value="없음">없음</option>
            </select>
          </Box>

          <Box className={styles.optionItem}>
            <input
              type="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className={styles.colorInput}
            />
            <Typography className={styles.optionText}>기본 색상</Typography>
          </Box>
        </Box>

        {/* Description */}
        <Box className={styles.descriptionSection}>
          <Typography className={styles.descriptionLabel}>설명 추가</Typography>
          <textarea
            placeholder="일정에 대한 설명을 입력하세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.descriptionInput}
          />
        </Box>
      </Box>
      
      <BottomNavigation />
    </Box>
  );
};

export default AddEvent;
