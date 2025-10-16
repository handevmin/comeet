import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./MidpointResult.module.css";

// 카카오 지도 타입 정의
declare global {
  interface Window {
    kakao: any;
  }
}

const MidpointResult: FunctionComponent = () => {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);

  const onBackClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const onShareClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const onDirectionsClick = useCallback(() => {
    // 카카오맵 앱의 URL 스킴을 사용하여 길찾기 열기
    const latitude = 37.3006; // 경기대학교 수원캠퍼스 위도
    const longitude = 127.0356; // 경기대학교 수원캠퍼스 경도
    
    // 카카오맵 앱 URL 스킴
    const kakaoMapUrl = `kakaomap://look?p=${latitude},${longitude}`;
    
    // 웹에서 카카오맵으로 이동하는 URL (앱이 없을 경우 대체)
    const webMapUrl = `https://map.kakao.com/link/to/경기대학교수원캠퍼스,${latitude},${longitude}`;
    
    // 앱이 설치되어 있는지 확인하고 열기 시도
    const openKakaoMap = () => {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = kakaoMapUrl;
      document.body.appendChild(iframe);
      
      // 2초 후 앱이 열리지 않았다면 웹으로 이동
      setTimeout(() => {
        document.body.removeChild(iframe);
        window.open(webMapUrl, '_blank');
      }, 2000);
    };
    
    openKakaoMap();
  }, []);

  // 카카오 지도 초기화
  useEffect(() => {
    const initMap = () => {
      if (window.kakao && mapRef.current) {
        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(37.3006, 127.0356), // 경기대학교 수원캠퍼스 좌표
          level: 3
        };

        const kakaoMap = new window.kakao.maps.Map(container, options);
        setMap(kakaoMap);

        // 경기대학교 수원캠퍼스에 마커 표시
        const markerPosition = new window.kakao.maps.LatLng(37.3006, 127.0356);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(kakaoMap);

        // 인포윈도우 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:10px; font-size:14px; font-weight:bold;">경기대학교 수원캠퍼스</div>'
        });
        infowindow.open(kakaoMap, marker);
      }
    };

    // 카카오 지도 API 로드 대기
    if (window.kakao) {
      initMap();
    } else {
      // API가 아직 로드되지 않은 경우 잠시 후 재시도
      setTimeout(() => {
        if (window.kakao) {
          initMap();
        }
      }, 1000);
    }
  }, []);

  return (
    <Box className={styles.container}>
      <StatusBar />

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.backButton} onClick={onBackClick}>
          ←
        </div>
        <div className={styles.title}>지윤, 민주, 성민의 중간지점</div>
        <div className={styles.placeholder}></div>
      </Box>

      {/* Map Container */}
      <div className={styles.mapContainer} ref={mapRef}></div>

      {/* Action Buttons */}
      <Box className={styles.actionButtons}>
        <div className={styles.directionsButton} onClick={onDirectionsClick}>
          길찾기
        </div>
      </Box>

      {/* Location Preview */}
      <Box className={styles.locationPreview}>
        <div className={styles.locationImage}></div>
        <div className={styles.locationInfo}>
          <div className={styles.locationName}>
            <div className={styles.locationIcon}></div>
            경기대학교 수원캠퍼스
          </div>
          <div className={styles.travelTime}>
            45~50분 / 지윤, 민주, 성민
          </div>
        </div>
        <div className={styles.shareButton} onClick={onShareClick}>
          공유
        </div>
      </Box>

      <BottomNavigation />
    </Box>
  );
};

export default MidpointResult;
