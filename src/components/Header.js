import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar collapseOnSelect bg="dark" variant="dark" fixed="top" expand="md">
    <Navbar.Brand href="/" className="ms-3 pt-0">Yohann HERBET</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="align-items-center">
        <Nav.Link href="#projets">Projets</Nav.Link>
        <Nav.Link href="#apropos">A propos</Nav.Link>
        <Nav.Link href="#technos">Technos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
