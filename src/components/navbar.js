import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>React!</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/state">State</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/reducer">Reducer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/effect">Effect</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/ref">Ref</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
