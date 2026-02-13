import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/axiosConfig";
import "../style-components/Mypage.css";

interface UserInfo {
    name: string;
    email: string;
    role: string;
}

interface Application {
    app_id: number;
    reason: string;
    status: string;
    created_at: string;
}

// UTF-8 안전한 JWT 디코딩
const decodeJwtPayload = (token: string) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    const decoded = new TextDecoder("utf-8").decode(bytes);
    return JSON.parse(decoded);
};

const Mypage = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [applications, setApplications] = useState<Application[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [passwords, setPasswords] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }

        try {
            const payload = decodeJwtPayload(token);
            setUserInfo({
                name: payload.name || "",
                email: payload.sub || "",
                role: payload.role || "USER",
            });
        } catch {
            alert("유효하지 않은 토큰입니다.");
            localStorage.removeItem("token");
            navigate("/login");
            return;
        }

        apiClient.get("/host-application/my")
            .then(res => {
                if (Array.isArray(res.data)) {
                    setApplications(res.data);
                }
            })
            .catch(() => {});
    }, [navigate]);

    const getRoleLabel = (role: string) => {
        switch (role) {
            case "ADMIN": return "관리자";
            case "HOST": return "호스트";
            default: return "일반 사용자";
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case "APPROVED": return "승인";
            case "REJECTED": return "거절";
            case "PENDING": return "대기중";
            default: return status;
        }
    };

    const getStatusClass = (status: string) => {
        switch (status) {
            case "APPROVED": return "status-approved";
            case "REJECTED": return "status-rejected";
            case "PENDING": return "status-pending";
            default: return "";
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setPasswords(prev => ({ ...prev, [id]: value }));
    };

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (passwords.newPassword !== passwords.confirmNewPassword) {
            alert("새 비밀번호가 일치하지 않습니다.");
            return;
        }
        try {
            await apiClient.post("/auth/change-password", {
                currentPassword: passwords.currentPassword,
                newPassword: passwords.newPassword,
            });
            alert("비밀번호가 변경되었습니다.");
            setIsEditing(false);
            setPasswords({ currentPassword: "", newPassword: "", confirmNewPassword: "" });
        } catch (error: any) {
            alert(`비밀번호 변경 실패: ${error.response?.data || error.message}`);
        }
    };

    if (!userInfo) return null;

    return (
        <div className="mypage-container">
            {/* 상단 배너 */}
            <div className="mypage-banner">
                <div className="banner-pattern" />
                <h1 className="banner-title">마이페이지</h1>
            </div>

            <div className="mypage-content">
                {/* 왼쪽: 프로필 카드 */}
                <aside className="mypage-sidebar">
                    <div className="profile-card">
                        <div className="profile-avatar">
                            {userInfo.name.charAt(0)}
                        </div>
                        <h2 className="profile-name">{userInfo.name}</h2>
                        <span className="profile-role">{getRoleLabel(userInfo.role)}</span>

                        <div className="profile-details">
                            <div className="detail-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                                <span>{userInfo.email}</span>
                            </div>
                            <div className="detail-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                                <span>{getRoleLabel(userInfo.role)}</span>
                            </div>
                        </div>

                        <button
                            className={`action-btn ${isEditing ? "action-btn-cancel" : ""}`}
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {isEditing ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18"/>
                                        <line x1="6" y1="6" x2="18" y2="18"/>
                                    </>
                                ) : (
                                    <>
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                    </>
                                )}
                            </svg>
                            {isEditing ? "취소" : "비밀번호 변경"}
                        </button>

                        {isEditing && (
                            <form className="password-form" onSubmit={handlePasswordSubmit}>
                                <div className="input-group">
                                    <label htmlFor="currentPassword">현재 비밀번호</label>
                                    <input
                                        type="password"
                                        id="currentPassword"
                                        placeholder="현재 비밀번호를 입력하세요"
                                        value={passwords.currentPassword}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="newPassword">새 비밀번호</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        placeholder="새 비밀번호를 입력하세요"
                                        value={passwords.newPassword}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="confirmNewPassword">새 비밀번호 확인</label>
                                    <input
                                        type="password"
                                        id="confirmNewPassword"
                                        placeholder="새 비밀번호를 다시 입력하세요"
                                        value={passwords.confirmNewPassword}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="submit-btn">변경하기</button>
                            </form>
                        )}
                    </div>
                </aside>

                {/* 오른쪽: 신청현황 */}
                <main className="mypage-main">
                    <div className="main-card">
                        <div className="section-header">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                            </svg>
                            <h3 className="section-title">신청현황</h3>
                        </div>

                        {applications.length === 0 ? (
                            <div className="empty-state">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                    <line x1="9" y1="15" x2="15" y2="15"/>
                                </svg>
                                <p className="empty-message">신청 내역이 없습니다</p>
                            </div>
                        ) : (
                            <div className="application-list">
                                {applications.map(app => (
                                    <div key={app.app_id} className="application-item">
                                        <div className="application-info">
                                            <span className="application-reason">{app.reason}</span>
                                            <span className="application-date">
                                                {new Date(app.created_at).toLocaleDateString("ko-KR")}
                                            </span>
                                        </div>
                                        <span className={`application-status ${getStatusClass(app.status)}`}>
                                            {getStatusLabel(app.status)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Mypage;
