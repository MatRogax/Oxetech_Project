import { Container, Nav, Navbar, /*NavbarBrand,*/ /*NavbarCollapse*/} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar  expand= "lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Pokemon</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> 
                <Nav>
                    <Nav.Link href="/">Nome</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
    );
};
export default Header;