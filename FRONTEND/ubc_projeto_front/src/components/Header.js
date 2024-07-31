import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Student Management</Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" onClick={handleLogout}>
            Sair
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
