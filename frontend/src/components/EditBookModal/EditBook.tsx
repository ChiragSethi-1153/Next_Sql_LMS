import { updateBook } from "@/features/Books/bookAction";
import { useAppDispatch } from "@/store/hooks";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type hideProps = () => void;

type bookprops = {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  stock: number;
  coverImage: string[];
};

const EditBook = ({ props, hide }: { props: bookprops; hide: hideProps }) => {
  console.log(props, "props");
  const dispatch = useAppDispatch()
  
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 1,
  };
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

  const [details, setDetails] = useState({
    title: props.title,
    author: props.author,
    genre: props.genre,
    description: props.description,
    stock: props.stock,
  });

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const data = {id: props.id, details}
    dispatch(updateBook(data))
    
  }

  return (
    <Box sx={style}>
      <DialogTitle>Edit Book Details</DialogTitle>
      <DialogContent dividers={scroll === "paper"}>
        <Stack gap={3}>
          <TextField
            label="Title"
            type="text"
            variant="outlined"
            value={details.title}
            onChange={(e) => setDetails({ ...details, title: e.target.value })}
          />
          <TextField
            label="Author"
            type="text"
            variant="outlined"
            value={details.author}
            onChange={(e) => setDetails({ ...details, author: e.target.value })}
          />
          <TextField
            label="Genre"
            type="text"
            variant="outlined"
            value={details.genre}
            onChange={(e) => setDetails({ ...details, genre: e.target.value })}
          />
          <TextField
            label="Available"
            type="number"
            variant="outlined"
            InputProps={{
              inputProps: { min: 0 },
            }}
            value={details.stock}
            onChange={(e) => setDetails({ ...details, stock: parseInt(e.target.value) })}
          />
          <TextField
            label="Description"
            type="text"
            variant="outlined"
            multiline
            rows={5}
            value={details.description}
            onChange={(e) =>
              setDetails({ ...details, description: e.target.value })
            }
          />
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{ width: "100%", display: "flex", justifyContent: "space-around" }}
      >
        <Button
          variant="outlined"
          onClick={() => hide()}
          sx={{ color: "black", borderColor: 'black', "&:hover": { borderColor: "black" }, }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={(e) => handleSave(e)}
          sx={{
            bgcolor: "#f75866",
            boxShadow: "none",
            "&:hover": { bgcolor: "#f75866" },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Box>
  );
};

export default EditBook;
