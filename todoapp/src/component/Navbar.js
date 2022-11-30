import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

export default function BasicNavbar() {
	return (
		<Navbar bg="dark" expand="lg">
			<Container>
				<LinkContainer style={styles} to="/">
					<Navbar.Brand>TODO</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle href="basic-navbar-nav" style={styles2} />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to="/" style={styles}>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

const styles = {
	color: "white",
};

const styles2 = {
	backgroundColor: "white",
};
