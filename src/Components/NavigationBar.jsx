import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Power Lifting Calculator</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Workout Log</Nav.Link>
      <Nav.Link href="#features">Machine Learning</Nav.Link>
      <Nav.Link href="#pricing">Data Analytics</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
        </div>
    )
}

export default NavigationBar
