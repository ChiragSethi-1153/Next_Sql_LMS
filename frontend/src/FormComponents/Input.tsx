"use client";
import React, { useState } from "react";
import { inputField } from "@/@types/FormTypes";
import { TextField } from "@mui/material";

const Input = (props: inputField) => {
  return (
    <TextField
      label={props.label}
      variant={props.variant}
      onChange={props.onChange}
      required={props.required}
      type={props.type}
      sx={props.sxProps}
    />
  );
};

export default Input;
