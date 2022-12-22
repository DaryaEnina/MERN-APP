import React from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <Navbar color="dark">
        <Container className="shadow-border d-flex justify-content-sm-end">
          <NavbarBrand>
            <a
              className="link"
              href="https://github.com/DaryaEnina/MERN-APP/tree/main"
              target="_blank"
              rel="noreferrer"
            >
              ©Darya Enina
            </a>
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};
export default Footer;
