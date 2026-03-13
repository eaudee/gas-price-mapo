// Leaflet + OpenStreetMap 지도 로직 (100% 무료, API 키 불필요)
let leafletMap = null;
let markers = [];
let activePopup = null;

function initMap() {
    const container = document.getElementById('map');
    if (!container) return;

    // 마포구 중심 좌표
    leafletMap = L.map('map').setView([37.5565, 126.9220], 14);

    // OpenStreetMap 타일 (무료)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(leafletMap);
}

function addMarkers(stations) {
    clearMarkers();

    const lowestPrice = Math.min(...stations.map(s => s.price));

    stations.forEach((station, idx) => {
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
