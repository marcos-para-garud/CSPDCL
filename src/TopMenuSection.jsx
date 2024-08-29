import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import homeLogo from './assets/home-logo.png';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa';  // Import the 3-bar icon
import './App.css';


function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='sm:block hidden'>
    <Nav variant="pills" activeKey="1" onSelect={handleSelect} className='bg-[#274699] text-white flex 
    items-center justify-between'>
      <img src={homeLogo} alt="Logo 3" className="h-12 w-12 m-4" />
      
      
      <NavDropdown title={<span className="text-white">Consumer Services</span>} className='-mx-2 text-sm' id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
      
      <NavDropdown title={<span className="text-white">Consumer e-seva</span>} className='-mx-2 text-sm' id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
      <NavDropdown title={<span className="text-white">Outage Information</span>} className='-mx-2 text-sm' id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" className='-mx-2 text-sm text-white'>
          Tenders
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" className='-mx-2 text-sm text-white'>
          Investors
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" className='-mx-2 text-sm text-white'>
          Recruitments
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" className='-mx-2 text-sm text-white'>
          Tariff petitions
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" className='-mx-2 text-sm text-white'>
          Consumer Informations
        </Nav.Link>
      </Nav.Item>
      
      {/* Replace the Button with a 3-bar icon */}
      <div onClick={handleShow} className="cursor-pointer p-4">
        <FaBars size={24} color="white" />
      </div>
      
      <Offcanvas show={show} onHide={handleClose} className="bg-[#274699]" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><span className='text-white mx-6'>Close</span></Offcanvas.Title>
        </Offcanvas.Header>
        
        {/* Add a scrollable container for the offcanvas body */}
        <Offcanvas.Body className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 56px)' }}>
          <div className="space-y-4 mx-6 text-white">
            <div>Industrial feeder tripping</div>
            <div>Online new connection</div>
            <div>Ease of doing business</div>
            <div>Solar rooftop portal</div>
            <div>RAPDRP Report</div>
            <div>Right to information</div>
            <div>Finance and Accounts</div>
            <div>Vigilance department</div>
            <div>Project department</div>
            <div>Schedule of rates</div>
            <div>Scheme budgets</div>
            <div>Pensioners corner</div>
            <div>Medical facility</div>
            <div>ESS/MSS login</div>
            <div>Acts & Regulations</div>
            <div>Statistics</div>
            <div>Telephone directory</div>
            
          </div>
        </Offcanvas.Body>
      </Offcanvas> 
    </Nav>
    </div>
  );
}

export default NavDropdownExample;







