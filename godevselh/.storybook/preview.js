import ThemeContextProvider from "../src/Context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

export const decorators = [
  (storyFn) => (
    <BrowserRouter>
      <ThemeContextProvider>{storyFn()}</ThemeContextProvider>
    </BrowserRouter>
  ),
];
