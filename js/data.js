// 마포구 주유소 샘플 데이터
// 나중에 OPINET API로 교체할 때 이 파일의 getStations() 함수만 수정하면 됩니다.

const SAMPLE_STATIONS = [
    { id: 1, name: "GS칼텍스 마포대로점", address: "서울 마포구 마포대로 33", lat: 37.5393, lng: 126.9468, price: 1648, type: "self" },
    { id: 2, name: "SK에너지 공덕점", address: "서울 마포구 백범로 23", lat: 37.5438, lng: 126.9516, price: 1659, type: "full" },
    { id: 3, name: "현대오일뱅크 홍대점", address: "서울 마포구 양화로 45", lat: 37.5563, lng: 126.9236, price: 1635, type: "self" },
    { id: 4, name: "S-OIL 상암점", address: "서울 마포구 월드컵북로 396", lat: 37.5783, lng: 126.8912, price: 1672, type: "full" },
    { id: 5, name: "GS칼텍스 망원점", address: "서울 마포구 망원로 55", lat: 37.5558, lng: 126.9094, price: 1641, type: "self" },
    { id: 6, name: "SK에너지 연남셀프점", address: "서울 마포구 연남로 67", lat: 37.5667, lng: 126.9258, price: 1629, type: "self" },
    { id: 7, name: "현대오일뱅크 마포점", address: "서울 마포구 도화길 12", lat: 37.5395, lng: 126.9485, price: 1668, type: "full" },
    { id: 8, name: "GS칼텍스 성산셀프점", address: "서울 마포구 성산로 120", lat: 37.5665, lng: 126.9102, price: 1638, type: "self" },
    { id: 9, name: "S-OIL 합정점", address: "서울 마포구 양화로 160", lat: 37.5496, lng: 126.9134, price: 1655, type: "full" },
    { id: 10, name: "SK에너지 서교셀프점", address: "서울 마포구 서교동 393", lat: 37.5530, lng: 126.9215, price: 1632, type: "self" },
    { id: 11, name: "현대오일뱅크 상암월드컵점", address: "서울 마포구 월드컵로 240", lat: 37.5768, lng: 126.8985, price: 1661, type: "full" },
    { id: 12, name: "GS칼텍스 대흥셀프점", address: "서울 마포구 대흥로 20", lat: 37.5477, lng: 126.9433, price: 1644, type: "self" },
    { id: 13, name: "S-OIL 마포역점", address: "서울 마포구 마포대로 150", lat: 37.5394, lng: 126.9462, price: 1670, type: "full" },
    { id: 14, name: "SK에너지 상수점", address: "서울 마포구 독막로 85", lat: 37.5476, lng: 126.9227, price: 1649, type: "self" },
    { id: 15, name: "GS칼텍스 연희셀프점", address: "서울 마포구 연희로 150", lat: 37.5685, lng: 126.9345, price: 1636, type: "self" },
    { id: 16, name: "현대오일뱅크 신수점", address: "서울 마포구 신수로 40", lat: 37.5442, lng: 126.9365, price: 1658, type: "full" },
    { id: 17, name: "S-OIL 서강셀프점", address: "서울 마포구 서강로 100", lat: 37.5510, lng: 126.9380, price: 1640, type: "self" },
    { id: 18, name: "SK에너지 월드컵점", address: "서울 마포구 월드컵로 32길 18", lat: 37.5630, lng: 126.9070, price: 1665, type: "full" }
];

// 최근 7일 가격 추이 샘플 데이터
const PRICE_TREND = {
    labels: ['3/6', '3/7', '3/8', '3/9', '3/10', '3/11', '3/12'],
    mapo: [1652, 1649, 1651, 1648, 1650, 1647, 1649],
    seoul: [1665, 1662, 1664, 1660, 1663, 1659, 1661]
};

// 데이터 가져오기 함수 (나중에 OPINET API로 교체)
function getStations() {
    // TODO: OPINET API 연동 시 아래처럼 변경
    // const response = await fetch(`https://www.opinet.co.kr/api/...?code=YOUR_API_KEY`);
    // const data = await response.json();
    // return data.RESULT.OIL;
    return SAMPLE_STATIONS;
}

function getPriceTrend() {
    // TODO: OPINET API 연동 시 실제 데이터로 교체
    return PRICE_TREND;
}
