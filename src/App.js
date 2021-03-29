// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';
import React from "react";

import { Row, Col, Image } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import Logo from './img/Logo-14.svg';

import Carta from "./ui/food"
import Soda from "./ui/soda"
import Beers from "./ui/beers"
import Wines from "./ui/wines"
import Drinks from "./ui/drinks"
import Appetizers from "./ui/appetizers";

function App() {



  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#comidas">Comidas</Nav.Link>
            <Nav.Link href="#bebidas-sin-alcohol">Bebidas sin alcohol</Nav.Link>
            <Nav.Link href="#cervezas">Cervezas</Nav.Link>
            <Nav.Link href="#vinos">Vinos</Nav.Link>
            <Nav.Link href="#aperitivos">Aperitivos</Nav.Link>
            <Nav.Link href="#tragos">Tragos</Nav.Link>
          </Nav>
          <hr />
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row className="menu">
          <Col xs={12} id="comidas">
            <h2>Comidas</h2>
            <Carta />
          </Col>
          <Col xs={12} id="bebidas-sin-alcohol">
            <h2>Bebidas sin alcohol</h2>
            <Soda />
          </Col>
          <Col xs={12} id="cervezas">
            <h2>Cervezas</h2>
            <Beers />
          </Col>
          <Col xs={12} id="vinos">
            <h2>Vinos</h2>
            <Wines />
          </Col>
          <Col xs={12} id="aperitivos">
            <h2>Aperitivos</h2>
            <Appetizers />
          </Col>
          <Col xs={12} id="tragos">
            <h2>Tragos</h2>
            <Drinks />
          </Col>
        </Row>
        <Row className="schedule">

        </Row>
      </Container>

    </div>
  );
}

export default App;
