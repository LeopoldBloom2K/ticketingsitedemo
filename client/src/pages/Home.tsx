import { Link } from "react-router-dom";
import "../style-pages/Home.css";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  price: string;
  category: string;
}

const popularEvents: Event[] = [
  {
    id: 1,
    title: "2025 서울 재즈 페스티벌",
    date: "2025.08.15 ~ 08.17",
    location: "올림픽공원",
    price: "99,000원~",
    category: "페스티벌",
  },
  {
    id: 2,
    title: "뮤지컬 오페라의 유령",
    date: "2025.07.01 ~ 09.30",
    location: "블루스퀘어",
    price: "70,000원~",
    category: "뮤지컬",
  },
  {
    id: 3,
    title: "IU 콘서트 : The Winning",
    date: "2025.09.20 ~ 09.21",
    location: "잠실종합운동장",
    price: "132,000원~",
    category: "콘서트",
  },
  {
    id: 4,
    title: "서울시향 베토벤 교향곡",
    date: "2025.10.05",
    location: "예술의전당",
    price: "50,000원~",
    category: "클래식",
  },
];

const upcomingEvents: Event[] = [
  {
    id: 5,
    title: "뮤지컬 위키드",
    date: "2025.11.01 ~ 2026.01.31",
    location: "충무아트센터",
    price: "60,000원~",
    category: "뮤지컬",
  },
  {
    id: 6,
    title: "록 페스티벌 2025",
    date: "2025.10.18 ~ 10.19",
    location: "난지한강공원",
    price: "110,000원~",
    category: "페스티벌",
  },
  {
    id: 7,
    title: "연극 햄릿",
    date: "2025.11.15 ~ 12.15",
    location: "대학로 아트원씨어터",
    price: "45,000원~",
    category: "연극",
  },
  {
    id: 8,
    title: "크리스마스 오케스트라",
    date: "2025.12.24",
    location: "세종문화회관",
    price: "55,000원~",
    category: "클래식",
  },
];

const categories = [
  { name: "콘서트", icon: "🎤" },
  { name: "뮤지컬", icon: "🎭" },
  { name: "클래식·오케스트라", icon: "🎻" },
  { name: "연극", icon: "🎬" },
  { name: "페스티벌", icon: "🎪" },
];

const EventCard = ({ event }: { event: Event }) => (
  <div className="event-card">
    <div className="event-card-image">
      <span className="event-card-category">{event.category}</span>
    </div>
    <div className="event-card-info">
      <h3 className="event-card-title">{event.title}</h3>
      <p className="event-card-date">{event.date}</p>
      <p className="event-card-location">{event.location}</p>
      <p className="event-card-price">{event.price}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="home">
      {/* 히어로 배너 */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            지금 가장 핫한 공연을
            <br />
            만나보세요
          </h1>
          <p className="hero-subtitle">
            콘서트, 뮤지컬, 페스티벌까지 한 곳에서
          </p>
          <Link to="/events" className="hero-cta">
            이벤트 보기
          </Link>
        </div>
      </section>

      {/* 카테고리 바로가기 */}
      <section className="categories">
        {categories.map((cat) => (
          <Link
            to={`/events?category=${cat.name}`}
            className="category-item"
            key={cat.name}
          >
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
          </Link>
        ))}
      </section>

      {/* 인기 이벤트 */}
      <section className="event-section">
        <h2 className="section-title">인기 이벤트</h2>
        <div className="event-grid">
          {popularEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* 오픈 예정 */}
      <section className="event-section">
        <h2 className="section-title">오픈 예정</h2>
        <div className="event-grid">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
