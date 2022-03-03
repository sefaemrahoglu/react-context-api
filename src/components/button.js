import {useTheme} from "../context/themeContext";
function Button({ children }) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <h1>Active Theme : {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {children}
      </button>
    </>
  );
}
export default Button;
