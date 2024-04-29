"use client"
import { useAppSelector } from '@/store/hooks'
import { RootState } from '@/store/store'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const Welcome = () => {

    const user = useAppSelector((state) => state.auth.content)
    
    let date = new Date()
    let day = date.getDay()
    let currentDate = date.getDate()
    let currentMonth = date.getMonth()
    let currentYear = date.getFullYear()

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    let currentDay = `${month[currentMonth]} ${currentDate}, ${currentYear} | ${weekday[day]} `



  return (
    <Stack>
    <Typography fontWeight={500} fontSize={24} fontFamily={"Poppins"} >
      Hello, <span style={{color: '#f75866'}}>{user?.name}!</span>
    </Typography>
    <Typography fontWeight={500} fontSize={16} fontFamily={"Poppins"}>
        {currentDay}
    </Typography>
    </Stack>
  )
}

export default Welcome
