"use client";
import React, { useState } from "react";
import { FormControl, TextField, FormHelperText } from "@mui/material";

export default function FormControle({ fields }) {
  // Inicializa o estado para armazenar cada campo com base nos nomes dados em `fields`
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = { value: "", error: false }; // Cada campo começa vazio e sem erro
    return acc;
  }, {});

  const [formState, setFormState] = useState(initialState);

  const handleChange = (event, name, type) => {
    const value = event.target.value;

    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        value,
        error:
          type === "email" &&
          value &&
          !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value), // Valida apenas campos de email
      },
    }));
  };

  return (
    <>
      {fields.map((field) => (
        <FormControl
          key={field.name}
          fullWidth
          error={formState[field.name].error}
        >
          <TextField
            label={field.label}
            value={formState[field.name].value} // Valor específico do campo
            onChange={(e) => handleChange(e, field.name, field.type)} // Atualiza apenas o campo correspondente
            variant="outlined"
            required={field.required}
            type={field.type}
            sx={{ marginBottom: 1 }}
          />
          {formState[field.name].error && (
            <FormHelperText>{field.label} inválido</FormHelperText>
          )}
        </FormControl>
      ))}
    </>
  );
}
