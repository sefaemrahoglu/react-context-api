import Header from "./header";
import Button from "./button";
import Profile from "./profile";
import {useTheme} from "../context/themeContext";
function Container(params) {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div className={`app ${theme}`}>
      <Header />
      <Button>Theme Button</Button>
      <hr/>
      <Profile/>
    </div>
  );
}

export default Container;
