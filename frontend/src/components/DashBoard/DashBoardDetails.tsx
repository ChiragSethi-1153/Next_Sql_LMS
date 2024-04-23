import { Stack } from '@mui/material'
import React from 'react'
import DashboardCard from '../../atom/Cards/DashboardCard'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const DashBoardDetails = () => {
  return (
    <Stack direction={'row'} gap={3} flexWrap={'wrap'}>
      <DashboardCard count={"123"} title={"Total Books"} icon={<LibraryBooksOutlinedIcon sx={{color: 'white'}} />} />
      <DashboardCard count={"20"} title={"Total Members"} icon={<PersonOutlineOutlinedIcon sx={{color: 'white'}} />} />
      <DashboardCard count={"23"} title={"Currently Borrowed"} icon={<FeedOutlinedIcon sx={{color: 'white'}} />} />
    </Stack>
  )
}

export default DashBoardDetails
