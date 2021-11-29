import { Navbar , Container , Nav, NavDropdown } from "react-bootstrap"

function Navigation() {
return (
<div >
<Navbar  bg="hotpink" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand href="/">Patriot Goss Blog</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/Authors">Authors</Nav.Link>
        <NavDropdown title="Tags" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.4">All Tags (Coming Soon)</NavDropdown.Item>
        <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.1">Tags Coming Soon</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Tags Coming Soon</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Tags Coming Soon</NavDropdown.Item>
          
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
)
}
export default Navigation;
