"use client";
import BasicTable from "@/atom/Table/Table";
import { getBooks } from "@/features/Books/bookAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";

const DashBoardTables = () => {

  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  const books = useAppSelector((state)=> state.book.content)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={11} lg={6}>
          <BasicTable rows={books} />

      </Grid>
      <Grid item xs={12} md={11} lg={6}>
        <BasicTable rows={books} />
      </Grid>
    </Grid>
  );
};

export default DashBoardTables;
