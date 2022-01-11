import useStore from "store";

export default function AppProviders({ children }) {
  const theme = (isDark) => (isDark ? "dark" : "light");
  const isDarkTheme = useStore((state) => state.isDarkTheme);
  
  return <div className={`${theme(isDarkTheme)}`}>{children}</div>;
}
