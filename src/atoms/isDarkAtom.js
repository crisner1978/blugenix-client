import { atom } from "recoil";

let defaultTheme = 'light'
if(typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem("THEME_BLUGENIX");
    if(savedTheme) {
        defaultTheme = savedTheme;
    } else {
        const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        defaultTheme = isDarkMode ? "dark" : "light"
    }
}

export const isDarkState = atom({
    key: 'isDarkState',
    default: defaultTheme,
})