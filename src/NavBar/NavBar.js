import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ children }) => {
  let bool = true;
  const [logOut, setLogOut] = useState(bool);
  let navigate = useNavigate();
  let authToken = sessionStorage.getItem('Auth Token');

  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    }
  }, [logOut]);

  return (
    <div >
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/feed');
            }}
          >
            Icon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                onClick={() => {
                  navigate('/feed');
                }}
              >
                Feed
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/profile');
                }}
              >
                Profile
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title='Settings' id='collasible-nav-dropdown'>
                <NavDropdown.Item
                  onClick={() => {
                    navigate('/password');
                  }}
                >
                  Password
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    sessionStorage.removeItem('Auth Token');
                    setLogOut(!bool);
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </div>
  );
};

export default NavBar;
