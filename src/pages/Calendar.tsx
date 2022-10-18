import React from "react";
import CalendarCard from "../component/CalendarCard";
import ExerciseCard from "../component/ExerciseCard";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import LiftingRecordsCard from "../component/LiftingRecordsCard";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Timeline } from "../component/Timeline";




export default function Calendar() {
    
    return (
        <div>
            <Header/>
                <Timeline/>
            <Footer/>
        </div>    
      
    )
  }