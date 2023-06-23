import React from "react";
import header from "./Header.module.scss";
import logo from "./logo.png";
import menuicon from "./menuicon.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  let searchFormDisplay = null;
  let clientPaddingBottom = 0;
  let clientMarginBottom = 0;
  let activeBorderBottom = "none";
  let regularBorderBottom ="none";
  let activeColor = "#DAFF01";
  if (window.screen.width <= 450) {
    clientPaddingBottom = "4px";
    clientMarginBottom = ".7em";
    searchFormDisplay = "none";
    activeBorderBottom =  "2px solid #DAFF01"
    regularBorderBottom = "2px solid #fff";
  }

  return (
    <header className={header.header}>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <img
              src={menuicon}
              className={header.menuIcon}
              alt="ícone do menu"
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className={header.collapse}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ fontFamily: "Inter" }}
              navbarScroll
            >
              <Nav.Link href="#" className="me-4 p-0" style={{borderBottom: activeBorderBottom, paddingBottom: clientPaddingBottom, marginBottom: clientMarginBottom}}>
                <span className={header.linkText} style={{color: activeColor}}>Home</span>
              </Nav.Link>
              <Nav.Link href="#" className="me-4 p-0" style={{borderBottom: regularBorderBottom, paddingBottom: clientPaddingBottom, marginBottom: clientMarginBottom}}>
                <span className={header.linkText}>Nossas Lojas</span>
              </Nav.Link>
              <Nav.Link href="#" className="me-4 p-0" style={{borderBottom: regularBorderBottom, paddingBottom: clientPaddingBottom, marginBottom: clientMarginBottom}}>
                <span className={header.linkText}>Novidades</span>
              </Nav.Link>
              <Nav.Link href="#" className="me-4 p-0" style={{borderBottom: regularBorderBottom, paddingBottom: clientPaddingBottom, marginBottom: clientMarginBottom}}>
                <span className={header.linkText}>Promoções</span>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Digite o produto"
                className={header.searchInput}
                style={{ display: searchFormDisplay }}
                aria-label="Search"
              />
              <Button
                variant="outline-light text-white "
                className={header.searchButton}
                style={{ display: searchFormDisplay }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
