import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm, Resolver } from 'react-hook-form';
import Card from 'react-bootstrap/Card';
import './CSS/Card.css'


type FormValues = {
    username: string;
    password: string;
  };
  
  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.username ? values : {},
      errors: !values.username
        ? {
            username: {
              type: 'required',
              message: 'Enter Username.',
            },
          }
        : {},
    };
  };

export const LoginCard = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Card className="text-center">
      <Card.Header as="h5">Login</Card.Header>
      <Card.Body>
        <form onSubmit={onSubmit}>
          <input {...register("username")} placeholder="Username" />
          {errors?.username && <p>{errors.username.message}</p>}
          <br></br>

          <input type="password" {...register("password")} placeholder="Password" />
          <br></br>

          <Button variant="primary" type="submit">LOGIN</Button>
        </form>
        </Card.Body>
    </Card>
  );
}