import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"

class NavBar extends React.Component {
	constructor(props) {
		super(props)
		console.log("is this a trap? the component isn't rendering yet")
	}
	render(props) {
		console.log(
			"here this should be just before the rendering lmao i commented a message left her from the creator himself",
			this.props.location.pathname
		)
		//console.log(this.props)
		return (
			<div>
				<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
					<Link to="/">
						<Navbar.Brand>{this.props.title} - Strive For Food</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Link to="/menu">
								<div
									className={
										this.props.location.pathname === "/menu"
											? "nav-link active"
											: "nav-link"
									}
								>
									Menu
								</div>
							</Link>
							<Link to="/reservation">
								<div
									className={
										this.props.location.pathname === "/reservation"
											? "nav-link active"
											: "nav-link"
									}
								>
									Reservation
								</div>
							</Link>
							{this.props.location.pathname === "/details/2" && (
								<Link to="/thunder_cross_split_attack">
									<div
										className={
											this.props.location.pathname === "/reservation"
												? "nav-link active"
												: "nav-link"
										}
									>
										Best plate
									</div>
								</Link>
							)}
							<Nav.Link>Our Location</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}

export default withRouter(NavBar) // will give the component exported EXTRA PROPS: history, location, match
