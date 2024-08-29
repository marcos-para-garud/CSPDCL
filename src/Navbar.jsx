import React, { useState } from 'react';
import cspdclLogo from './assets/cspdcl-logo.png';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa';  // Import the 3-bar icon
import { Link } from 'react-router-dom';

//  import Example from './NavOffCanvasMobileView';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';



const CustomNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <nav className="bg-gray-200 p-4 sm:block hidden">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
          <img src={cspdclLogo} alt="CSPDCL Logo" className="sm:h-20 h-16 sm:w-36 w-32" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        

<button
  onClick={toggleMobileMenu}
  className="text-gray-600 font-semibold hover:text-blue-500 lg:hidden focus:outline-none"
>
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>


        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex font-semibold lg:items-center lg:space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Employee Login</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">About CSPDCL</a>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-600">Contact Us</button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`lg:hidden mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        {/* <Example/> */}
      
        <button className="block w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2">Contact Us</button>
      </div>
    </nav>

     {/* mobile navbar */}
     <div className='sm:hidden block '>

     {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            
            <div className="flex items-center">
              <Link to="/">
              <img src={cspdclLogo} alt="CSPDCL Logo" className="sm:h-20 h-16 sm:w-36 w-32" />
              </Link>
          
        </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" className='bg-[#274699] text-white'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Close
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">DashBoard</Nav.Link>
                  <NavDropdown
                    title="Employee Login"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="About CSPDCL"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Consumer e-seva"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>


                  <NavDropdown
                    title="Outage information"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="#action2">Tenders</Nav.Link>

                  <Nav.Link href="#action2">Investors</Nav.Link>

                  <Nav.Link href="#action2">Recruitments</Nav.Link>

                  <Nav.Link href="#action2">Tariff petitions</Nav.Link>

                  <Nav.Link href="#action2">Consumer information</Nav.Link>
                </Nav>
                
               

                  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

     </div>
    </>
  );
};

export default CustomNavbar;

