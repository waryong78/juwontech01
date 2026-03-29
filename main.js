document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic ---
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');

    const setTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            themeToggleLightIcon?.classList.remove('hidden');
            themeToggleDarkIcon?.classList.add('hidden');
        } else {
            themeToggleDarkIcon?.classList.remove('hidden');
            themeToggleLightIcon?.classList.add('hidden');
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    themeToggleBtn?.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

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