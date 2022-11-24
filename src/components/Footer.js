import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px",
				fontFamily: "cursive" }}>
		L'appel Restaurant
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="\ ">Home</FooterLink>
			<FooterLink href="\product">Product</FooterLink>
			<FooterLink href="\table">BookTable</FooterLink>
			<FooterLink href="\cart">Cart</FooterLink>
		</Column>
		<Column>
			<Heading>Opening Time</Heading>
			<FooterLink><span>Monday—Thursday: 08:00 — 22:00</span></FooterLink>
			<FooterLink>  <span>Friday—Saturday: 09:00 — 23:00 </span></FooterLink>
			<FooterLink> <span>Sunday: 10:00 — 17:00</span></FooterLink>
			<FooterLink href="#"></FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">9384124845</FooterLink>
			
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
