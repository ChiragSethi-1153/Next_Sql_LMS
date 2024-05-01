import { useAppSelector } from '@/store/hooks'
import { Box, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import styles from './SearchList.module.css'
import Link from 'next/link'
import Image from 'next/image'

type clear = () => void

const SearchList = ({clear}: {clear: clear}) => {

    const searchData = useAppSelector((state) => state.book.searchedContent)

    console.log(searchData)
    
  
  return (
    <Box className={styles.searchList}>
     {
      
      searchData && searchData.length > 0 ? 
      searchData.map((i) => {
        const imageUrl: string = `http://localhost:8080/${i.coverImage[0]}`;

        return(
        <Link 
          key={i.id} 
          href={`/admin/all-books/${i.id}`} 
          className={styles.searchLink}
          onClick={clear}
          >
          <ListItemIcon>
          <Image
            src={imageUrl}
            width={40}
            height={50}
            style={{ width: "40px", height: "60px", marginBottom: 6 }}
            alt="Picture of the book"
          />
        </ListItemIcon>
        <Stack justifyContent={'flex-start'} height={'100%'} >
        <Typography fontFamily={"Poppins"} fontWeight={500} fontSize={18} >{i.title}</Typography>
        <Typography fontFamily={"Poppins"} fontWeight={400} fontSize={16}>{i.author}</Typography>
        </Stack>
        </Link>
      )
    }) :
    <Box sx={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
      <Typography fontFamily={"Poppins"} fontWeight={600} fontSize={20} >No Book Found</Typography>
    </Box>
     }
    </Box>
  )
}

export default SearchList
