import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/actions';
import { currentUserValue } from '../services';



export default function NavbarScreen() {
    const dispatch = useDispatch()

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Gestion des voitures</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto py-3'>
                    <Nav.Link href="/">Accueil</Nav.Link>
                    <Nav.Link href="/login">Se connecter</Nav.Link>
                </Nav>
                </Navbar.Collapse>

                <Navbar.Toggle />
                { currentUserValue() && <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title={currentUserValue().username} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/loging" onClick={() => {dispatch(logoutAction())}}>Déconnecter</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>}
            </Container>
        </Navbar>
    )
}
