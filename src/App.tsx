import React from 'react';
import {useForm, Resolver} from 'react-hook-form';
import './App.css';

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
            message: 'Enter Username',
          },
        }
      : {},
  };
};

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("username")} placeholder="Username" />
      {errors?.username && <p>{errors.username.message}</p>}
      
      <input {...register("password")} placeholder="Password" />

      <input type="submit" />
    </form>
  );
}