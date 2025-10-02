import { FunctionComponent, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onSignupClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onSkipClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <Box className={styles.div}>
      <Box className={styles.content}>
        <Box className={styles.inputButton}>
          <Box className={styles.field}>
            <div className={styles.label}>이메일</div>
          </Box>
          <Box className={styles.field}>
            <div className={styles.divLabel}>비밀번호</div>
          </Box>
          <Box className={styles.button} onClick={onLoginClick} style={{ cursor: 'pointer' }}>
            <Typography
              className={styles.b}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "140%", fontWeight: "700" }}
            >
              로그인
            </Typography>
          </Box>
        </Box>
        <div className={styles.div2}>
          <Typography className={styles.p} variant="inherit">
            <Typography
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >{`계정이 없으신가요? `}</Typography>
            <Typography
              className={styles.span}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
              onClick={onSignupClick}
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              회원가입
            </Typography>
          </Typography>
        </div>
        <div 
          className={styles.skipButton}
          onClick={onSkipClick}
          style={{
            marginTop: '16px',
            fontSize: 'var(--fs-12)',
            color: 'var(--color-gray)',
            cursor: 'pointer',
            textDecoration: 'underline',
            textAlign: 'center'
          }}
        >
          건너뛰기
        </div>
      </Box>
      <div className={styles.comeet}>CoMeet</div>
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
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
    </Box>
  );
};

export default Login;
