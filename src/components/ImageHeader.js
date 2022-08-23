import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ImageHeader = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-white">
      <Container>
        <Navbar.Brand href="#">
        <img style={{
          width: '100px',
          display: 'inline',
          margin: '25px',
          verticalAlign: 'top',
        }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
            <input style={{
              width: '650px',
              padding: '10px',
              borderRadius: '20px',
              border: '1px solid rgb(199, 199, 199)',
            }} type="text" name="" value="Search for Images..." />
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link eventKey={2} href="#">
            <a href="#"><i class="fas fa-th" style={{ color: '#545454', fontSize: '1.7em'}}></i></a>
          </Nav.Link>
            <Nav.Link href="#deets">
              <button style={{
                borderRadius: '3px',
                border: 'none',
                width: '75px',
                color: 'white',
                background: '#3c7ae4',
                fontWeight: 'bold',
                marginTop: '8px'
              }} type="button" name="button">Sign In</button>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <Nav
      activeKey="/"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="#" className="text-decoration-underline">All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/" className="text-decoration-underline"><span className="font-weight-bold">Images</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-decoration-underline">News</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-decoration-underline">Videos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-decoration-underline">Shoppings</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-decoration-underline">Maps</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-decoration-underline">More</Nav.Link>
      </Nav.Item>
      <Nav.Item className="ms-auto">
        <Nav.Link href="#">Tools</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Settings</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    </>

  )
};

export default ImageHeader;
