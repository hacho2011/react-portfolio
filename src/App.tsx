import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Global, ThemeProvider } from "@emotion/react";
import globalStyles from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Home />
    </ThemeProvider>
  );
}

export default App;
