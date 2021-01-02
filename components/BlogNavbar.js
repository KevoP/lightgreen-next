import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import Link from 'next/link';
import { useTheme } from '../providers/ThemeProvider';
import ThemeToggler from './ThemeToggler';

export default function BlogNavbar({theme, toggleTheme}) {

   return (
      <Navbar 
        variant={theme.type}
        expand="lg" 
        className="blog-navbar">
        <Navbar.Brand>
          <Link href="/">
            <span className="blog-navbar__link">LightGreen</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">            
            <Nav.Link href="/" className="blog-navbar__link">
              <span>Home</span>
            </Nav.Link>  
            <Nav.Link href="/about" className="blog-navbar__link">  
              <span>About</span>
            </Nav.Link>
          </Nav>        
        </Navbar.Collapse>
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
      </Navbar>
   )
}
