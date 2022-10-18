import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm, Resolver } from 'react-hook-form';
import Card from 'react-bootstrap/Card';
import { LoginCard } from './component/LoginCard';
import { Header } from './component/Header';
import { Footer } from './component/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';





export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Home/>} />
          <Route path= "login" element={<Login/>} />
          <Route path= "calendar" element={<Calendar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
