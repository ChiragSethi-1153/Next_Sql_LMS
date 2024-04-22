import LoginForm from '@/components/Login/LoginForm'
import { Box } from '@mui/material'
import React from 'react'
import styles from "./login.module.css"

const Login = () => {
  return (
    <Box className={styles.loginPage}>
      <LoginForm />
    </Box>
  )
}

export default Login
