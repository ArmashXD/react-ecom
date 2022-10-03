import * as React from 'react';
import { string, object, number } from 'yup';

export const LoginFields = [
  {
    label: 'Email',
    name: 'email',
    type: string().email().required(),
    placeHolder: 'Enter Email'
  },
  {
    label: 'Password',
    name: 'password',
    type: string().required(),
    placeHolder: 'Enter Password'
  }
];
export const LoginBtn = [
  {
    label: 'Login',
    type: 'submit'
  }
];
export const RegisterFields = [
  {
    label: 'User Name',
    name: 'name',
    type: string().required(),
    placeHolder: 'Enter Name'
  },
  {
    label: 'Email',
    name: 'email',
    type: string().email().required(),
    placeHolder: 'Enter Email'
  },
  {
    label: 'password',
    name: 'password',
    type: string().required(),
    placeHolder: 'Enter Password'
  },
  {
    label: 'Confirm Password',
    name: 'cPassword',
    type: string().required(),
    placeHolder: 'Confirm Your Password'
  }
];
export const RegisterBtn = [
  {
    label: 'Register',
    type: 'submit'
  }
];
