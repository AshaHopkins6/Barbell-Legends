import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm, Resolver } from 'react-hook-form';
import Card from 'react-bootstrap/Card';
import { Logo } from './Logo';





export const Footer = () => {
    return (
        <footer>
        <div className="collapse bg-dark" id="navbarFooter">
         <div className="container">
          <div className="row">
           <div className="col-sm-8 col-md-7 py-4">
           </div>
          </div>
         </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
         <div className="container d-flex justify-content-between">
            <Logo></Logo>
         </div>
        </div>
       </footer>
      );
   };

   