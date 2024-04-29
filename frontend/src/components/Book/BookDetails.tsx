"use client"
import { getBook } from '@/features/Books/bookAction'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Box, Paper, Stack } from '@mui/material'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const BookDetails = () => {

  const dispatch = useAppDispatch()
  const {bookId} = useParams()
  const id:string | string[] = bookId
  console.log(id)

  useEffect(() => {
    dispatch(getBook(id))
  }, [dispatch, id])

  const book = useAppSelector((state) => state.book.single)
  console.log(book)
  
  const imageUrl: string = `http://localhost:8080/${book.coverImage[0]}`;
  console.log(imageUrl);

  return (
    <Paper elevation={0} sx={{p:3, height: "75vh",display: 'flex',  alignItems: 'center', justifyContent: 'center'}} >
      <Box sx={{width: "50%", display: 'flex',  alignItems: 'center', justifyContent: 'center'}} >
      <Image
            src={imageUrl}
            width={100}
            height={50}
            style={{ width: "40%" }}
            alt="Picture of the book"
            />
      </Box>
      <Stack sx={{width: '50%'}} >
        ssxs
      </Stack>
    </Paper>
  )
}

export default BookDetails
