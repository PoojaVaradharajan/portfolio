// JavaScript for interactivity: Light/Dark Mode Toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.createElement("button");
    themeButton.innerText = "Toggle Dark Mode";
    themeButton.onclick = toggleTheme;
    document.body.appendChild(themeButton);
});

// You can add a "dark-theme" class to your CSS to define styles for dark mode
