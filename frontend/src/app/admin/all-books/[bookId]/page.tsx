import BookDetails from '@/components/Book/BookDetails'
import Header from '@/components/Header/Header'
import { Stack } from '@mui/material'
import React from 'react'

const Book = () => {
  return (
    <Stack gap={3} >
      <Header heading='Book Details' />
      <BookDetails />
    </Stack>
  )
}

export default Book
