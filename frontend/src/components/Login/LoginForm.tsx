/* eslint-disable react/no-unescaped-entities */
"use client"
import { Button, IconButton, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from "./Login.module.css"
import { useAppDispatch } from '@/store/hooks';
import { z } from 'zod';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { loginUsers } from '@/features/Auth/authAction';
import CloseIcon from '@mui/icons-material/Close';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export const loginSchema = z.object({
  
  email: z.string().email(),
  password: z.string().min(8, "Password must be atleast 8 characters"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;


const LoginForm = () => {


  const router = useRouter()
 
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
    } = useForm<LoginSchemaType>({
      resolver: zodResolver(loginSchema),
    });
    
    const handleClose = () => {
      setOpen(false);
  };
  const action = (
    <React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    </React.Fragment>
);

    const onSubmit = async (data: FieldValues) => {
      // console.log(data)
      await dispatch(loginUsers(data)).then((response: any)=> {

        if(!response.payload) {
            console.log(response.error.message,'error');
            // add snackbar showing wrong credentials
            setOpen(true);

            router.push("/login");
        }
        else {
            console.log("response payload", response.payload);
            
            const role = response?.payload?.user?.role;
            console.log(role);
            if(role === 'admin') {
              router.push('/admin')
              reset()
            }
            else{
              router.push('/');
              reset()
            }
           redirect('/')
        }
    });;

    };


  return (
    <Paper className={styles.loginFormBox}>
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
          Sign In
        </Typography>


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
          className={styles.loginBtn}
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          Sign in
        </Button>
        
        <Link href={'/register'} style={{textAlign: 'center'}}>
          Don't have an account{" "}
          <span
            style={{ color: "#0b66c2", fontWeight: "600", cursor: "pointer" }}
          >
            Sign Up?
          </span>
        </Link>
      </Stack>
      <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Invalid credentials"
                    action={action}
                />
    </Paper>
  )
}

export default LoginForm
