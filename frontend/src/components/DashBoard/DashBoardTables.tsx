"use client";
import BasicTable from "@/atom/Table/Table";
import { Grid, Stack } from "@mui/material";
import React from "react";

const DashBoardTables = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={11} lg={6}>
        <BasicTable />
      </Grid>
      <Grid item xs={12} md={11} lg={6}>
        <BasicTable />
      </Grid>
    </Grid>
  );
};

export default DashBoardTables;
