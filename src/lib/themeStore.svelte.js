let isDarkMode = $state(loadTheme());

function loadTheme() {
    if (typeof window === 'undefined') return true;

    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function getIsDarkMode() { return isDarkMode; }

export function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    applyTheme();
}

export function initializeTheme() {
    applyTheme();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark': 'light');
}
