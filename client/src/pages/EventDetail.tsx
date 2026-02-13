import { useParams, Link, useNavigate } from "react-router-dom";
import "../style-pages/EventDetail.css";

interface Event {
    id: number;
    title: string;
    desc: string;
    date: string;
    location: string;
    price: string;
    category: string;
    capacity: number;
    hostName: string;
    detail: string;
}

const eventsData: Event[] = [
    { id: 1, title: "2025 서울 재즈 페스티벌", desc: "세계적인 재즈 아티스트들이 한자리에 모이는 국내 최대 재즈 페스티벌", date: "2025.08.15 ~ 08.17", location: "올림픽공원", price: "99,000원~", category: "페스티벌", capacity: 5000, hostName: "서울문화재단", detail: "세계적인 재즈 뮤지션들이 서울 올림픽공원에서 3일간 펼치는 국내 최대 규모의 재즈 페스티벌입니다. 다양한 무대에서 재즈의 모든 장르를 경험할 수 있으며, 푸드 트럭과 함께 여름밤의 낭만을 즐길 수 있습니다." },
    { id: 2, title: "뮤지컬 오페라의 유령", desc: "전 세계를 매료시킨 앤드류 로이드 웨버의 불후의 명작", date: "2025.07.01 ~ 09.30", location: "블루스퀘어", price: "70,000원~", category: "뮤지컬", capacity: 1200, hostName: "에스앤코", detail: "앤드류 로이드 웨버의 명작 뮤지컬이 한국에 돌아옵니다. 파리 오페라 하우스의 지하에 숨어사는 천재 음악가의 비극적 사랑 이야기를 화려한 무대와 잊을 수 없는 음악으로 만나보세요." },
    { id: 3, title: "IU 콘서트 : The Winning", desc: "IU의 감성과 음악을 만끽할 수 있는 특별한 콘서트", date: "2025.09.20 ~ 09.21", location: "잠실종합운동장", price: "132,000원~", category: "콘서트", capacity: 40000, hostName: "EDAM엔터테인먼트", detail: "대한민국 대표 아티스트 IU의 대규모 콘서트! 히트곡은 물론 신곡까지 완벽한 라이브로 만나볼 수 있습니다. 잠실종합운동장을 가득 채울 감동의 무대를 놓치지 마세요." },
    { id: 4, title: "서울시향 베토벤 교향곡", desc: "서울시립교향악단이 선사하는 베토벤 교향곡 전곡 연주", date: "2025.10.05", location: "예술의전당", price: "50,000원~", category: "클래식", capacity: 2500, hostName: "서울시립교향악단", detail: "서울시립교향악단이 베토벤 교향곡 전곡을 연주합니다. 클래식 음악의 정수를 느낄 수 있는 특별한 공연으로, 예술의전당 콘서트홀에서 최고의 음향으로 감상하실 수 있습니다." },
    { id: 5, title: "뮤지컬 위키드", desc: "오즈의 마법사 이전의 이야기를 그린 브로드웨이 히트 뮤지컬", date: "2025.11.01 ~ 2026.01.31", location: "충무아트센터", price: "60,000원~", category: "뮤지컬", capacity: 1000, hostName: "CJ ENM", detail: "브로드웨이에서 가장 사랑받는 뮤지컬 위키드가 한국을 찾습니다. 오즈의 마법사에 등장하는 착한 마녀 글린다와 나쁜 마녀 엘파바의 우정 이야기를 화려한 무대와 감동적인 음악으로 만나보세요." },
    { id: 6, title: "록 페스티벌 2025", desc: "국내외 록밴드가 총출동하는 야외 록 페스티벌", date: "2025.10.18 ~ 10.19", location: "난지한강공원", price: "110,000원~", category: "페스티벌", capacity: 8000, hostName: "록페스티벌조직위", detail: "가을의 한강공원에서 펼쳐지는 국내 최대 록 페스티벌! 국내외 유명 록밴드의 열정적인 라이브 공연과 함께 잊을 수 없는 이틀을 보내세요." },
    { id: 7, title: "연극 햄릿", desc: "셰익스피어 4대 비극 중 하나인 햄릿의 현대적 재해석", date: "2025.11.15 ~ 12.15", location: "대학로 아트원씨어터", price: "45,000원~", category: "연극", capacity: 300, hostName: "극단 미진", detail: "셰익스피어의 4대 비극 중 하나인 햄릿을 현대적으로 재해석한 연극입니다. 복수와 광기, 인간 존재의 의미를 묻는 깊은 이야기를 대학로 소극장의 밀도 높은 무대에서 경험하세요." },
    { id: 8, title: "크리스마스 오케스트라", desc: "겨울밤을 따뜻하게 물들이는 크리스마스 특별 오케스트라 공연", date: "2025.12.24", location: "세종문화회관", price: "55,000원~", category: "클래식", capacity: 3000, hostName: "서울필하모닉", detail: "크리스마스 이브에 펼쳐지는 특별한 오케스트라 공연! 캐롤, 영화음악, 클래식 명곡을 한 무대에서 만나보세요. 소중한 사람과 함께하는 따뜻한 겨울밤을 선사합니다." },
    { id: 9, title: "BTS 월드투어 서울", desc: "BTS가 돌아왔다! 서울 스타디움 단독 콘서트", date: "2025.12.01 ~ 12.02", location: "서울월드컵경기장", price: "154,000원~", category: "콘서트", capacity: 60000, hostName: "HYBE", detail: "전 세계를 열광시키는 BTS의 월드투어 서울 공연! 최신 곡부터 클래식 히트곡까지, 압도적인 스케일의 무대를 서울월드컵경기장에서 만나보세요." },
    { id: 10, title: "뮤지컬 레미제라블", desc: "혁명과 사랑, 인간 존엄의 이야기를 담은 뮤지컬의 정수", date: "2026.01.10 ~ 03.31", location: "블루스퀘어", price: "80,000원~", category: "뮤지컬", capacity: 1200, hostName: "EMK뮤지컬컴퍼니", detail: "빅토르 위고의 원작을 바탕으로 한 세계 최고의 뮤지컬 레미제라블! 혁명의 열기 속에서 피어나는 사랑과 희생의 이야기를 웅장한 음악과 함께 경험하세요." },
    { id: 11, title: "연극 맥베스", desc: "야망과 광기의 이야기, 셰익스피어 맥베스의 새로운 해석", date: "2026.02.01 ~ 02.28", location: "국립극장", price: "40,000원~", category: "연극", capacity: 500, hostName: "국립극단", detail: "셰익스피어의 맥베스를 국립극단이 새롭게 해석합니다. 권력을 향한 야망과 그에 따르는 파멸을 강렬한 연기와 무대 미술로 표현한 작품입니다." },
    { id: 12, title: "스프링 뮤직 페스티벌", desc: "봄을 맞이하는 다채로운 장르의 음악 축제", date: "2026.04.05 ~ 04.06", location: "올림픽공원", price: "88,000원~", category: "페스티벌", capacity: 6000, hostName: "봄축제위원회", detail: "봄의 시작을 알리는 다채로운 음악 축제! 팝, 록, 인디, 일렉트로닉 등 다양한 장르의 아티스트가 총출동합니다. 올림픽공원의 아름다운 자연 속에서 봄의 에너지를 느껴보세요." },
];

const EventDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const event = eventsData.find(e => e.id === Number(id));

    if (!event) {
        return (
            <div className="detail-page">
                <div className="detail-not-found">
                    <h2>이벤트를 찾을 수 없습니다</h2>
                    <Link to="/events" className="back-link">목록으로 돌아가기</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="detail-page">
            {/* 배너 */}
            <div className="detail-banner">
                <div className="detail-banner-pattern" />
                <div className="detail-banner-content">
                    <span className="detail-category">{event.category}</span>
                    <h1 className="detail-title">{event.title}</h1>
                    <p className="detail-subtitle">{event.desc}</p>
                </div>
            </div>

            <div className="detail-container">
                {/* 뒤로 가기 */}
                <button className="detail-back" onClick={() => navigate(-1)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                    </svg>
                    목록으로
                </button>

                <div className="detail-content">
                    {/* 왼쪽: 상세 정보 */}
                    <main className="detail-main">
                        <div className="detail-card">
                            <h2 className="detail-section-title">공연 소개</h2>
                            <p className="detail-description">{event.detail}</p>
                        </div>

                        <div className="detail-card">
                            <h2 className="detail-section-title">공연 정보</h2>
                            <div className="detail-info-grid">
                                <div className="detail-info-item">
                                    <div className="detail-info-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="detail-info-label">일정</span>
                                        <span className="detail-info-value">{event.date}</span>
                                    </div>
                                </div>
                                <div className="detail-info-item">
                                    <div className="detail-info-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="detail-info-label">장소</span>
                                        <span className="detail-info-value">{event.location}</span>
                                    </div>
                                </div>
                                <div className="detail-info-item">
                                    <div className="detail-info-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="detail-info-label">수용 인원</span>
                                        <span className="detail-info-value">{event.capacity.toLocaleString()}명</span>
                                    </div>
                                </div>
                                <div className="detail-info-item">
                                    <div className="detail-info-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="detail-info-label">주최</span>
                                        <span className="detail-info-value">{event.hostName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* 오른쪽: 예매 카드 */}
                    <aside className="detail-sidebar">
                        <div className="booking-card">
                            <div className="booking-price-label">가격</div>
                            <div className="booking-price">{event.price}</div>
                            <div className="booking-divider" />
                            <div className="booking-info">
                                <div className="booking-info-row">
                                    <span>카테고리</span>
                                    <span>{event.category}</span>
                                </div>
                                <div className="booking-info-row">
                                    <span>장소</span>
                                    <span>{event.location}</span>
                                </div>
                                <div className="booking-info-row">
                                    <span>일정</span>
                                    <span>{event.date}</span>
                                </div>
                            </div>
                            <button className="booking-btn">예매하기</button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
