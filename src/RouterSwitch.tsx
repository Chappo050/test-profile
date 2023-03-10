import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import About from "./components/About";
import App from "./App";
import Home from "./components/Home";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
const RouteSwitch = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="education" element={<Education/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
