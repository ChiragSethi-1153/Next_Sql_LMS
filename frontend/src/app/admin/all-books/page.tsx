import AllBooks from '@/components/AllBooks/AllBooks'
import Header from '@/components/Header/Header'
import { Stack } from '@mui/material'
import React from 'react'

const AllBooksPage = () => {
  return (
    <Stack>
      <Header heading='All Books' />
      <AllBooks />
    </Stack>
  )
}

export default AllBooksPage
