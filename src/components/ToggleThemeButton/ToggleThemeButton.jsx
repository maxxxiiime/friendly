import moon from "../../assets/darkmode.svg";
import sun from "../../assets/lightmode.svg";
import "./ToggleThemeButton.scss";
import { ThemeContext } from "../../context/ThemeProvider";
import { useContext } from "react";

export default function ToggleThemeButton() {
  const {ToggleTheme, darkMode} = useContext(ThemeContext)

  return (
    
    <button
    onClick={ToggleTheme}
     className="toggle-theme-btn">
        {/* <span>{darkMode ? "Light" : "Dark" }</span> */}
        <img src={darkMode ? sun : moon} alt="toggle icon" />
    </button>
  )
}