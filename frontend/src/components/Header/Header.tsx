import { Typography } from '@mui/material'
import React from 'react'

const Header = ({heading}: {heading: string}) => {
  return (
    <Typography fontSize={24} fontWeight={600} fontFamily={"Poppins"}>
      {heading}
    </Typography>
  )
}

export default Header
