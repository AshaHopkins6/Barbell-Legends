import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Exercise } from "../component/Exercise";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";

export default function ExercisePage (){
    return(
        <div>
            
            <Header/>
                <Container>
                    <Row>
                        <Col><Exercise/></Col>
                        <Col><Exercise/></Col>
                        <Col><Exercise/></Col>
                    </Row>
                    <Row>
                        <Col><Exercise/></Col>
                        <Col><Exercise/></Col>
                        <Col><Exercise/></Col>
                    </Row>
                    <Row>
                        <Col><Exercise/></Col>
                        <Col><Exercise/></Col>
                        <Col><Exercise/></Col>
                    </Row>
                </Container>
            <Footer/>
        </div>
    )
}