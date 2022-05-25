import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';

const NavBar = ({ children }) => {
  let bool = true;
  const [logOut, setLogOut] = useState(bool);
  let navigate = useNavigate();
  let authToken = sessionStorage.getItem('Auth Token');

  useEffect(() => {
    // if (!authToken) {
    //   navigate('/login');
    // }
  }, [logOut]);

  return (
    <div className='navBar-position'>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/');
            }}
          >
            Icon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                onClick={() => {
                  navigate('/user/feed');
                }}
              >
                Feed
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/user/profile');
                }}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/user/myfeed');
                }}
              >
                My Feed
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title='Settings' id='collasible-nav-dropdown'>
                <NavDropdown.Item
                  onClick={() => {
                    navigate('/user/password');
                  }}
                >
                  Password
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    // sessionStorage.removeItem('Auth Token');
                    // setLogOut(!bool);
                    auth.signOut();
                    navigate('/auth/login');
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
