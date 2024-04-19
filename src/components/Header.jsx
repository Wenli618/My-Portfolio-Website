import { Container, Nav, Navbar,  Offcanvas} from 'react-bootstrap'

import styles from './Header.module.scss'

import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
        <Navbar  expand='lg' className={styles.navbar}>
          <Container fluid>
            <Navbar.Brand href="/" className={styles.navBrand}> <span>&lt; </span>
              <h3> Wenli Jia </h3>
              <span>  /&gt;</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-md'
              aria-labelledby='offcanvasNavbarLabel-expand-md'
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className={`justify-content-end flex-grow-1 pe-3  ${styles.links}`}>
                  <Nav.Link className={styles.navLink} as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link className={styles.navLink} as={Link} to='/about'>About Me</Nav.Link>
                  <Nav.Link className={styles.navLink} as={Link} to='/projects'>Projects</Nav.Link>
                  <Nav.Link className={styles.navLink} as={Link} to='/contact'>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Header