"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Stack, Typography } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { books } from "@/features/Books/bookSlice";
import { tableHeadings } from "@/@types/tableTypes";
import { users } from "@/@types/userType";
import Cell from "./Cell";


export default function BasicTable({
  rows,
  headings,
  tableHeading,
  tableData
}: {
  rows: books[] | users[];
  headings: tableHeadings;
  tableHeading: string,
  tableData: string
}) {
  console.log(rows);
  // type t =  ReturnType<typeof rows>
  // console.log(t)

  return (
    <TableContainer
      component={Paper}
      sx={{ boxSizing: "border-box", pl: 2, pr: 2, borderRadius: 8 }}
      elevation={0}
    >
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-between"}
        boxSizing={"border-box"}
        padding={2}
      >
        <Typography fontFamily={"Poppins"} fontWeight={500} fontSize={19}>
          {tableHeading}
        </Typography>
        {
        tableData=== "books" ?
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
          Add Book
        </Button> 
        : <></>
        }
      </Stack>

      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
            headings.map((i) => {
              return (
                <TableCell
                  key={i}
                  align="left"
                  sx={{ color: "#b5b4b4", fontFamily: "Poppins" }}
                >
                  {i}
                </TableCell>
              );
            })}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {
          tableData === "books" ?

          rows.map((row) => (
            
            // <Cell key={row.id} row={row} />
            <TableRow
              key={row.id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                {row.id.substring(0, 8)}
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                {row.title}
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                {row.author}
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                {row.genre}
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                {row.stock}
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                <MoreVertOutlinedIcon />
              </TableCell>
            </TableRow>
          ))
          : 
          rows.map((row) => (
            
            // <Cell key={row.id} row={row} />
            <TableRow
              key={row.id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                {row.id.substring(0, 8)}
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                {row.email}
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                {row.borrowed}
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                <MoreVertOutlinedIcon />
              </TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
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
          See All
        </Button>
      </Box>
    </TableContainer>
  );
}
