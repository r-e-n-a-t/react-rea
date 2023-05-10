import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Footer = () => {
  return (
    <div>
        {/* <footer className='pt-5 my-md-5 bg-secondary'> */}
          {/* <Navbar fixed="bottom" /> */}
          <Navbar bg="secondary" variant="dark" fixed="bottom">
        <Container>
          <Navbar.Brand href="#home">Footer</Navbar.Brand>
        </Container>
      </Navbar>
        {/* </footer> */}
    </div>
  )
}

export default Footer