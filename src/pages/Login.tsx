import { FunctionComponent, useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="이메일을 입력하세요"
            />
          </Box>
          <Box className={styles.field}>
            <div className={styles.divLabel}>비밀번호</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="비밀번호를 입력하세요"
            />
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
      <StatusBar />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
    </Box>
  );
};

export default Login;
