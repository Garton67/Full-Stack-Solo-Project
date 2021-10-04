import { Link, NavLink } from "react-router-dom"
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

function Menu() {
    return(
        <div className="menu">

            <Navbar bg='dark' variant='light'
                sticky="top" expand="sm">
            <Container>
            <Navbar.Brand href="#home">Ambient</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link className="nav-link" to='/' >Home</Link> 
            <Link className="nav-link" to='/Weather'>Weather</Link> 
            <Link className="nav-link" to='/videosearch'>Videos</Link> 
            <Link className="nav-link" to='/game'>Game</Link> 
            <Link className="nav-link" to='/login'>Login</Link> 
            <Link className="nav-link" to='/register'>Register</Link> 
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Menu