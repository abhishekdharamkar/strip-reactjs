import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

const NavBar = () => {
  const style = { color: "blue", fontSize: "1.8em" };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="main-navbar-text-size mt-xl-2 mt-lg-2 pt-md-2"
    >
      <Container className="main-text-margin-style">
        <Navbar.Brand href="#" className="pt-md-0 ">
          <img
            src="https://raw.githubusercontent.com/amareshjs/amaresh-assign-frontend/master/src/assets/logo.png"
            alt="Website Icon"
            className="navbar-brand-logo"
          />
      
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link
              href="#"
              className="text-black link-space"
              style={{ marginLeft: "20px" }}
            >
              Laptops
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              Desktop PCs
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              Networking Devices
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              Printers & Scanners
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              PC Parts
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              All Other Products
            </Nav.Link>
            <Nav.Link href="#" className="text-black link-space">
              Repairs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
  );
};
export default NavBar