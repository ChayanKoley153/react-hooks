import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};

export default useTheme;
