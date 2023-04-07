import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap";

export const RoutingWithReactBootstrap = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="">
                <Navbar.Brand className="me-4"><img
                    alt=""
                    src="/logo192.png"
                    width="31"
                    height="30"
                    className="d-inline-block align-top me-1"
                />{' '}
                    React Bootstrap</Navbar.Brand>
                <Nav className="me-auto">
                    {/*<Nav.Item>*/}
                    {/*    <Nav.Link to="/form">Form</Nav.Link>*/}
                    {/*</Nav.Item>*/}

                    <Nav.Link to="/form">Form</Nav.Link>
                    <Nav.Link to="/other">Other</Nav.Link>
                </Nav>
                <Button variant="outline-success" className="font-monospace">L O G I N</Button>{' '}
            </Container>
        </Navbar>
    );
}