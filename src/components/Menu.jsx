import React from "react"
import dishes from "../data/menu.json"
import SingleDish from "./SingleDish.jsx"
import { Alert, Container } from "react-bootstrap"

//let dishes

const Menu = (props) => {
	console.log(props)
	return (
		<Container>
			{!dishes && <Alert>work in progress</Alert>}
			{dishes && dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
		</Container>
	)
}
export default Menu
