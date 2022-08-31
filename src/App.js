import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { theme } from "./components/styles/Theme";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import ParallaxComponent from "./components/Parallax/Parallax";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";


 function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navbar />
          <Home />
          <Projects />
          <About />
          <ParallaxComponent />
          <Technologies />
          {/* <Playground /> */}
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
