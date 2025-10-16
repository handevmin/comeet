import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import BottomNavigation from "../components/BottomNavigation";
import styles from "./Map.module.css";

// 카카오 지도 타입 정의
declare global {
  interface Window {
    kakao: any;
  }
}

const Map: FunctionComponent = () => {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedTransport, setSelectedTransport] = useState<string>("");
  const [isLocationSelected, setIsLocationSelected] = useState<boolean>(false);

  const onBackClick = useCallback(() => {
    navigate("/chat");
  }, [navigate]);

  const onShareClick = useCallback(() => {
    navigate("/chat", {
      state: {
        locationMessage: "trigger_system_message" // 시스템 메시지만 트리거
      }
    });
  }, [navigate]);

  const onTransportClick = useCallback((transport: string) => {
    setSelectedTransport(transport);
  }, []);

  const onLocationClick = useCallback((location: string) => {
    setSelectedLocation(location);
    setIsLocationSelected(true);
  }, []);

  // 카카오 지도 초기화
  useEffect(() => {
    const initMap = () => {
      if (window.kakao && mapRef.current) {
        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울시청
          level: 3
        };

        const kakaoMap = new window.kakao.maps.Map(container, options);
        setMap(kakaoMap);

        // 지도 클릭 이벤트
        window.kakao.maps.event.addListener(kakaoMap, 'click', (mouseEvent: any) => {
          const latlng = mouseEvent.latLng;
          
          // 클릭한 위치에 마커 표시
          const marker = new window.kakao.maps.Marker({
            position: latlng
          });
          marker.setMap(kakaoMap);

          // 주소 검색
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const address = result[0].address.address_name;
              setSelectedLocation(address);
            }
          });
        });
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

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
    if (window.kakao && map && keyword.trim()) {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, (data: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setSearchResults(data);
          
          // 첫 번째 결과로 지도 중심 이동
          if (data.length > 0) {
            const place = data[0];
            const moveLatLon = new window.kakao.maps.LatLng(place.y, place.x);
            map.setCenter(moveLatLon);
            map.setLevel(3);
            setSelectedLocation(place.place_name);
          }
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Box className={styles.container}>
      <StatusBar />

      {/* Header */}
      <Box className={styles.header}>
        <div className={styles.backButton} onClick={onBackClick}>
          ←
        </div>
        <div className={styles.title}>위치 선택</div>
        <div className={styles.placeholder}></div>
      </Box>

      {/* Map Container */}
      <div className={styles.mapContainer} ref={mapRef}></div>

      {/* Search Section */}
      <Box className={styles.searchSection}>
        <Box className={styles.searchInput}>
          <div className={styles.searchIcon}></div>
          <input
            type="text"
            placeholder="출발지를 입력해주세요."
            className={styles.input}
            value={searchKeyword}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Box>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <Box className={styles.resultsContainer}>
            {searchResults.slice(0, 5).map((place, index) => (
              <Box
                key={index}
                className={`${styles.resultItem} ${selectedLocation === place.place_name ? styles.selectedResult : ''}`}
                onClick={() => {
                  const moveLatLon = new window.kakao.maps.LatLng(place.y, place.x);
                  map.setCenter(moveLatLon);
                  map.setLevel(3);
                  onLocationClick(place.place_name);
                }}
              >
                <div className={styles.locationIcon}></div>
                <div className={styles.placeInfo}>
                  <div className={styles.placeName}>{place.place_name}</div>
                  <div className={styles.placeAddress}>{place.road_address_name}</div>
                </div>
              </Box>
            ))}
          </Box>
        )}


        {/* Transport Options */}
        <Box className={styles.transportOptions}>
          <div 
            className={`${styles.transportButton} ${selectedTransport === '도보' ? styles.selected : ''}`}
            onClick={() => onTransportClick('도보')}
          >
            도보
          </div>
          <div 
            className={`${styles.transportButton} ${selectedTransport === '버스' ? styles.selected : ''}`}
            onClick={() => onTransportClick('버스')}
          >
            버스
          </div>
          <div 
            className={`${styles.transportButton} ${selectedTransport === '자동차' ? styles.selected : ''}`}
            onClick={() => onTransportClick('자동차')}
          >
            자동차
          </div>
          <div 
            className={`${styles.transportButton} ${selectedTransport === '지하철' ? styles.selected : ''}`}
            onClick={() => onTransportClick('지하철')}
          >
            지하철
          </div>
        </Box>

        {/* Share Button */}
        <Box className={styles.shareButton} onClick={onShareClick}>
          공유
        </Box>
      </Box>

      <BottomNavigation />
    </Box>
  );
};

export default Map;
