"use client"
import BookCard from '@/atom/Cards/BookCard'
import { getBooks } from '@/features/Books/bookAction'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Grid } from '@mui/material'
import React, { useEffect } from 'react'

const AllBooks = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])

    const books = useAppSelector((state) => state.book.content)
    
    console.log(books)
  return (
    <Grid container gap={3} >
        {/* <Grid item xs={12} sm={6} m={4} lg={2} > */}

        {
            books && books.length>0 &&
            books.map((items) => {
                return (
                    <BookCard key={items.id} items={items} />
                )
            })
        }
        {/* </Grid> */}
    </Grid >
  )
}

export default AllBooks
