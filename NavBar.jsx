// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../Assest/haber.png';
// import '../Styles/nav.css';

// function BasicExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/haber.png';
import '../Styles/nav.css';


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar">
            <ul className="navbar-nav">
                <li className="nav-item1">
                    {/* PROPERTY BINDING */}
                    <img src={logo} style={{height:90,width:230,paddingLeft:50}}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home">HOME</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="funcom">ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom">SERVICES</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">PROJECTS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">OUR BLOG</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="">CONTACTS</Link>
                </li>
            </ul>
            <div className="col-lg-3 col-12 m-auto">
                <ul class="inline-list m-auto">
                    <li><a href="#" class="fa fa-twitter-square"></a></li>
                    <li><a href="#" class="fa fa-youtube"></a></li>
                    <li><a href="#" class="fa fa-rss"></a></li>
                    <li><a href="#" class="fa fa-facebook-square"></a></li>
                    <li><a href="#" class="fa fa-google-plus-square"></a></li>
                </ul>
            </div>
        </nav>
    )
}