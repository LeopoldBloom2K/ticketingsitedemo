import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../style-pages/Events.css";

interface Event {
    id: number;
    title: string;
    desc: string;
    date: string;
    location: string;
    price: string;
    category: string;
    capacity: number;
}

const allEvents: Event[] = [
    { id: 1, title: "2025 서울 재즈 페스티벌", desc: "세계적인 재즈 아티스트들이 한자리에 모이는 국내 최대 재즈 페스티벌", date: "2025.08.15 ~ 08.17", location: "올림픽공원", price: "99,000원~", category: "페스티벌", capacity: 5000 },
    { id: 2, title: "뮤지컬 오페라의 유령", desc: "전 세계를 매료시킨 앤드류 로이드 웨버의 불후의 명작", date: "2025.07.01 ~ 09.30", location: "블루스퀘어", price: "70,000원~", category: "뮤지컬", capacity: 1200 },
    { id: 3, title: "IU 콘서트 : The Winning", desc: "IU의 감성과 음악을 만끽할 수 있는 특별한 콘서트", date: "2025.09.20 ~ 09.21", location: "잠실종합운동장", price: "132,000원~", category: "콘서트", capacity: 40000 },
    { id: 4, title: "서울시향 베토벤 교향곡", desc: "서울시립교향악단이 선사하는 베토벤 교향곡 전곡 연주", date: "2025.10.05", location: "예술의전당", price: "50,000원~", category: "클래식", capacity: 2500 },
    { id: 5, title: "뮤지컬 위키드", desc: "오즈의 마법사 이전의 이야기를 그린 브로드웨이 히트 뮤지컬", date: "2025.11.01 ~ 2026.01.31", location: "충무아트센터", price: "60,000원~", category: "뮤지컬", capacity: 1000 },
    { id: 6, title: "록 페스티벌 2025", desc: "국내외 록밴드가 총출동하는 야외 록 페스티벌", date: "2025.10.18 ~ 10.19", location: "난지한강공원", price: "110,000원~", category: "페스티벌", capacity: 8000 },
    { id: 7, title: "연극 햄릿", desc: "셰익스피어 4대 비극 중 하나인 햄릿의 현대적 재해석", date: "2025.11.15 ~ 12.15", location: "대학로 아트원씨어터", price: "45,000원~", category: "연극", capacity: 300 },
    { id: 8, title: "크리스마스 오케스트라", desc: "겨울밤을 따뜻하게 물들이는 크리스마스 특별 오케스트라 공연", date: "2025.12.24", location: "세종문화회관", price: "55,000원~", category: "클래식", capacity: 3000 },
    { id: 9, title: "BTS 월드투어 서울", desc: "BTS가 돌아왔다! 서울 스타디움 단독 콘서트", date: "2025.12.01 ~ 12.02", location: "서울월드컵경기장", price: "154,000원~", category: "콘서트", capacity: 60000 },
    { id: 10, title: "뮤지컬 레미제라블", desc: "혁명과 사랑, 인간 존엄의 이야기를 담은 뮤지컬의 정수", date: "2026.01.10 ~ 03.31", location: "블루스퀘어", price: "80,000원~", category: "뮤지컬", capacity: 1200 },
    { id: 11, title: "연극 맥베스", desc: "야망과 광기의 이야기, 셰익스피어 맥베스의 새로운 해석", date: "2026.02.01 ~ 02.28", location: "국립극장", price: "40,000원~", category: "연극", capacity: 500 },
    { id: 12, title: "스프링 뮤직 페스티벌", desc: "봄을 맞이하는 다채로운 장르의 음악 축제", date: "2026.04.05 ~ 04.06", location: "올림픽공원", price: "88,000원~", category: "페스티벌", capacity: 6000 },
];

const categories = ["전체", "콘서트", "뮤지컬", "클래식", "연극", "페스티벌"];

const Events = () => {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get("category") || "전체";
    const [selectedCategory, setSelectedCategory] = useState(categoryParam);
    const [searchKeyword, setSearchKeyword] = useState("");

    const filteredEvents = allEvents.filter(event => {
        const matchCategory = selectedCategory === "전체" || event.category === selectedCategory;
        const matchSearch = event.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            event.location.toLowerCase().includes(searchKeyword.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="events-page">
            {/* 배너 */}
            <div className="events-banner">
                <div className="events-banner-pattern" />
                <div className="events-banner-content">
                    <h1 className="events-banner-title">이벤트</h1>
                    <p className="events-banner-subtitle">다양한 공연과 이벤트를 찾아보세요</p>
                </div>
            </div>

            <div className="events-container">
                {/* 필터 영역 */}
                <div className="events-filter">
                    <div className="filter-categories">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="filter-search">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="이벤트명, 장소로 검색"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                        />
                    </div>
                </div>

                {/* 결과 카운트 */}
                <p className="events-count">총 <strong>{filteredEvents.length}</strong>개의 이벤트</p>

                {/* 이벤트 그리드 */}
                {filteredEvents.length === 0 ? (
                    <div className="events-empty">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <p>검색 결과가 없습니다</p>
                    </div>
                ) : (
                    <div className="events-grid">
                        {filteredEvents.map(event => (
                            <Link to={`/events/${event.id}`} className="ev-card" key={event.id}>
                                <div className="ev-card-image">
                                    <span className="ev-card-category">{event.category}</span>
                                </div>
                                <div className="ev-card-body">
                                    <h3 className="ev-card-title">{event.title}</h3>
                                    <p className="ev-card-desc">{event.desc}</p>
                                    <div className="ev-card-meta">
                                        <span className="ev-card-date">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            {event.date}
                                        </span>
                                        <span className="ev-card-location">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                            </svg>
                                            {event.location}
                                        </span>
                                    </div>
                                    <div className="ev-card-footer">
                                        <span className="ev-card-price">{event.price}</span>
                                        <span className="ev-card-cta">자세히 보기</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
