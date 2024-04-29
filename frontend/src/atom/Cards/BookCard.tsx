"use client";
import { books } from "@/features/Books/bookSlice";
import { useAppSelector } from "@/store/hooks";
import { Paper, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ items }: { items: books }) => {
  console.log(items);

  const imageUrl: string = `http://localhost:8080/${items.coverImage[0]}`;
  console.log(imageUrl);
  return (
    <Link href={`/admin/all-books/${items.id}`}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          m: 2,
          alignItems: "center",
        }}
        gap={1}
      >
        <Paper
          elevation={10}
          sx={{ height: "150px", width: "110px", cursor: "pointer" }}
        >
          <Image
            src={imageUrl}
            width={100}
            height={100}
            style={{ width: "100%", height: "100%", marginBottom: 6 }}
            alt="Picture of the book"
          />
          <Typography textAlign={"left"} fontSize={15} fontFamily={"Poppins"}>
            {items.title}
          </Typography>
        </Paper>
      </Stack>
    </Link>
  );
};

export default BookCard;
