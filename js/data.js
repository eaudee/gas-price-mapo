// 서울 전 지역 주유소 샘플 데이터
// 나중에 OPINET API로 교체할 때 이 파일의 getStations() 함수만 수정하면 됩니다.

const SAMPLE_STATIONS = [
    // 마포구
    { id: 1,   gu: "마포구", name: "GS칼텍스 마포대로점",     address: "서울 마포구 마포대로 33",          lat: 37.5393, lng: 126.9468, price: 1648, type: "self" },
    { id: 2,   gu: "마포구", name: "SK에너지 공덕점",          address: "서울 마포구 백범로 23",            lat: 37.5438, lng: 126.9516, price: 1659, type: "full" },
    { id: 3,   gu: "마포구", name: "현대오일뱅크 홍대점",      address: "서울 마포구 양화로 45",            lat: 37.5563, lng: 126.9236, price: 1635, type: "self" },
    { id: 4,   gu: "마포구", name: "S-OIL 상암점",             address: "서울 마포구 월드컵북로 396",       lat: 37.5783, lng: 126.8912, price: 1672, type: "full" },
    { id: 5,   gu: "마포구", name: "GS칼텍스 망원점",          address: "서울 마포구 망원로 55",            lat: 37.5558, lng: 126.9094, price: 1641, type: "self" },
    { id: 6,   gu: "마포구", name: "SK에너지 연남셀프점",      address: "서울 마포구 연남로 67",            lat: 37.5667, lng: 126.9258, price: 1629, type: "self" },
    // 강남구
    { id: 101, gu: "강남구", name: "GS칼텍스 강남대로점",     address: "서울 강남구 강남대로 212",         lat: 37.4981, lng: 127.0276, price: 1689, type: "full" },
    { id: 102, gu: "강남구", name: "SK에너지 역삼셀프점",      address: "서울 강남구 역삼로 152",           lat: 37.4992, lng: 127.0370, price: 1668, type: "self" },
    { id: 103, gu: "강남구", name: "현대오일뱅크 압구정점",    address: "서울 강남구 압구정로 30",          lat: 37.5270, lng: 127.0287, price: 1695, type: "full" },
    { id: 104, gu: "강남구", name: "S-OIL 도곡셀프점",         address: "서울 강남구 도곡로 231",           lat: 37.4868, lng: 127.0473, price: 1674, type: "self" },
    { id: 105, gu: "강남구", name: "GS칼텍스 삼성점",          address: "서울 강남구 삼성로 212",           lat: 37.5088, lng: 127.0630, price: 1682, type: "full" },
    // 강동구
    { id: 201, gu: "강동구", name: "SK에너지 천호점",          address: "서울 강동구 천호대로 1175",        lat: 37.5385, lng: 127.1236, price: 1651, type: "self" },
    { id: 202, gu: "강동구", name: "GS칼텍스 길동점",          address: "서울 강동구 천호대로 1025",        lat: 37.5321, lng: 127.1298, price: 1664, type: "full" },
    { id: 203, gu: "강동구", name: "현대오일뱅크 강동점",      address: "서울 강동구 올림픽로 776",         lat: 37.5267, lng: 127.1355, price: 1643, type: "self" },
    { id: 204, gu: "강동구", name: "S-OIL 명일셀프점",         address: "서울 강동구 명일로 97",            lat: 37.5458, lng: 127.1190, price: 1659, type: "self" },
    // 강북구
    { id: 301, gu: "강북구", name: "GS칼텍스 수유점",          address: "서울 강북구 한천로 900",           lat: 37.6390, lng: 127.0240, price: 1637, type: "self" },
    { id: 302, gu: "강북구", name: "SK에너지 미아셀프점",      address: "서울 강북구 도봉로 389",           lat: 37.6288, lng: 127.0269, price: 1625, type: "self" },
    { id: 303, gu: "강북구", name: "현대오일뱅크 번동점",      address: "서울 강북구 번동로 55",            lat: 37.6412, lng: 127.0317, price: 1648, type: "full" },
    { id: 304, gu: "강북구", name: "S-OIL 인수점",             address: "서울 강북구 인수봉로 145",         lat: 37.6340, lng: 127.0151, price: 1661, type: "full" },
    // 강서구
    { id: 401, gu: "강서구", name: "SK에너지 화곡셀프점",      address: "서울 강서구 화곡로 168",           lat: 37.5471, lng: 126.8493, price: 1633, type: "self" },
    { id: 402, gu: "강서구", name: "GS칼텍스 발산점",          address: "서울 강서구 공항대로 452",         lat: 37.5596, lng: 126.8389, price: 1645, type: "full" },
    { id: 403, gu: "강서구", name: "현대오일뱅크 방화점",      address: "서울 강서구 방화대로 174",         lat: 37.5660, lng: 126.8254, price: 1628, type: "self" },
    { id: 404, gu: "강서구", name: "S-OIL 마곡셀프점",         address: "서울 강서구 마곡중앙로 100",       lat: 37.5604, lng: 126.8355, price: 1657, type: "self" },
    // 관악구
    { id: 501, gu: "관악구", name: "GS칼텍스 신림셀프점",      address: "서울 관악구 신림로 300",           lat: 37.4846, lng: 126.9248, price: 1638, type: "self" },
    { id: 502, gu: "관악구", name: "SK에너지 봉천점",          address: "서울 관악구 봉천로 470",           lat: 37.4765, lng: 126.9521, price: 1652, type: "full" },
    { id: 503, gu: "관악구", name: "현대오일뱅크 낙성대점",    address: "서울 관악구 남부순환로 1700",      lat: 37.4780, lng: 126.9634, price: 1641, type: "self" },
    { id: 504, gu: "관악구", name: "S-OIL 서울대점",           address: "서울 관악구 관악로 1",             lat: 37.4813, lng: 126.9527, price: 1667, type: "full" },
    // 광진구
    { id: 601, gu: "광진구", name: "SK에너지 건대점",          address: "서울 광진구 능동로 120",           lat: 37.5409, lng: 127.0703, price: 1655, type: "self" },
    { id: 602, gu: "광진구", name: "GS칼텍스 자양셀프점",      address: "서울 광진구 자양로 159",           lat: 37.5367, lng: 127.0786, price: 1643, type: "self" },
    { id: 603, gu: "광진구", name: "현대오일뱅크 구의점",      address: "서울 광진구 강변북로 36",          lat: 37.5332, lng: 127.0852, price: 1669, type: "full" },
    { id: 604, gu: "광진구", name: "S-OIL 중곡셀프점",         address: "서울 광진구 중곡동 89-1",          lat: 37.5495, lng: 127.0761, price: 1648, type: "self" },
    // 구로구
    { id: 701, gu: "구로구", name: "GS칼텍스 구로디지털점",    address: "서울 구로구 디지털로 300",         lat: 37.4853, lng: 126.9013, price: 1636, type: "self" },
    { id: 702, gu: "구로구", name: "SK에너지 오류점",          address: "서울 구로구 오류로 70",            lat: 37.4994, lng: 126.8590, price: 1621, type: "self" },
    { id: 703, gu: "구로구", name: "현대오일뱅크 신도림점",    address: "서울 구로구 경인로 661",           lat: 37.5082, lng: 126.8897, price: 1648, type: "full" },
    { id: 704, gu: "구로구", name: "S-OIL 개봉셀프점",         address: "서울 구로구 개봉로 130",           lat: 37.4969, lng: 126.8699, price: 1639, type: "self" },
    // 금천구
    { id: 801, gu: "금천구", name: "SK에너지 시흥점",          address: "서울 금천구 시흥대로 73",          lat: 37.4611, lng: 126.9000, price: 1628, type: "self" },
    { id: 802, gu: "금천구", name: "GS칼텍스 독산셀프점",      address: "서울 금천구 독산로 331",           lat: 37.4668, lng: 126.9006, price: 1640, type: "self" },
    { id: 803, gu: "금천구", name: "현대오일뱅크 가산점",      address: "서울 금천구 가산디지털2로 115",    lat: 37.4788, lng: 126.8838, price: 1653, type: "full" },
    // 노원구
    { id: 901, gu: "노원구", name: "GS칼텍스 상계셀프점",      address: "서울 노원구 동일로 1485",          lat: 37.6559, lng: 127.0638, price: 1641, type: "self" },
    { id: 902, gu: "노원구", name: "SK에너지 중계점",          address: "서울 노원구 노원로 360",           lat: 37.6348, lng: 127.0701, price: 1629, type: "self" },
    { id: 903, gu: "노원구", name: "현대오일뱅크 공릉점",      address: "서울 노원구 공릉로 232",           lat: 37.6221, lng: 127.0732, price: 1656, type: "full" },
    { id: 904, gu: "노원구", name: "S-OIL 월계셀프점",         address: "서울 노원구 월계로 420",           lat: 37.6402, lng: 127.0576, price: 1645, type: "self" },
    // 도봉구
    { id: 1001, gu: "도봉구", name: "SK에너지 창동점",         address: "서울 도봉구 노해로 403",           lat: 37.6524, lng: 127.0487, price: 1633, type: "self" },
    { id: 1002, gu: "도봉구", name: "GS칼텍스 방학셀프점",     address: "서울 도봉구 방학로 174",           lat: 37.6683, lng: 127.0441, price: 1618, type: "self" },
    { id: 1003, gu: "도봉구", name: "현대오일뱅크 도봉점",     address: "서울 도봉구 도봉로 177",           lat: 37.6752, lng: 127.0450, price: 1647, type: "full" },
    // 동대문구
    { id: 1101, gu: "동대문구", name: "GS칼텍스 회기셀프점",   address: "서울 동대문구 회기로 57",          lat: 37.5897, lng: 127.0594, price: 1643, type: "self" },
    { id: 1102, gu: "동대문구", name: "SK에너지 장안점",       address: "서울 동대문구 장안동 355",         lat: 37.5698, lng: 127.0594, price: 1631, type: "self" },
    { id: 1103, gu: "동대문구", name: "현대오일뱅크 청량리점", address: "서울 동대문구 왕산로 52",          lat: 37.5797, lng: 127.0463, price: 1658, type: "full" },
    { id: 1104, gu: "동대문구", name: "S-OIL 전농셀프점",      address: "서울 동대문구 전농로 95",          lat: 37.5748, lng: 127.0515, price: 1649, type: "self" },
    // 동작구
    { id: 1201, gu: "동작구", name: "SK에너지 사당셀프점",     address: "서울 동작구 동작대로 155",         lat: 37.4760, lng: 126.9812, price: 1638, type: "self" },
    { id: 1202, gu: "동작구", name: "GS칼텍스 노량진점",       address: "서울 동작구 노량진로 61",          lat: 37.5107, lng: 126.9439, price: 1650, type: "full" },
    { id: 1203, gu: "동작구", name: "현대오일뱅크 상도점",     address: "서울 동작구 상도로 355",           lat: 37.4934, lng: 126.9532, price: 1642, type: "self" },
    { id: 1204, gu: "동작구", name: "S-OIL 흑석셀프점",        address: "서울 동작구 서달로 120",           lat: 37.5046, lng: 126.9629, price: 1661, type: "self" },
    // 서대문구
    { id: 1301, gu: "서대문구", name: "GS칼텍스 연세셀프점",   address: "서울 서대문구 신촌로 180",         lat: 37.5596, lng: 126.9385, price: 1634, type: "self" },
    { id: 1302, gu: "서대문구", name: "SK에너지 홍은점",       address: "서울 서대문구 통일로 477",         lat: 37.5889, lng: 126.9359, price: 1622, type: "self" },
    { id: 1303, gu: "서대문구", name: "현대오일뱅크 남가좌점", address: "서울 서대문구 성산로 572",         lat: 37.5758, lng: 126.9204, price: 1649, type: "full" },
    { id: 1304, gu: "서대문구", name: "S-OIL 북아현점",        address: "서울 서대문구 경기대로 26",        lat: 37.5584, lng: 126.9551, price: 1663, type: "full" },
    // 서초구
    { id: 1401, gu: "서초구", name: "SK에너지 서초셀프점",     address: "서울 서초구 서초대로 396",         lat: 37.4835, lng: 127.0093, price: 1671, type: "self" },
    { id: 1402, gu: "서초구", name: "GS칼텍스 방배점",         address: "서울 서초구 방배로 201",           lat: 37.4801, lng: 126.9913, price: 1683, type: "full" },
    { id: 1403, gu: "서초구", name: "현대오일뱅크 반포점",     address: "서울 서초구 반포대로 256",         lat: 37.5046, lng: 127.0047, price: 1678, type: "full" },
    { id: 1404, gu: "서초구", name: "S-OIL 양재셀프점",        address: "서울 서초구 남부순환로 2574",      lat: 37.4799, lng: 127.0342, price: 1666, type: "self" },
    // 성동구
    { id: 1501, gu: "성동구", name: "GS칼텍스 왕십리셀프점",   address: "서울 성동구 왕십리로 216",         lat: 37.5618, lng: 127.0199, price: 1646, type: "self" },
    { id: 1502, gu: "성동구", name: "SK에너지 성수점",         address: "서울 성동구 아차산로 113",         lat: 37.5440, lng: 127.0571, price: 1633, type: "self" },
    { id: 1503, gu: "성동구", name: "현대오일뱅크 금호점",     address: "서울 성동구 금호로 150",           lat: 37.5539, lng: 127.0100, price: 1659, type: "full" },
    { id: 1504, gu: "성동구", name: "S-OIL 행당셀프점",        address: "서울 성동구 행당로 88",            lat: 37.5568, lng: 127.0290, price: 1641, type: "self" },
    // 성북구
    { id: 1601, gu: "성북구", name: "SK에너지 길음셀프점",     address: "서울 성북구 동소문로 68",          lat: 37.6007, lng: 127.0248, price: 1639, type: "self" },
    { id: 1602, gu: "성북구", name: "GS칼텍스 돈암점",         address: "서울 성북구 보문로 12",            lat: 37.5909, lng: 127.0278, price: 1651, type: "full" },
    { id: 1603, gu: "성북구", name: "현대오일뱅크 정릉점",     address: "서울 성북구 정릉로 140",           lat: 37.6126, lng: 127.0040, price: 1644, type: "self" },
    { id: 1604, gu: "성북구", name: "S-OIL 월곡셀프점",        address: "서울 성북구 동일로 166",           lat: 37.6048, lng: 127.0526, price: 1662, type: "self" },
    // 송파구
    { id: 1701, gu: "송파구", name: "GS칼텍스 잠실셀프점",     address: "서울 송파구 올림픽로 240",         lat: 37.5122, lng: 127.1006, price: 1676, type: "self" },
    { id: 1702, gu: "송파구", name: "SK에너지 문정점",         address: "서울 송파구 법원로 128",           lat: 37.4821, lng: 127.1222, price: 1658, type: "full" },
    { id: 1703, gu: "송파구", name: "현대오일뱅크 석촌점",     address: "서울 송파구 백제고분로 405",       lat: 37.5018, lng: 127.1071, price: 1669, type: "self" },
    { id: 1704, gu: "송파구", name: "S-OIL 가락셀프점",        address: "서울 송파구 오금로 200",           lat: 37.4959, lng: 127.1206, price: 1647, type: "self" },
    // 양천구
    { id: 1801, gu: "양천구", name: "SK에너지 목동셀프점",     address: "서울 양천구 목동동로 233",         lat: 37.5258, lng: 126.8746, price: 1644, type: "self" },
    { id: 1802, gu: "양천구", name: "GS칼텍스 신정점",         address: "서울 양천구 신정이펜1로 20",       lat: 37.5135, lng: 126.8683, price: 1656, type: "full" },
    { id: 1803, gu: "양천구", name: "현대오일뱅크 목1동점",    address: "서울 양천구 목동로 121",           lat: 37.5329, lng: 126.8779, price: 1637, type: "self" },
    { id: 1804, gu: "양천구", name: "S-OIL 신월셀프점",        address: "서울 양천구 신월로 386",           lat: 37.5214, lng: 126.8571, price: 1627, type: "self" },
    // 영등포구
    { id: 1901, gu: "영등포구", name: "GS칼텍스 여의도셀프점", address: "서울 영등포구 의사당대로 1",       lat: 37.5219, lng: 126.9267, price: 1668, type: "self" },
    { id: 1902, gu: "영등포구", name: "SK에너지 영등포점",     address: "서울 영등포구 경인로 851",         lat: 37.5195, lng: 126.9007, price: 1643, type: "full" },
    { id: 1903, gu: "영등포구", name: "현대오일뱅크 당산점",   address: "서울 영등포구 당산로 210",         lat: 37.5336, lng: 126.9012, price: 1635, type: "self" },
    { id: 1904, gu: "영등포구", name: "S-OIL 대림셀프점",      address: "서울 영등포구 도림로 153",         lat: 37.4941, lng: 126.8930, price: 1652, type: "self" },
    // 용산구
    { id: 2001, gu: "용산구", name: "SK에너지 이태원점",       address: "서울 용산구 이태원로 246",         lat: 37.5344, lng: 126.9946, price: 1674, type: "full" },
    { id: 2002, gu: "용산구", name: "GS칼텍스 한남셀프점",     address: "서울 용산구 독서당로 42",          lat: 37.5307, lng: 127.0024, price: 1661, type: "self" },
    { id: 2003, gu: "용산구", name: "현대오일뱅크 용산역점",   address: "서울 용산구 한강대로 23길 55",     lat: 37.5295, lng: 126.9648, price: 1679, type: "full" },
    { id: 2004, gu: "용산구", name: "S-OIL 후암셀프점",        address: "서울 용산구 두텁바위로 54",        lat: 37.5405, lng: 126.9747, price: 1655, type: "self" },
    // 은평구
    { id: 2101, gu: "은평구", name: "GS칼텍스 불광셀프점",     address: "서울 은평구 통일로 744",           lat: 37.6101, lng: 126.9280, price: 1631, type: "self" },
    { id: 2102, gu: "은평구", name: "SK에너지 녹번점",         address: "서울 은평구 통일로 595",           lat: 37.5989, lng: 126.9361, price: 1619, type: "self" },
    { id: 2103, gu: "은평구", name: "현대오일뱅크 신사점",     address: "서울 은평구 갈현로 58",            lat: 37.6181, lng: 126.9163, price: 1645, type: "full" },
    { id: 2104, gu: "은평구", name: "S-OIL 응암셀프점",        address: "서울 은평구 응암로 296",           lat: 37.5961, lng: 126.9181, price: 1658, type: "self" },
    // 종로구
    { id: 2201, gu: "종로구", name: "SK에너지 종로셀프점",     address: "서울 종로구 종로 264",             lat: 37.5737, lng: 127.0048, price: 1662, type: "self" },
    { id: 2202, gu: "종로구", name: "GS칼텍스 평창점",         address: "서울 종로구 평창문화로 71",        lat: 37.6074, lng: 126.9668, price: 1649, type: "full" },
    { id: 2203, gu: "종로구", name: "현대오일뱅크 창신점",     address: "서울 종로구 창신길 45",            lat: 37.5781, lng: 127.0186, price: 1671, type: "full" },
    { id: 2204, gu: "종로구", name: "S-OIL 부암셀프점",        address: "서울 종로구 자하문로 210",         lat: 37.5967, lng: 126.9618, price: 1643, type: "self" },
    // 중구
    { id: 2301, gu: "중구", name: "GS칼텍스 을지로점",         address: "서울 중구 을지로 266",             lat: 37.5630, lng: 127.0068, price: 1678, type: "full" },
    { id: 2302, gu: "중구", name: "SK에너지 충무로셀프점",     address: "서울 중구 퇴계로 216",             lat: 37.5604, lng: 126.9899, price: 1659, type: "self" },
    { id: 2303, gu: "중구", name: "현대오일뱅크 신당점",       address: "서울 중구 다산로 230",             lat: 37.5590, lng: 127.0194, price: 1683, type: "full" },
    // 중랑구
    { id: 2401, gu: "중랑구", name: "SK에너지 면목셀프점",     address: "서울 중랑구 면목로 430",           lat: 37.5830, lng: 127.0860, price: 1637, type: "self" },
    { id: 2402, gu: "중랑구", name: "GS칼텍스 상봉점",         address: "서울 중랑구 동일로 824",           lat: 37.5986, lng: 127.0865, price: 1625, type: "self" },
    { id: 2403, gu: "중랑구", name: "현대오일뱅크 신내점",     address: "서울 중랑구 신내로 135",           lat: 37.6093, lng: 127.0948, price: 1649, type: "full" },
    { id: 2404, gu: "중랑구", name: "S-OIL 묵동셀프점",        address: "서울 중랑구 중랑역로 176",         lat: 37.6082, lng: 127.0782, price: 1641, type: "self" }
];

// 구별 가격 추이 샘플 데이터 (최근 7일)
const PRICE_TREND_BY_GU = {
    labels: ['3/7', '3/8', '3/9', '3/10', '3/11', '3/12', '3/13'],
    seoul:  [1662, 1660, 1661, 1658, 1659, 1657, 1658],
    마포구:  [1652, 1649, 1651, 1648, 1650, 1647, 1649],
    강남구:  [1692, 1690, 1691, 1688, 1689, 1687, 1689],
    강동구:  [1658, 1655, 1657, 1654, 1656, 1653, 1655],
    강북구:  [1645, 1642, 1644, 1641, 1643, 1640, 1642],
    강서구:  [1641, 1638, 1640, 1637, 1639, 1636, 1638],
    관악구:  [1649, 1646, 1648, 1645, 1647, 1644, 1646],
    광진구:  [1654, 1651, 1653, 1650, 1652, 1649, 1651],
    구로구:  [1638, 1635, 1637, 1634, 1636, 1633, 1635],
    금천구:  [1640, 1637, 1639, 1636, 1638, 1635, 1637],
    노원구:  [1644, 1641, 1643, 1640, 1642, 1639, 1641],
    도봉구:  [1636, 1633, 1635, 1632, 1634, 1631, 1633],
    동대문구: [1648, 1645, 1647, 1644, 1646, 1643, 1645],
    동작구:  [1650, 1647, 1649, 1646, 1648, 1645, 1647],
    서대문구: [1642, 1639, 1641, 1638, 1640, 1637, 1639],
    서초구:  [1676, 1673, 1675, 1672, 1674, 1671, 1673],
    성동구:  [1645, 1642, 1644, 1641, 1643, 1640, 1642],
    성북구:  [1649, 1646, 1648, 1645, 1647, 1644, 1646],
    송파구:  [1663, 1660, 1662, 1659, 1661, 1658, 1660],
    양천구:  [1641, 1638, 1640, 1637, 1639, 1636, 1638],
    영등포구: [1650, 1647, 1649, 1646, 1648, 1645, 1647],
    용산구:  [1668, 1665, 1667, 1664, 1666, 1663, 1665],
    은평구:  [1638, 1635, 1637, 1634, 1636, 1633, 1635],
    종로구:  [1656, 1653, 1655, 1652, 1654, 1651, 1653],
    중구:    [1673, 1670, 1672, 1669, 1671, 1668, 1670],
    중랑구:  [1638, 1635, 1637, 1634, 1636, 1633, 1635]
};

// 서울 25개 구 목록 (가나다순)
const SEOUL_GU_LIST = [
    "강남구", "강동구", "강북구", "강서구", "관악구",
    "광진구", "구로구", "금천구", "노원구", "도봉구",
    "동대문구", "동작구", "마포구", "서대문구", "서초구",
    "성동구", "성북구", "송파구", "양천구", "영등포구",
    "용산구", "은평구", "종로구", "중구", "중랑구"
];

// 데이터 가져오기 함수 (나중에 OPINET API로 교체)
function getStations(gu) {
    // TODO: OPINET API 연동 시 교체
    if (!gu || gu === 'all') return SAMPLE_STATIONS;
    return SAMPLE_STATIONS.filter(s => s.gu === gu);
}

function getPriceTrend(gu) {
    const guKey = (!gu || gu === 'all') ? 'seoul' : gu;
    const guData = PRICE_TREND_BY_GU[guKey] || PRICE_TREND_BY_GU['seoul'];
    return {
        labels: PRICE_TREND_BY_GU.labels,
        gu: guData,
        seoul: PRICE_TREND_BY_GU.seoul,
        guName: (!gu || gu === 'all') ? '서울 전체' : gu
    };
}
