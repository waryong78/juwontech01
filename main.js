// --- i18n Translations ---
const translations = {
    ko: {
        'topbar.badge': '조달청 우수제품 등록 기업',
        'nav.about': '회사소개',
        'nav.products': '제품소개',
        'nav.drawings': '도면자료실',
        'nav.contact': '온라인문의',
        'nav.location': '찾아오는 길',
        'nav.catalog': '카탈로그 받기',
        'hero.title': '신뢰와 기술로 세우는<br>안전한 도시의 가로등',
        'hero.subtitle': '"저희는 단순한 철제 기둥을 만드는 것이 아닙니다.\n                        엄격한 풍동 시험과 구조 계산을 통과한 안전을 공급합니다."',
        'hero.btn1': '제품 라인업 보기',
        'hero.btn2': 'DWG 도면함 이동',
        'about.title': '회사소개',
        'about.subtitle': '주원테크는 빛으로 도시를 밝힙니다',
        'about.p1': '주원테크는 2005년 설립 이래, 혁신적인 기술과 끊임없는 연구 개발을 통해 대한민국 가로등주 산업을 선도해왔습니다. 우리는 단순한 조명 기구를 넘어, 도시의 미관과 안전을 책임지는 중요한 인프라를 구축한다는 자부심으로 모든 제품을 생산하고 있습니다.',
        'about.p2': '최고 품질의 자재 사용과 엄격한 생산 공정, 그리고 숙련된 전문가들의 기술력으로 주원테크의 모든 가로등주는 뛰어난 내구성과 안정성을 자랑합니다. 우리는 고객의 다양한 요구와 환경적 특성을 고려한 맞춤형 솔루션을 제공하며, 지속 가능한 도시 환경 조성에 기여합니다.',
        'about.qual.title': '품질 최우선',
        'about.qual.desc': '모든 제품은 국내외 최고 기준을 준수합니다.',
        'about.inno.title': '기술 혁신',
        'about.inno.desc': '지속적인 R&D로 미래형 가로등주를 만듭니다.',
        'products.title': '주력 제품 상세 사양',
    },
    en: {
        'topbar.badge': 'Registered as Excellent Product – Public Procurement Service',
        'nav.about': 'About Us',
        'nav.products': 'Products',
        'nav.drawings': 'Drawings',
        'nav.contact': 'Contact',
        'nav.location': 'Location',
        'nav.catalog': 'Get Catalog',
        'hero.title': 'Street Lights Built on<br>Trust and Technology',
        'hero.subtitle': '"We don\'t just make steel poles.\n                        We deliver safety certified through rigorous wind tunnel tests and structural analysis."',
        'hero.btn1': 'View Product Lineup',
        'hero.btn2': 'Go to DWG Library',
        'about.title': 'About Us',
        'about.subtitle': 'Juwon Tech Illuminates the City',
        'about.p1': 'Since its founding in 2005, Juwon Tech has led the Korean street light pole industry through innovative technology and continuous R&D. We take pride in building critical infrastructure that goes beyond simple lighting fixtures to ensure urban aesthetics and public safety.',
        'about.p2': 'With the use of top-quality materials, strict production processes, and the expertise of skilled professionals, every Juwon Tech street light pole delivers outstanding durability and stability. We provide customized solutions tailored to diverse client needs and environmental conditions.',
        'about.qual.title': 'Quality First',
        'about.qual.desc': 'All products comply with the highest domestic and international standards.',
        'about.inno.title': 'Technology Innovation',
        'about.inno.desc': 'We create next-generation street light poles through continuous R&D.',
        'products.title': 'Featured Product Specifications',
    }
};

function applyPageTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang]?.[key];
        if (text !== undefined) el.innerHTML = text;
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Modal Logic ---
    const specModal = document.getElementById('spec-modal');
    const modalCloseButton = document.getElementById('modal-close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const viewSpecButtons = document.querySelectorAll('button[data-product]');

    const productSpecs = {
        "standard": {
            title: "스테인리스 가로등주 기본형 상세 규격서",
            content: `
                <p class="mb-2"><strong>모델명:</strong> ST-0801</p>
                <p class="mb-2"><strong>재질:</strong> STS304 (스테인리스 스틸)</p>
                <p class="mb-2"><strong>높이:</strong> 지상고 8,000mm</p>
                <p class="mb-2"><strong>도금:</strong> 용융아연도금 (KS D 8308 기준, 평균 80μm 이상)</p>
                <p class="mb-2"><strong>용도:</strong> 일반 간선도로, 보도, 주택가 이면도로 등</p>
                <p class="mb-2"><strong>특징:</strong> 우수한 내식성, 강한 풍압 저항 설계, 간편한 시공</p>
                <h4 class="text-xl font-bold mt-4 mb-2">구조 및 부속품</h4>
                <ul class="list-disc list-inside ml-4">
                    <li>베이스 플레이트: KS D 3503 SS400, 두께 12mm 이상</li>
                    <li>앵커볼트: M24 x 450mm, 4본 1조, 용융아연도금</li>
                    <li>점검구: 방수형 구조, 접지단자 부착</li>
                    <li>고정 볼트: SUS 304 스테인리스 스틸</li>
                </ul>
            `
        },
        "double-arm": {
            title: "스테인리스 이등용 가로등주 상세 규격서",
            content: `
                <p class="mb-2"><strong>모델명:</strong> DA-1002</p>
                <p class="mb-2"><strong>재질:</strong> KS D 3507 STK 400 (고강도 구조용 강관)</p>
                <p class="mb-2"><strong>높이:</strong> 지상고 10,000mm</p>
                <p class="mb-2"><strong>도금:</strong> 용융아연도금 후 내후성 분체도장 (KS M 5000 기준)</p>
                <p class="mb-2"><strong>암 길이:</strong> 각 2,000mm (대칭형)</p>
                <p class="mb-2"><strong>용도:</strong> 4차선 이상 광폭 도로 중앙분리대, 고속도로</p>
                <p class="mb-2"><strong>특징:</strong> 양방향 조명으로 넓은 시야 확보, 미려한 디자인, 강력한 구조</p>
                <h4 class="text-xl font-bold mt-4 mb-2">구조 및 부속품</h4>
                <ul class="list-disc list-inside ml-4">
                    <li>베이스 플레이트: KS D 3503 SS400, 두께 16mm 이상</li>
                    <li>앵커볼트: M27 x 500mm, 4본 1조, 용융아연도금</li>
                    <li>암 연결부: 고장력 볼트 및 용접 보강</li>
                    <li>점검구: 도난 방지형 잠금 장치</li>
                </ul>
            `
        },
        "solar-smart": {
            title: "스마트 태양광 LED 가로등 상세 규격서",
            content: `
                <p class="mb-2"><strong>모델명:</strong> SL-0603</p>
                <p class="mb-2"><strong>높이:</strong> 지상고 6,000mm</p>
                <p class="mb-2"><strong>태양광 패널:</strong> 단결정 고효율 패널 (100Wp 이상), 충전 컨트롤러 내장</p>
                <p class="mb-2"><strong>배터리:</strong> 리튬인산철 (LiFePO4) 배터리 (12V 100Ah 이상), 수명 5년 이상</p>
                <p class="mb-2"><strong>LED 등기구:</strong> 고효율 LED 모듈 (30W 이상), 광효율 150lm/W 이상</p>
                <p class="mb-2"><strong>기능:</strong> 일몰 후 자동 점등, 조도 센서 연동 디밍 제어 (30%~100%), 타이머 설정</p>
                <p class="mb-2"><strong>용도:</strong> 공원, 산책로, 학교 운동장, 전력 수급 곤란 지역, 비상 조명</p>
                <p class="mb-2"><strong>특징:</strong> 독립형 전원 공급, 유지보수 비용 절감, 친환경 에너지 사용</p>
                <h4 class="text-xl font-bold mt-4 mb-2">제어 시스템</h4>
                <ul class="list-disc list-inside ml-4">
                    <li>MPPT 충전 컨트롤러: 과충전/과방전 보호, 역류 방지</li>
                    <li>스마트 컨트롤러: 무선 통신 (선택), 원격 모니터링 및 제어</li>
                </ul>
            `
        }
    };

    viewSpecButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productType = button.dataset.product;
            const spec = productSpecs[productType];
            if (spec && modalTitle && modalContent && specModal) {
                modalTitle.textContent = spec.title;
                modalContent.innerHTML = spec.content;
                specModal.classList.remove('hidden');
            }
        });
    });

    modalCloseButton?.addEventListener('click', () => {
        specModal?.classList.add('hidden');
    });

    specModal?.addEventListener('click', (event) => {
        if (event.target === specModal) {
            specModal.classList.add('hidden');
        }
    });
});