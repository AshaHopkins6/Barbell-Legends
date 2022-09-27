import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm, Resolver } from 'react-hook-form';
import Card from 'react-bootstrap/Card';
import { LoginCard } from './component/LoginCard';
import { Header } from './component/Header';
import { Footer } from './component/Footer';




export default function App() {
  return (
    <div>
      <Header></Header>
      <LoginCard></LoginCard>
      <Footer></Footer>
    </div>
  );
}
