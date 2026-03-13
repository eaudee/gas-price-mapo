// Leaflet + OpenStreetMap 지도 로직 (100% 무료, API 키 불필요)
let leafletMap = null;
let markers = [];
let activePopup = null;

// 구별 중심 좌표
const GU_CENTER = {
    all:     [37.5665, 126.9780, 12],
    강남구:  [37.4979, 127.0276, 14],
    강동구:  [37.5301, 127.1238, 14],
    강북구:  [37.6396, 127.0253, 14],
    강서구:  [37.5510, 126.8495, 14],
    관악구:  [37.4784, 126.9516, 14],
    광진구:  [37.5384, 127.0822, 14],
    구로구:  [37.4954, 126.8874, 14],
    금천구:  [37.4600, 126.9001, 14],
    노원구:  [37.6542, 127.0568, 14],
    도봉구:  [37.6688, 127.0471, 14],
    동대문구:[37.5744, 127.0398, 14],
    동작구:  [37.5124, 126.9393, 14],
    마포구:  [37.5565, 126.9220, 14],
    서대문구:[37.5791, 126.9368, 14],
    서초구:  [37.4837, 127.0324, 14],
    성동구:  [37.5633, 127.0371, 14],
    성북구:  [37.5894, 127.0167, 14],
    송파구:  [37.5145, 127.1059, 14],
    양천구:  [37.5270, 126.8561, 14],
    영등포구:[37.5264, 126.8963, 14],
    용산구:  [37.5323, 126.9904, 14],
    은평구:  [37.6027, 126.9291, 14],
    종로구:  [37.5730, 126.9794, 14],
    중구:    [37.5641, 126.9979, 14],
    중랑구:  [37.6066, 127.0927, 14]
};

function initMap() {
    const container = document.getElementById('map');
    if (!container) return;

    // 서울 전체 중심 좌표
    leafletMap = L.map('map').setView([37.5665, 126.9780], 12);

    // OpenStreetMap 타일 (무료)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(leafletMap);
}

function focusGu(gu) {
    if (!leafletMap) return;
    const center = GU_CENTER[gu] || GU_CENTER['all'];
    leafletMap.flyTo([center[0], center[1]], center[2], { animate: true, duration: 0.8 });
}

function addMarkers(stations) {
    clearMarkers();
    if (stations.length === 0) return;

    const lowestPrice = Math.min(...stations.map(s => s.price));

    stations.forEach((station) => {
        const isCheapest = station.price === lowestPrice;

        // 커스텀 아이콘 (최저가는 녹색, 나머지는 파란색)
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="
                background: ${isCheapest ? '#16a34a' : '#2563eb'};
                color: white;
                padding: 4px 8px;
                border-radius: 8px;
                font-size: 12px;
                font-weight: 700;
                white-space: nowrap;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                border: 2px solid white;
                text-align: center;
            ">${station.price.toLocaleString()}원</div>`,
            iconSize: [80, 30],
            iconAnchor: [40, 30],
            popupAnchor: [0, -30]
        });

        const marker = L.marker([station.lat, station.lng], { icon: icon }).addTo(leafletMap);

        // 팝업 내용
        const popupContent = `
            <div style="font-size:13px;min-width:180px;line-height:1.6;">
                <strong style="font-size:14px;color:#1e293b;">${station.name}</strong><br>
                <span style="color:#64748b;">${station.address}</span><br>
                <span style="font-size:18px;font-weight:700;color:${isCheapest ? '#16a34a' : '#2563eb'};">
                    ${station.price.toLocaleString()}원
                </span>
                <span style="font-size:12px;color:#94a3b8;">/L</span>
                ${isCheapest ? '<br><span style="color:#16a34a;font-size:12px;font-weight:600;">★ 최저가</span>' : ''}
            </div>
        `;

        marker.bindPopup(popupContent);
        marker.stationId = station.id;
        markers.push(marker);
    });
}

function clearMarkers() {
    markers.forEach(marker => leafletMap.removeLayer(marker));
    markers = [];
    activePopup = null;
}

function panToStation(station) {
    if (!leafletMap) return;
    leafletMap.setView([station.lat, station.lng], 16, { animate: true });

    // 해당 마커의 팝업 열기
    const marker = markers.find(m => m.stationId === station.id);
    if (marker) {
        marker.openPopup();
    }
}

// app.js와의 호환성을 위한 헬퍼
let getCurrentFilteredStations = () => [];
function setFilteredStationsGetter(fn) {
    getCurrentFilteredStations = fn;
}
