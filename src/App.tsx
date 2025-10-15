import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";
import MidpointSearch from "./pages/MidpointSearch";
import Chat from "./pages/Chat";
import ChatList from "./pages/ChatList";
import DepartureSearch from "./pages/DepartureSearch";
import Signup from "./pages/Signup";
import InviteFriends from "./pages/InviteFriends";
import CreateChatRoom from "./pages/CreateChatRoom";
import ChatRoomName from "./pages/ChatRoomName";
import ChatRoomCreated from "./pages/ChatRoomCreated";
import ChatParticipants from "./pages/ChatParticipants";
import FriendsList from "./pages/FriendsList";
import Notifications from "./pages/Notifications";
import PeriodSelection from "./pages/PeriodSelection";
import DateTimeSelection from "./pages/DateTimeSelection";
import Settings from "./pages/Settings";
import Map from "./pages/Map";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "로그인 - CoMeet";
        metaDescription = "CoMeet 로그인 페이지";
        break;
      case "/dashboard":
        title = "대시보드 - CoMeet";
        metaDescription = "CoMeet 메인 대시보드";
        break;
      case "/signup":
        title = "회원가입 - CoMeet";
        metaDescription = "CoMeet 회원가입 페이지";
        break;
      case "/add-event":
        title = "일정 추가 - CoMeet";
        metaDescription = "CoMeet 일정 추가 페이지";
        break;
      case "/chat":
        title = "채팅 - CoMeet";
        metaDescription = "CoMeet 채팅 페이지";
        break;
      case "/midpoint":
        title = "중간지점 검색 - CoMeet";
        metaDescription = "CoMeet 중간지점 검색 페이지";
        break;
      case "/chat-list":
        title = "채팅 목록 - CoMeet";
        metaDescription = "CoMeet 채팅 목록 페이지";
        break;
             case "/departure-search":
               title = "출발지점 검색 - CoMeet";
               metaDescription = "CoMeet 출발지점 검색 페이지";
               break;
             case "/invite-friends":
               title = "대화상대 초대 - CoMeet";
               metaDescription = "CoMeet 대화상대 초대 페이지";
               break;
            case "/create-chat-room":
              title = "채팅방 유형 - CoMeet";
              metaDescription = "채팅방 유형 선택";
              break;
            case "/chat-room-name":
              title = "채팅방 이름 - CoMeet";
              metaDescription = "채팅방 이름 설정";
              break;
             case "/chat-room-created":
               title = "채팅방 생성 완료 - CoMeet";
               metaDescription = "CoMeet 채팅방 생성 완료 페이지";
               break;
             case "/chat-participants":
               title = "참여자 관리 - CoMeet";
               metaDescription = "CoMeet 채팅방 참여자 관리 페이지";
               break;
             case "/friends-list":
               title = "친구 목록 - CoMeet";
               metaDescription = "CoMeet 친구 목록 페이지";
               break;
             case "/notifications":
               title = "알림 화면 - CoMeet";
               metaDescription = "CoMeet 알림 화면 페이지";
               break;
            case "/period-selection":
              title = "기간 선택 - CoMeet";
              metaDescription = "CoMeet 기간 선택 페이지";
              break;
            case "/datetime-selection":
              title = "날짜 및 시간 선택 - CoMeet";
              metaDescription = "CoMeet 날짜 및 시간 선택 페이지";
              break;
            case "/map":
              title = "지도 - CoMeet";
              metaDescription = "CoMeet 지도 페이지";
              break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{
        width: '375px',
        height: '812px',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/midpoint" element={<MidpointSearch />} />
                 <Route path="/chat-list" element={<ChatList />} />
                 <Route path="/departure-search" element={<DepartureSearch />} />
                 <Route path="/invite-friends" element={<InviteFriends />} />
                 <Route path="/create-chat-room" element={<CreateChatRoom />} />
                 <Route path="/chat-room-name" element={<ChatRoomName />} />
                 <Route path="/chat-room-created" element={<ChatRoomCreated />} />
                 <Route path="/chat-participants" element={<ChatParticipants />} />
                 <Route path="/friends-list" element={<FriendsList />} />
                 <Route path="/notifications" element={<Notifications />} />
                 <Route path="/period-selection" element={<PeriodSelection />} />
                 <Route path="/datetime-selection" element={<DateTimeSelection />} />
                 <Route path="/settings" element={<Settings />} />
                 <Route path="/map" element={<Map />} />
               </Routes>
      </div>
    </div>
  );
}
export default App;
