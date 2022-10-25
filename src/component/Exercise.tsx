import React from "react";
import Card from 'react-bootstrap/Card';
import SitUp from '../Data/exercises/3_4_Sit-Up/images/0.jpg';
export const Exercise = () =>{
    return(
    <Card>
      <Card.Header as="h5">Sit-up</Card.Header>
      <Card.Body className="bg-dark">
        <img src= {SitUp} alt='SitUp'/>
      </Card.Body>
      <Card.Footer>
        <Card.Text>
            Lie down on the floor and secure your feet. Your legs should be bent at the knees.",
            Place your hands behind or to the side of your head. You will begin with your back on the ground. This will be your starting position.
            Flex your hips and spine to raise your torso toward your knees.
            At the top of the contraction your torso should be perpendicular to the ground. Reverse the motion, going only Â¾ of the way down.
            Repeat for the recommended amount of repetitions.
        </Card.Text>
      </Card.Footer>
    </Card>
    )
} 