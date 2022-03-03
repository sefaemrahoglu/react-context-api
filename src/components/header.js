import {useTheme} from "../context/themeContext";
function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div>
        <h1>Header</h1>
        <h4>Active Theme : {theme} </h4>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Change Theme
        </button>
      </div>
    </>
  );
}
export default Header;
