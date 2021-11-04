import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Formx from "./components/Form";
import { Container } from "react-bootstrap";
import About from "./pages/about";
import Navigation from "./components/navbar";
import Contact from "./pages/contact";
import State from "./pages/state";
import UseReducer from "./pages/usereducer";
import UseEffect from "./pages/useeffect";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Formx />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/state" element={<State />} />
          <Route path="/reducer" element={<UseReducer />} />
          <Route path="/effect" element={<UseEffect />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
