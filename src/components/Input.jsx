import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

export default function Input({ fields, Btn, setData }) {
  const SchemaObject = Object.fromEntries(fields.map((field) => [field.name, field.type]));

  const schema = yup.object(SchemaObject);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onFormSubmit = (item) => setData(item);
  const onErrors = (errors) => console.error(errors);
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '48ch' }
      }}
      autoComplete="off">
      <div>
        <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
          {fields.map((data, index) => {
            return (
              <>
                <TextField
                  id="outlined-error"
                  key={index}
                  label={data.label}
                  name={data.name}
                  error={errors[data.name]?.message}
                  {...register(data.name)}
                  placeholder={data.placeHolder}
                />
                <Typography>{errors[data.name]?.message}</Typography>
              </>
            );
          })}
          {Btn.map((data) => {
            return (
              <Button variant="contained" type={data.type}>
                {data.label}
              </Button>
            );
          })}
        </form>
      </div>
    </Box>
  );
}
