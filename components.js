(function () {

    const isProducts = window.location.pathname.includes('products');

    // --- Topbar ---
    const topbarEl = document.getElementById('site-topbar');
    if (topbarEl) {
        topbarEl.innerHTML = `
            <div class="bg-slate-900 text-white text-xs py-2 hidden md:block">
                <div class="container mx-auto px-6 flex justify-end">
                    <span><i class="fas fa-phone mr-1"></i> 055-332-9753</span>
                </div>
            </div>
        `;
    }

    // --- Nav ---
    const navEl = document.getElementById('site-nav');
    if (navEl) {
        navEl.innerHTML = `
            <nav class="bg-white shadow-sm sticky top-0 z-50">
                <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="index.html" class="flex items-center space-x-2">
                        <i class="fas fa-lightbulb text-blue-600 text-3xl"></i>
                        <span class="text-2xl font-black text-slate-800 tracking-tighter">주원테크</span>
                    </a>
                    <ul class="hidden lg:flex space-x-8 text-slate-600 font-bold">
                        <li><a href="index.html#about"    class="hover:text-blue-600" data-i18n="nav.about">회사소개</a></li>
                        <li><a href="index.html#products" class="hover:text-blue-600" data-i18n="nav.products">제품소개</a></li>
                        <li><a href="index.html#contact"  class="hover:text-blue-600" data-i18n="nav.contact">온라인문의</a></li>
                        <li><a href="index.html#location" class="hover:text-blue-600" data-i18n="nav.location">찾아오는 길</a></li>
                    </ul>
                    <div class="flex items-center space-x-4">
                        <button id="theme-toggle" class="text-slate-600 hover:text-blue-600 focus:outline-none text-xl">
                            <i class="fas fa-moon hidden" id="theme-toggle-dark-icon"></i>
                            <i class="fas fa-circle-half-stroke hidden" id="theme-toggle-light-icon"></i>
                        </button>
                        <button id="lang-toggle" class="text-sm font-bold px-3 py-1 border-2 border-slate-300 rounded-md text-slate-600 hover:border-blue-600 hover:text-blue-600 focus:outline-none transition">EN</button>
                    </div>
                </div>
            </nav>
        `;
    }

    // --- Footer ---
    const footerEl = document.getElementById('site-footer');
    if (footerEl) {
        footerEl.innerHTML = `
            <footer class="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
                <div class="container mx-auto px-6 text-center">
                    <div class="text-white font-bold text-xl mb-6">JUWON TECH</div>
                    <p class="mb-2">본사/공장: 경상남도 김해시 대동면 대동산단8로 79-12, 에이동</p>
                    <p class="mb-2">Tel: 055-332-9753 | Fax: 055-331-9753</p>
                    <p class="mb-8">사업자등록번호: 736-72-00576 | 대표자: 주희룡</p>
                    <div class="flex justify-center space-x-6 text-xl">
                        <a href="#" class="hover:text-white"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="hover:text-white"><i class="fab fa-youtube"></i></a>
                        <a href="#" class="hover:text-white"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="mt-8 text-xs text-slate-600 underline decoration-slate-700 underline-offset-4 font-bold uppercase tracking-widest">
                        Copyright © 2026 Juwon Tech. All Rights Reserved.
                    </div>
                </div>
            </footer>
        `;
    }

    // --- Theme Toggle ---
    const htmlElement = document.documentElement;

    const setTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        const darkIcon  = document.getElementById('theme-toggle-dark-icon');
        const lightIcon = document.getElementById('theme-toggle-light-icon');
        if (theme === 'dark') {
            darkIcon?.classList.remove('hidden');
            lightIcon?.classList.add('hidden');
        } else {
            lightIcon?.classList.remove('hidden');
            darkIcon?.classList.add('hidden');
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        setTheme(htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });

    // --- Language Toggle ---
    const translations = {
        ko: {
            'nav.about':    '회사소개',
            'nav.products': '제품소개',
            'nav.contact':  '온라인문의',
            'nav.location': '찾아오는 길',
        },
        en: {
            'nav.about':    'About Us',
            'nav.products': 'Products',
            'nav.contact':  'Contact',
            'nav.location': 'Location',
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ko';

    const applyLang = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        const btn = document.getElementById('lang-toggle');
        if (btn) btn.textContent = lang === 'ko' ? 'EN' : 'KO';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = translations[lang][key];
            if (text !== undefined) el.innerHTML = text;
        });
        // index.html의 추가 번역 처리 (main.js에서 담당)
        if (typeof applyPageTranslations === 'function') applyPageTranslations(lang);
    };

    applyLang(currentLang);

    document.getElementById('lang-toggle')?.addEventListener('click', () => {
        applyLang(currentLang === 'ko' ? 'en' : 'ko');
    });

})();
