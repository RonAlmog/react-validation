import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Formx from "./components/Form";
import { Container } from "react-bootstrap";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Formx />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
