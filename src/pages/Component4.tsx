import { FunctionComponent, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Component4.module.css";

const Component4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Box className={styles.div}>
      <Box className={styles.row}>
        <Box className={styles.title}>
          <div className={styles.divTitle}>Title</div>
          <img className={styles.chevronIcon} alt="" src="/Chevron.svg" />
        </Box>
        <Box className={styles.carousel}>
          <div className={styles.imageIcon} style={{ backgroundColor: '#e0e0e0' }}>IMG1</div>
          <div className={styles.imageIcon} style={{ backgroundColor: '#d0d0d0' }}>IMG2</div>
          <div className={styles.imageIcon} style={{ backgroundColor: '#c0c0c0' }}>IMG3</div>
          <div className={styles.imageIcon} style={{ backgroundColor: '#b0b0b0' }}>IMG4</div>
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
      <div className={styles.div2}>제목 추가</div>
      <Box className={styles.pills}>
        <Box className={styles.pill}>
          <div className={styles.div3}>일정</div>
        </Box>
        <Box className={styles.divPill}>
          <div className={styles.div3}>할 일</div>
        </Box>
        <Box className={styles.divPill}>
          <div className={styles.div3}>생일</div>
        </Box>
      </Box>
      <Box className={styles.divPills}>
        <Box className={styles.pill3}>
          <div className={styles.div3}>약속</div>
        </Box>
        <Box className={styles.pill4}>
          <div className={styles.div3}>학교 시간표</div>
        </Box>
      </Box>
      <div className={styles.attachFileIcon}>📎</div>
      <Typography
        className={styles.i}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{ fontWeight: "600", lineHeight: "140%", letterSpacing: "-0.02em" }}
      >
        종일
      </Typography>
      <Typography
        className={styles.i2}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{ fontWeight: "600", lineHeight: "140%", letterSpacing: "-0.02em" }}
      >
        옵션 더보기
      </Typography>
      <Typography
        className={styles.i3}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{ fontWeight: "600", lineHeight: "140%", letterSpacing: "-0.02em" }}
      >
        참석자 추가
      </Typography>
      <Typography
        className={styles.i4}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{ fontWeight: "600", lineHeight: "140%", letterSpacing: "-0.02em" }}
      >
        화상 회의 추가
      </Typography>
      <Typography
        className={styles.i5}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{ fontWeight: "600", lineHeight: "140%", letterSpacing: "-0.02em" }}
      >
        기본 색상
      </Typography>
      <Typography
        className={styles.i6}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{ fontWeight: "600", lineHeight: "140%", letterSpacing: "-0.02em" }}
      >
        설명 추가
      </Typography>
      <Typography
        className={styles.i7}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{ fontWeight: "600", lineHeight: "140%", letterSpacing: "-0.02em" }}
      >
        30분 전
      </Typography>
      <Typography
        className={styles.i8}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{ fontWeight: "600", lineHeight: "140%", letterSpacing: "-0.02em" }}
      >
        위치 추가
      </Typography>
      <Box className={styles.camera}>
        <div className={styles.icon}>📷</div>
      </Box>
      <Typography
        className={styles.i9}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{ fontWeight: "600", lineHeight: "140%", letterSpacing: "-0.02em" }}
      >
        6월 29일 목요일 23:00
      </Typography>
      <Typography
        className={styles.i10}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{ fontWeight: "600", lineHeight: "140%", letterSpacing: "-0.02em" }}
      >
        6월 30일 금요일 03:00
      </Typography>
      <Box className={styles.child} />
      <Box className={styles.item} />
      <Box className={styles.inner} />
      <Box className={styles.lineDiv} />
      <Box className={styles.divChild} />
      <Box className={styles.child2} />
      <Box className={styles.child3} />
      <Box className={styles.child4} />
      <Box className={styles.child5} />
      <div className={styles.personIcon}>👤</div>
      <div className={styles.locationOnIcon}>📍</div>
      <Box className={styles.bell}>
        <div className={styles.divIcon}>🔔</div>
      </Box>
      <Box className={styles.rectangleDiv} />
      <div className={styles.tabBarIcon}>Tab Bar</div>
      <Typography
        className={styles.i11}
        onClick={onTextClick}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{
          fontWeight: "600",
          fontSize: "var(--fs-14)",
          lineHeight: "140%",
          letterSpacing: "-0.02em",
        }}
      >
        저장
      </Typography>
      <Typography
        className={styles.i12}
        onClick={onTextClick}
        variant="inherit"
        variantMapping={{ inherit: "i" }}
        sx={{
          fontWeight: "600",
          fontSize: "var(--fs-14)",
          lineHeight: "140%",
          letterSpacing: "-0.02em",
        }}
      >
        취소
      </Typography>
    </Box>
  );
};

export default Component4;
