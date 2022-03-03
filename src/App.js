import "./App.css";
import { ThemeProvider } from "./context/themeContext";
import { UserProvider } from "./context/userContext";
import Container from "./components/container";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
