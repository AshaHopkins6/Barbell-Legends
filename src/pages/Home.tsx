import React from "react";
import CalendarCard from "../component/CalendarCard";
import ExerciseCard from "../component/ExerciseCard";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import LiftingRecordsCard from "../component/LiftingRecordsCard";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap";


export default function Home() {
    return (
        <div>
            <Header/>
            <Row>
                <CalendarCard/> 
                <ExerciseCard/>
                <LiftingRecordsCard/>
            </Row>
            
            <Footer/>
        </div>    
      
    )
  }