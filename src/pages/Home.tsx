import React from "react";
import CalendarCard from "../component/CalendarCard";
import ExerciseCard from "../component/ExerciseCard";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import LiftingRecordsCard from "../component/LiftingRecordsCard";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Home() {
    
    return (
        <div>
            <Header/>
            <Row>
                <Col><CalendarCard/></Col>
                <Col><ExerciseCard/></Col>
                <Col><LiftingRecordsCard/></Col>
            </Row>
            
            <Footer/>
        </div>    
      
    )
  }