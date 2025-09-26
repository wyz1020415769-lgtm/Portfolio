// 主题切换功能
let currentTheme = localStorage.getItem('theme') || 'light';

// 初始化主题
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

// 切换主题
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

// 更新主题图标
function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        // 添加淡出效果
        themeIcon.style.opacity = '0';
        themeIcon.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
            // 添加淡入效果
            themeIcon.style.opacity = '1';
            themeIcon.style.transform = 'scale(1)';
        }, 150);
    }
}

// 监听系统主题变化
function watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // 如果没有本地存储的主题设置，则跟随系统
    if (!localStorage.getItem('theme')) {
        currentTheme = mediaQuery.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon();
    }

    // 监听系统主题变化
    mediaQuery.addEventListener('change', (e) => {
        // 只有在用户没有手动设置主题时才跟随系统
        if (!localStorage.getItem('theme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            updateThemeIcon();
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    watchSystemTheme();
});

// 为不支持CSS自定义属性的浏览器提供降级方案
function fallbackForOldBrowsers() {
    if (!CSS.supports('color', 'var(--test)')) {
        // 如果浏览器不支持CSS变量，使用简单的类切换
        const body = document.body;
        if (currentTheme === 'dark') {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    }
}

// 在初始化时检查浏览器支持
initTheme();
fallbackForOldBrowsers();