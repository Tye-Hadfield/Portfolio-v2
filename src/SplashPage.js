import React from 'react';
import { Container,Row } from 'reactstrap';
import { FaArrowUp } from 'react-icons/fa';
import hand from "./assets/Hand.svg"
import {
    Link
  } from "react-router-dom";


function SplashPage() {
    return (
        <Container style={{overflowX: "hidden"}} >
        <Row className="justify-content-center">
          <Link to="/home">
            <img src={hand} alt="Hand asking for hi-five" className="hand" />
          </Link>
        </Row>
        <Row className="justify-content-center text-center">
          <div className="justify-content-center text-center fade-in">
            <FaArrowUp style={{color:"#0d9aec", marginTop:"-230px"}} className="clickme"  />
            <p className="clickme" >Click me!</p>
          </div>
        </Row>
        <Row className="justify-content-center text-center" >
          <h1>Hello, my name is Tye Hadfield</h1>
        </Row>
        <Row className="justify-content-center text-center" style={{marginTop: "20px"}}>
          <h4>Please take a card!</h4>
        </Row>
      </Container>
    )
}

export default SplashPage