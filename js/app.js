// 메인 앱 로직
let currentStations = [];

document.addEventListener('DOMContentLoaded', function () {
    // 초기화
    currentStations = getStations();
    renderStations(currentStations);
    updateSummary(currentStations);
    initMap();
    addMarkers(currentStations);
    setFilteredStationsGetter(() => currentStations);
    initChart();

    // 이벤트 리스너
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('sortSelect').addEventListener('change', applyFilters);
    document.getElementById('typeFilter').addEventListener('change', applyFilters);

    // 모바일 탭 전환
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const tab = this.dataset.tab;
            const list = document.getElementById('stationList');
            const map = document.getElementById('mapSection');

            if (tab === 'list') {
                list.classList.remove('hide');
                map.classList.remove('show');
            } else {
                list.classList.add('hide');
                map.classList.add('show');
                // Leaflet 지도 리사이즈
                if (leafletMap) {
                    setTimeout(() => leafletMap.invalidateSize(), 100);
                }
            }
        });
    });
});

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const sortBy = document.getElementById('sortSelect').value;
    const typeFilter = document.getElementById('typeFilter').value;

    let filtered = getStations();

    // 이름 검색
    if (searchTerm) {
        filtered = filtered.filter(s =>
            s.name.toLowerCase().includes(searchTerm) ||
            s.address.toLowerCase().includes(searchTerm)
        );
    }

    // 유형 필터
    if (typeFilter !== 'all') {
        filtered = filtered.filter(s => s.type === typeFilter);
    }

    // 정렬
    switch (sortBy) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
            break;
    }

    currentStations = filtered;
    renderStations(filtered);
    updateSummary(filtered);

    // 지도 마커 업데이트
    if (leafletMap) {
        addMarkers(filtered);
        setFilteredStationsGetter(() => filtered);
    }
}

function renderStations(stations) {
    const container = document.getElementById('stationList');

    if (stations.length === 0) {
        container.innerHTML = '<div class="no-results">검색 결과가 없습니다.</div>';
        return;
    }

    const lowestPrice = Math.min(...stations.map(s => s.price));

    container.innerHTML = stations.map(station => {
        const isCheapest = station.price === lowestPrice;
        const diff = station.price - lowestPrice;

        return `
            <div class="station-card ${isCheapest ? 'cheapest' : ''}"
                 data-id="${station.id}"
                 onclick="onStationClick(${station.id})">
                <div class="card-header">
                    <span class="station-name">${station.name}</span>
                    <span class="station-type ${station.type}">
                        ${station.type === 'self' ? '셀프' : '일반'}
                    </span>
                </div>
                <div class="station-address">${station.address}</div>
                <div class="card-footer">
                    <span class="price">
                        ${station.price.toLocaleString()}<span>원/L</span>
                    </span>
                    <span class="price-diff ${isCheapest ? 'cheapest-badge' : 'positive'}">
                        ${isCheapest ? '★ 최저가' : `+${diff}원`}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

function updateSummary(stations) {
    document.getElementById('stationCount').textContent = `${stations.length}개 주유소`;

    if (stations.length > 0) {
        const lowest = Math.min(...stations.map(s => s.price));
        const avg = Math.round(stations.reduce((sum, s) => sum + s.price, 0) / stations.length);
        document.getElementById('lowestPrice').textContent = lowest.toLocaleString();
        document.getElementById('avgPrice').textContent = avg.toLocaleString();
    } else {
        document.getElementById('lowestPrice').textContent = '-';
        document.getElementById('avgPrice').textContent = '-';
    }
}

function onStationClick(id) {
    const station = currentStations.find(s => s.id === id);
    if (!station) return;

    // 카드 활성화
    document.querySelectorAll('.station-card').forEach(card => {
        card.classList.remove('active');
    });
    const card = document.querySelector(`.station-card[data-id="${id}"]`);
    if (card) card.classList.add('active');

    // 지도로 이동
    if (leafletMap) {
        panToStation(station);
    }

    // 모바일에서 지도 탭으로 자동 전환
    if (window.innerWidth <= 768) {
        const mapTab = document.querySelector('.tab-btn[data-tab="map"]');
        if (mapTab) mapTab.click();
    }
}
