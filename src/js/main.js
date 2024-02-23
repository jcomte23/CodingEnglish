import '../css/style.css'
import '../css/icons.css'

const btnChangeTheme = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Verifica el estado del modo oscuro almacenado en localStorage
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Aplica el modo oscuro si está activado
if (isDarkMode) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.add("hidden");
} else {
    themeToggleDarkIcon.classList.add("hidden");
}

btnChangeTheme.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
    themeToggleLightIcon.classList.toggle("hidden", isDarkMode);
    themeToggleDarkIcon.classList.toggle("hidden", !isDarkMode);
});

