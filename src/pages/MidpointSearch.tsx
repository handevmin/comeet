import { FunctionComponent, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./MidpointSearch.module.css";

const MidpointSearch: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    // Please sync "길찾기(지도앱)" to the project
  }, []);

  const onButtonContainerClick1 = useCallback(() => {
    // Please sync "장소 공유" to the project
  }, []);

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDepartureSearchClick = useCallback(() => {
    navigate("/departure-search");
  }, [navigate]);

  return (
    <Box className={styles.div}>
      <Box className={styles.search}>
        <div className={styles.iconsearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🔍</div>
        <Box className={styles.text}>
          <Box className={styles.divText}>
            <div className={styles.text2}>지윤, 민주, 성민의 중간지점</div>
          </Box>
          <Box className={styles.condition}>
            <div className={styles.text3}>6mon 16 – 26</div>
            <Box className={styles.dot} />
            <div className={styles.text4}>Cafe</div>
            <Box className={styles.dot} />
            <div className={styles.text4}>4 guests</div>
          </Box>
        </Box>
        <div className={styles.iconedit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✏️</div>
      </Box>
      <Box className={styles.search}>
        <div className={styles.iconsearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🔍</div>
        <Box className={styles.text6}>
          <Box className={styles.divText}>
            <div className={styles.text2}>지윤, 민주, 성민의 중간지점</div>
          </Box>
        </Box>
        <div className={styles.iconedit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✏️</div>
      </Box>
      <div className={styles.locationOnIcon} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>📍</div>
      <div className={styles.image7Icon} style={{ backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#666' }}>🗺️</div>
      <Box className={styles.div2}>
        <Box className={styles.div3} />
        <Box className={styles.div3}>
          <Box className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.div5}>길찾기</div>
          </Box>
          <Box 
            className={styles.button} 
            onClick={onDepartureSearchClick}
            style={{ 
              marginTop: '8px',
              backgroundColor: 'var(--color-darkslateblue-200)',
              cursor: 'pointer'
            }}
          >
            <div className={styles.div5}>출발지점 검색</div>
          </Box>
          <Box className={styles.handle}>
            <Box className={styles.divHandle} />
          </Box>
          <Box className={styles.listing}>
            <Box className={styles.locationInfo}>
              <Box className={styles.imageCarousel}>
                <Box className={styles.image} />
                <div
                  className={styles.paginationIcon}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#666' }}
                >
                  ●●●
                </div>
                <div className={styles.productName}>경기대학교 수원캠퍼스</div>
                <Box className={styles.text9}>
                  <Box className={styles.ratingDistance}>
                    <Box className={styles.rating} />
                  </Box>
                </Box>
                <Box className={styles.distance} />
                <div
                  className={styles.iconmapPin}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}
                >
                  📍
                </div>
              </Box>
              <Box className={styles.info}>
                <Box className={styles.priceCta}>
                  <Box className={styles.price}>
                    <div className={styles.divPrice}>45~50분</div>
                    <div className={styles.night}>/ 지윤, 민주, 성민</div>
                  </Box>
                  <Box
                    className={styles.divButton}
                    onClick={onButtonContainerClick1}
                  >
                    <Typography
                      className={styles.b}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "140%", fontWeight: "700" }}
                    >
                      공유
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <div
              className={styles.imageCarouselIcon}
              style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#666' }}
            >
              🏢
            </div>
          </Box>
          <Box className={styles.image8} />
          <div
            className={styles.image82Icon}
            style={{ backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#666' }}
            onClick={onImageClick}
          >
            🗺️
          </div>
          <Box className={styles.button2}>
            <div
              className={styles.imageRemovebgPreview1Icon}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}
            >
              🚗
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MidpointSearch;
