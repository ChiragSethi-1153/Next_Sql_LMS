import { Box } from '@mui/material'
import React from 'react'
import styles from './registration.module.css'
import RegisterForm from '@/components/Register/RegisterForm'

const Register = () => {
  return (
    
    <Box className={styles.signupPage}>
      <RegisterForm />
    </Box>
  )
}

export default Register
