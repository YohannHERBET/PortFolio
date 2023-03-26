import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="#home" className="ml-3">Yohann HERBET</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#projets">Projets</Nav.Link>
        <Nav.Link href="#apropos">À propos</Nav.Link>
        <Nav.Link href="#technos">Technos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
