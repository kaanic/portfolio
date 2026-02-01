let isDarkMode = $state(true);

export function getIsDarkMode() { return isDarkMode; }

export function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateCSSVariables();
}

export function initializeTheme() {
    updateCSSVariables();
}

function updateCSSVariables() {
    const root = document.documentElement;

    // used AI here
    // TODO: recheck and validate
    if (isDarkMode) {
        root.style.setProperty('--bg', '#0d1117');
        root.style.setProperty('--cardBg', '#161b22');
        root.style.setProperty('--text', '#e6e6e6');
        root.style.setProperty('--textMuted', '#8b949e');
        root.style.setProperty('--accent1', '#ff4d94');
        root.style.setProperty('--accent2', '#8b5cf6');
        root.style.setProperty('--accent3', '#06b6d4');
        root.style.setProperty('--border', '#30363d');
        root.style.setProperty('--borderAccent', '#58a6ff');
        root.style.setProperty('--buttonPrimary', '#238636');
        root.style.setProperty('--buttonPrimaryHover', '#2ea043');
        root.style.setProperty('--buttonSecondary', '#da3633');
        root.style.setProperty('--buttonSecondaryHover', '#f85149');
    } else {
        root.style.setProperty('--bg', '#ffffff');
        root.style.setProperty('--cardBg', '#f6f8fa');
        root.style.setProperty('--text', '#1a1a1a');
        root.style.setProperty('--textMuted', '#6e6e6e');
        root.style.setProperty('--accent1', '#d91e63');
        root.style.setProperty('--accent2', '#6d28d9');
        root.style.setProperty('--accent3', '#0891b2');
        root.style.setProperty('--border', '#d0d7de');
        root.style.setProperty('--borderAccent', '#0969da');
        root.style.setProperty('--buttonPrimary', '#1a7f37');
        root.style.setProperty('--buttonPrimaryHover', '#228c49');
        root.style.setProperty('--buttonSecondary', '#b62324');
        root.style.setProperty('--buttonSecondaryHover', '#d1242f');
    }
}
