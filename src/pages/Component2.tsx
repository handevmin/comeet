import { FunctionComponent, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Component2.module.css";

const Component2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLabelTextClick = useCallback(() => {
    // Please sync "회원가입 화면(정보 입력)" to the project
  }, []);

  const onBackClick = useCallback(() => {
    navigate("/");
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
          <Box className={styles.button}>
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
            >{`다음을 클릭하시면 `}</Typography>
            <Typography
              className={styles.span}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >
              서비스
            </Typography>
            <Typography
              className={styles.divSpan}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >{` `}</Typography>
            <Typography
              className={styles.span}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >
              이용약관
            </Typography>
            <Typography
              className={styles.divSpan}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >{` `}</Typography>
            <Typography
              className={styles.span}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >
              및
            </Typography>
            <Typography
              className={styles.divSpan}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >{` `}</Typography>
            <Typography
              className={styles.span}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >
              개인정보
            </Typography>
            <Typography
              className={styles.divSpan}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >{` `}</Typography>
            <Typography
              className={styles.span}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >
              처리방침에
            </Typography>
            <Typography
              className={styles.divSpan}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >{` `}</Typography>
          </Typography>
          <Typography className={styles.p} variant="inherit">
            <Typography
              className={styles.span}
              variant="inherit"
              variantMapping={{ inherit: "span" }}
            >
              동의하게
            </Typography>
            <Typography variant="inherit" variantMapping={{ inherit: "span" }}>
              {" "}
              됩니다.
            </Typography>
          </Typography>
        </div>
      </Box>
      <Box className={styles.field2}>
        <div className={styles.label2} onClick={onLabelTextClick}>
          이름
        </div>
      </Box>
      <Box className={styles.copy}>
        <div className={styles.createAnAccount}>Create an account</div>
      </Box>
      <div className={styles.div3}>사용자 이름을 입력하세요</div>
      <div className={styles.div4}>가입할 이메일 계정을 입력하세요</div>
      <div className={styles.comeet} onClick={onBackClick} style={{ cursor: 'pointer' }}>CoMeet</div>
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

export default Component2;
