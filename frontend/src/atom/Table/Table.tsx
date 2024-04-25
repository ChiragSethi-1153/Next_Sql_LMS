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

function createData(
  bookId: string,
  title: string,
  author: string,
  genre: string,
  stock: number,
  action: any
) {
  return { bookId, title, author, genre, stock, action };
}



export default function BasicTable({rows}: {rows: books[]}) {
  console.log(rows)
  
  // const rows = [
  //   createData(items[0].id,items[0].title,items[0].author,items[0].genre,items[0].stock,<MoreVertOutlinedIcon />),
  //   createData(items[1].id,items[1].title,items[1].author,items[1].genre,items[1].stock,<MoreVertOutlinedIcon />),
  //   createData(items[2].id,items[2].title,items[2].author,items[2].genre,items[2].stock,<MoreVertOutlinedIcon />),
  //   ];
  
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
          Books List
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
          Add Book
        </Button>
      </Stack>

      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              sx={{ color: "#b5b4b4", fontFamily: "Poppins" }}
            >
              Book Id
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: "#b5b4b4", fontFamily: "Poppins" }}
            >
              Title
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: "#b5b4b4", fontFamily: "Poppins" }}
            >
              Author
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: "#b5b4b4", fontFamily: "Poppins" }}
            >
              Genre
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: "#b5b4b4", fontFamily: "Poppins" }}
            >
              Available
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: "#b5b4b4", fontFamily: "Poppins" }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="left"
                sx={{ color: "black", fontFamily: "Poppins" }}
              >
                {row.id}
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
          ))}
        </TableBody>
      </Table>
      <Box sx={{display: "flex", width: '100%', boxSizing: 'border-box', p:1, justifyContent: 'flex-end'}}>
        <Button sx={{textTransform: 'none', color: '#f75866', fontWeight: 600, "&:hover": {bgcolor: '#f7586629'} }} >See All</Button>
      </Box>
    </TableContainer>
  );
}
