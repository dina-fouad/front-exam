import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';


class Header extends React.Component{
  render(){
    return(
      <>

<Navbar bg="primary" variant="dark">
   
    <Navbar.Brand href="/">Drinks APP</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favorite">My drinks</Nav.Link>
    
    </Nav>
    
  </Navbar>
      </>
    )
  }
}
export default Header;