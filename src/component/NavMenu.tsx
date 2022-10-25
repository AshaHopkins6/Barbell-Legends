import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function NavMenu() {
   const navigate = useNavigate();
   function calendar(){
      navigate('/Calendar')
   }   

   function home(){
    navigate('/')    
   }

   function exercise(){
    navigate('/exercise')    
   }

    return (
    <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        <span className="navbar-toggler-icon" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={home} href="#/action-1">Home</Dropdown.Item>
        <Dropdown.Item onClick={calendar} href="#/action-2">Calendar</Dropdown.Item>
        <Dropdown.Item onClick={exercise} href="#/action-3">Exercises</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Lifting Records</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
