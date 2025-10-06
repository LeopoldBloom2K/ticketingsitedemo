import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
    // .env 파일에 정의한 환경 변수를 사용합니다.
    baseURL: import.meta.env.VITE_API_BASE_URL, 
    
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiClient;