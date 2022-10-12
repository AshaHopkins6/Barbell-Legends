import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm, Resolver } from 'react-hook-form';
import Card from 'react-bootstrap/Card';

export const Header = () => {
    return (
     <header>
      <div className="collapse bg-dark" id="navbarHeader">
       <div className="container">
        <div className="row">
         <div className="col-sm-8 col-md-7 py-4">
         </div>
        </div>
       </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
       <div className="container d-flex justify-content-between">
        <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarHeader"
         aria-controls="navbarHeader"
         aria-expanded="false"
         aria-label="Toggle navigation"
        >
         <span className="navbar-toggler-icon" />
        </button>
        <a href="#" className="navbar-brand d-flex text-center">
         <h1>
            <strong>Barbell Legend</strong>
         </h1>
        </a>
       </div>
      </div>
     </header>
    );
   };