"use client";
import { getBook } from "@/features/Books/bookAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, Modal, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./BookDetails.module.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditBook from "../EditBookModal/EditBook";

const BookDetails = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useAppDispatch();
  const { bookId } = useParams();
  const id: string | string[] = bookId;
  console.log(id);

  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  const book = useAppSelector((state) => state.book.single);
  console.log(book);

  const imageUrl: string = `http://localhost:8080/${book.coverImage[0]}`;
  console.log(imageUrl);

  return (
    <Paper elevation={0} className={styles.detailsPage}>
      <Box className={styles.imgBox}>
        <Image
          src={imageUrl}
          width={100}
          height={50}
          className={styles.bookImage}
          alt="Picture of the book"
        />
      </Box>

      <Stack className={styles.bookDetails}>
        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              fontFamily={"Poppins"}
              fontWeight={500}
              fontSize={45}
              marginBottom={2}
            >
              {book.title}
            </Typography>
            <Button
              variant="contained"
              className={styles.editBookBtn}
              onClick={handleOpen}
            >
              <EditOutlinedIcon sx={{ color: "white" }} />
            </Button>
          </Box>
          <Typography
            fontFamily={"Poppins"}
            fontWeight={500}
            fontSize={20}
            marginBottom={1}
          >
            Written By: {book.author}
          </Typography>
          <Typography
            fontFamily={"Poppins"}
            fontWeight={500}
            fontSize={20}
            marginBottom={2}
          >
            Genre: {book.genre}
          </Typography>
          <Typography
            fontFamily={"Poppins"}
            fontWeight={400}
            fontSize={19}
            textAlign={"justify"}
          >
            {book.description}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={4}
        >
          <Typography
            fontFamily={"Poppins"}
            fontWeight={500}
            fontSize={19}
            margin={1}
          >
            Currently available: {book.stock}
          </Typography>
        </Box>
      </Stack>

      {
      open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >

          <EditBook
            props={book}
            hide={() => setOpen(false)}
          />
        </Modal>
      )
      }
    </Paper>
  );
};

export default BookDetails;
