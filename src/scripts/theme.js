// Инициализация темы
function initTheme() {
	const theme = localStorage.getItem('theme') || 'light';
	document.documentElement.classList.toggle('dark', theme === 'dark');
}

// Переключение темы
function toggleTheme() {
	const isDark = document.documentElement.classList.toggle('dark');
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
	return isDark;
}

// Инициализация при загрузке
if (typeof window !== 'undefined') {
	initTheme();
}

export { initTheme, toggleTheme };

