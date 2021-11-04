import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Form />
      </Container>
    </div>
  );
}

export default App;
