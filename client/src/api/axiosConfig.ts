import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
    // .env 파일에 정의한 환경 변수를 사용합니다.
    baseURL: import.meta.env.VITE_API_BASE_URL, 
    
    headers: {
        'Content-Type': 'application/json',
    }
});

// 요청 인터셉터 추가: API 요청을 보내기 전에 토큰을 헤더에 추가합니다.
apiClient.interceptors.request.use(
    (config) => {
        // localStorage에서 토큰을 가져옵니다.
        const token = localStorage.getItem('token');
        
        // 토큰이 있으면 Authorization 헤더에 추가합니다.
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        // 요청 오류 처리
        return Promise.reject(error);
    }
);

export default apiClient;