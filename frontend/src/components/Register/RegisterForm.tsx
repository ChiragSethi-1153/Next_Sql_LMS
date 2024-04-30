"use client";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./Register.module.css";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/store/hooks";
import { registerUsers } from "@/features/Auth/authAction";
import Link from "next/link";

export const registerSchema = z.object({
  role: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, "Password must be atleast 8 characters"),
});

export type registerationSchema = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<registerationSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    // console.log(data)
    dispatch(registerUsers(data));
    reset();
  };

  return (
    <Paper className={styles.signupFormBox}>
      <Stack className={styles.formStack} gap={1} >
        <Typography
          align="left"
          sx={{
            height: "fit-content",
            fontWeight: "600",
            fontSize: "32px",
            marginBottom: "10px",
          }}
        >
          Sign up
        </Typography>

        <FormControl fullWidth sx={{ marginBottom: "10px" }}>
          <InputLabel>Role</InputLabel>
          <Select
            {...register("role", {
              required: "name is required",
            })}
            label="Role"
            required
          >
            <MenuItem value={"user"}>User</MenuItem>
            <MenuItem value={"admin"}>Admin</MenuItem>
          </Select>
        </FormControl>

        <TextField
          {...register("name", {
            required: "name is required",
          })}
          label="Name"
          type="text"
          variant="outlined"
        />
        {errors.name && (
          <Typography
            sx={{ color: "red" }}
          >{`${errors.name.message}`}</Typography>
        )}
        <TextField
          {...register("email")}
          label="Email"
          type="email"
          variant="outlined"
        />
        {errors.email && (
          <Typography
            sx={{ color: "red" }}
          >{`${errors.email.message}`}</Typography>
        )}
        <TextField
          {...register("password")}
          label="Password"
          type="text"
          variant="outlined"
        />
        {errors.password && (
          <Typography
            sx={{ color: "red" }}
          >{`${errors.password.message}`}</Typography>
        )}

        <Button
          variant="contained"
          className={styles.signupBtn}
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          Sign up
        </Button>

        <Link href={'/login'} style={{textAlign: 'center'}}>
          Already have an account{" "}
          <span
            style={{ color: "#f75866", fontWeight: "600", cursor: "pointer" }}
          >
            Login?
          </span>
        </Link>
      </Stack>
    </Paper>
  );
};

export default RegisterForm;
