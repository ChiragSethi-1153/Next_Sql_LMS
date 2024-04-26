"use client";
import BasicTable from "@/atom/Table/Table";
import { getBooks } from "@/features/Books/bookAction";
import { getUsers } from "@/features/Users/userAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";

const DashBoardTables = () => {

  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getBooks())
    dispatch(getUsers())
  }, [dispatch])

  const books = useAppSelector((state)=> state.book.content)
  const users = useAppSelector((state) => state.user.content)
  console.log(users)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={11} lg={6}>
        <Paper elevation={0} sx={{ boxSizing: "border-box", pl: 2, pr: 2, borderRadius: 8 }} >
        <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-between"}
        boxSizing={"border-box"}
        padding={2}
        paddingBottom={0}
      >
        <Typography fontFamily={"Poppins"} fontWeight={500} fontSize={19} >
          Book List
        </Typography>
        
          <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "black",
            borderColor: "black",
            "&:hover": {
              color: "black",
              borderColor: "black",
              bgcolor: "#f8f9f8",
            },
          }} 
          >
            <Link href={'/admin/add-book'} >
          Add Book
          </Link>
        </Button> 
      </Stack>

          <BasicTable rows={books} headings={["Book Id", "Title", "Author", "Genre", "Available", "Action"]} tableData="books" />
        
          <Box
        sx={{
          display: "flex",
          width: "100%",
          boxSizing: "border-box",
          p: 1,
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            color: "#f75866",
            fontWeight: 600,
            "&:hover": { bgcolor: "#f7586629" },
          }}
        >
          <Link href={'/admin/all-books'} >
          See All
          </Link>
        </Button>
      </Box>
        
        </Paper>

      </Grid>
      <Grid item xs={12} md={11} lg={6}>

      <Paper elevation={0} sx={{ boxSizing: "border-box", pl: 2, pr: 2, borderRadius: 8 }} >
        <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-between"}
        boxSizing={"border-box"}
        padding={2}
      >
        <Typography fontFamily={"Poppins"} fontWeight={500} fontSize={19}>
          User List
        </Typography>
        
      </Stack>

        <BasicTable rows={users} headings={["User Id", "Name", "Email", "Books Borrowed", "Action"]} tableData="users" />
      
        <Box
        sx={{
          display: "flex",
          width: "100%",
          boxSizing: "border-box",
          p: 1,
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            color: "#f75866",
            fontWeight: 600,
            "&:hover": { bgcolor: "#f7586629" },
          }}

        >
          <Link href={'/admin/all-users'} >
          See All
          </Link>
        </Button>
      </Box>

      </Paper>
      </Grid>
    </Grid>
  );
};

export default DashBoardTables;
