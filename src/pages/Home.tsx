import React from "react";
import CalendarCard from "../component/CalendarCard";
import ExerciseCard from "../component/ExerciseCard";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import LiftingRecordsCard from "../component/LiftingRecordsCard";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import { Exercise } from "../component/Exercise";
import GetData from "../component/GetData";



export default function Home() {
    
    return (
        <div>
            <Header/>
            <Row>
                <Col><Tilt><CalendarCard/></Tilt></Col>
                <Col><Tilt><ExerciseCard/></Tilt></Col>
                <Col><Tilt><LiftingRecordsCard/></Tilt></Col>
            </Row>
            <Footer/>
        </div>    
      
    )
  }