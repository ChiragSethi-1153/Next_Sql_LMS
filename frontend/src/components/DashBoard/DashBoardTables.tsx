"use client";
import BasicTable from "@/atom/Table/Table";
import { getBooks } from "@/features/Books/bookAction";
import { getUsers } from "@/features/Users/userAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Grid, Stack } from "@mui/material";
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
          <BasicTable rows={books} headings={["Book Id", "Title", "Author", "Genre", "Available", "Action"]} tableHeading="Book List" tableData="books" />

      </Grid>
      <Grid item xs={12} md={11} lg={6}>
        <BasicTable rows={users} headings={["User Id", "Name", "Email", "Books Borrowed", "Action"]} tableHeading="User List" tableData="users" />
      </Grid>
    </Grid>
  );
};

export default DashBoardTables;
