import AddBook from '@/components/Addbook/AddBook'
import Header from '@/components/Header/Header'
import { Stack } from '@mui/material'
import React from 'react'

const AddBookPage = () => {
  return (
    <Stack gap={4}>
      <Header heading='Add Book' />
      <AddBook />
    </Stack>
  )
}

export default AddBookPage
