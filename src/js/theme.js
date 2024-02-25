const btnChangeTheme = document.querySelectorAll(".theme-toggle");
const themeToggleDarkIcon = document.querySelectorAll('.theme-toggle-dark-icon');
const themeToggleLightIcon = document.querySelectorAll('.theme-toggle-light-icon');


// Verifica el estado del modo oscuro almacenado en localStorage
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Aplica el modo oscuro si está activado
if (isDarkMode) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon[0].classList.add("hidden");
    themeToggleLightIcon[1].classList.add("hidden");
} else {
    themeToggleDarkIcon[0].classList.add("hidden");
    themeToggleDarkIcon[1].classList.add("hidden");
}

btnChangeTheme[0].addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
    themeToggleLightIcon[0].classList.toggle("hidden", isDarkMode);
    themeToggleDarkIcon[0].classList.toggle("hidden", !isDarkMode);
});

btnChangeTheme[1].addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
    themeToggleLightIcon[1].classList.toggle("hidden", isDarkMode);
    themeToggleDarkIcon[1].classList.toggle("hidden", !isDarkMode);
});