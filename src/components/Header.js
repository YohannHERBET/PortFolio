import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <header>
    <Navbar
      collapseOnSelect
      style={{
        background: 'linear-gradient(260deg, rgb(60, 78, 106) 0%, rgb(167 198 235 / 99%) 50%, rgb(60, 78, 106) 100%)',
        boxShadow: 'rgb(37 65 92 / 34%) 0px 0px 40px',
      }}
      fixed="top"
      expand="md"
    >
      <Navbar.Brand href="#" className="ms-3 pt-0">Yohann HERBET</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" style={{ boxShadow: '1px 3px 15px #212c56a3' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="align-items-center">
          <Nav.Link href="#apropos">A propos</Nav.Link>
          <Nav.Link href="#technos">Technos</Nav.Link>
          <Nav.Link href="#projets">Projets</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
