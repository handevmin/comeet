import { FunctionComponent, useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import styles from "./Signup.module.css";

const Signup: FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onSignupClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/");
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
          <Box className={styles.field}>
            <div className={styles.divLabel}>비밀번호 확인</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
              placeholder="비밀번호를 다시 입력하세요"
            />
          </Box>
          <Box className={styles.field}>
            <div className={styles.divLabel}>이름</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="이름을 입력하세요"
            />
          </Box>
          <Box className={styles.button} onClick={onSignupClick} style={{ cursor: 'pointer' }}>
            <Typography
              className={styles.b}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "140%", fontWeight: "700" }}
            >
              회원가입
            </Typography>
          </Box>
        </Box>
        <div className={styles.div2}>
          <Typography className={styles.p} variant="inherit">
            <Typography
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >{`이미 계정이 있으신가요? `}</Typography>
            <Typography
              className={styles.span}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
              onClick={onBackClick}
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              로그인
            </Typography>
          </Typography>
        </div>
      </Box>
      <div className={styles.comeet}>CoMeet</div>
      <StatusBar />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
    </Box>
  );
};

export default Signup;
