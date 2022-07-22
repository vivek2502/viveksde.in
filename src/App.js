import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";
import Aboutme from "./components/Aboutme/Aboutme";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Attachment from "./components/Attachment/Attachment";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Aboutme/>
      <Experience />
      <Services />
      <Works />
      <Portfolio />
      <Attachment />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
