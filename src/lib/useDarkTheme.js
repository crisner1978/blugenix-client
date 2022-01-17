import { useRecoilState } from "recoil";
import { isDarkState } from "atoms/isDarkAtom";

export default function useDarkTheme() {
    const [theme, setTheme] = useRecoilState(isDarkState);

    const saveTheme = (chosenTheme) => {
        setTheme(chosenTheme);
        window.localStorage.setItem('THEME_BLUGENIX', chosenTheme);
    }

    const toggleTheme = () => {
        saveTheme(theme === 'light' ? 'dark' : 'light')
    }

    return [theme, toggleTheme]
}