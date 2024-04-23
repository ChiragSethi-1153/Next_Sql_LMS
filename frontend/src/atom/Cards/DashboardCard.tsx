"use client"
import { Box, Paper, Stack, SvgIconTypeMap, Typography } from '@mui/material'
import React from 'react'

const DashboardCard = ({count, title, icon}: {count: string, title: string, icon: any}) => {
  return (
    <Paper sx={{p:2, borderRadius: 3}} elevation={0}>
        <Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{minWidth: '200px'}}>
                <Typography fontFamily={"Poppins"} fontWeight={500} fontSize={20}>{count}</Typography>
                <Box sx={{bgcolor: '#f75866', borderRadius: 10, width: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 40, }} >
                    {icon}
                </Box>
            </Stack>
        {title} 
        </Stack>
    </Paper>
  )
}

export default DashboardCard
