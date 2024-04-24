'use client'
import { books } from '@/features/Books/bookSlice'
import { Paper, Skeleton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const BookCard = ({items}: {items: books}) => {
  console.log(items.coverImage[0]) 
  const imageUrl : string = `http://localhost:8080/${items.coverImage[0]}`
    console.log(imageUrl)
  return (
    <Stack sx={{display: 'flex', flexDirection: 'column', m:2,  alignItems: 'center'}} gap={1} >
        <Paper elevation={10} sx={{height: '150px', width: '110px', cursor: 'pointer'}}>
        <Image
            src={imageUrl}
            width={100}
            height={100}
            style={{width: '100%', height:'100%'}}
            alt="Picture of the book"
           
        />
        </Paper>
        <Typography textAlign={'left'} fontSize={18} fontFamily={"Poppins"} >{items.title}</Typography>
    </Stack>
  )
}

export default BookCard
