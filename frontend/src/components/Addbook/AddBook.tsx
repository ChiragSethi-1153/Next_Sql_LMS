"use client";
import { useAppDispatch } from "@/store/hooks";
import { Box, Button, Grid, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { books } from "@/@types/bookType";
import { addBooks } from "@/features/Books/bookAction";

const AddBook = () => {
  const dispatch = useAppDispatch();

  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);
  const [inputs, setInputs] = useState<books>({
    title: "",
    author: "",
    genre: "",
    stock: null,
    description: "",
  });

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
        console.log(files);
      }
    }
  }

  function handleSubmitFile(e: any) {
    e.preventDefault()
    
      try {
        const formData =  new FormData();
        formData.append("title", inputs.title);
        formData.append("author", inputs.author);
        formData.append("genre", inputs.genre);
        formData.append("stock", String(inputs.stock));
        formData.append("description", inputs.description);

        formData.append("images", files);
        for (let i = 0; i < files.length; i++) {
          formData.append("images", files[i]);
        }
        console.log(formData.get("images"))
        dispatch(addBooks(formData));
        setInputs({
          title: "",
          author: "",
          genre: "",
          stock: null,
          description: "",
        });
        setFiles([])
      } catch (err) {
        console.log(err);
      }
    
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      marginTop={4}
    >
      <Stack
        gap={3}
        component={Paper}
        elevation={0}
        sx={{
          boxSizing: "border-box",
          width: "65%",
          maxWidth: "550px",
          padding: "20px",
        }}
      >
        <TextField
          label="Title"
          type="text"
          variant="outlined"
          value={inputs.title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />

        <TextField
          label="Author"
          type="text"
          value={inputs.author}
          onChange={(e) => setInputs({ ...inputs, author: e.target.value })}
        />
        <TextField
          label="Genre"
          type="text"
          value={inputs.genre}
          onChange={(e) => setInputs({ ...inputs, genre: e.target.value })}
        />
        <TextField
          label="Available"
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          value={inputs.stock}
          onChange={(e) => setInputs({ ...inputs, stock: e.target.value })}
        />
        <TextField
          label="Description"
          type="text"
          multiline
          rows={2}
          value={inputs.description}
          onChange={(e) =>
            setInputs({ ...inputs, description: e.target.value })
          }
        />

        <Box
          className={`p-4 w-1/3 rounded-lg  min-h-[10rem] text-center flex flex-col items-center justify-center`}
          sx={{ bgcolor: dragActive ? "#ff6e7a" : "#ffcdd2" }}
          onDragEnter={handleDragEnter}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          width={"100%"}
        >
          <input
            placeholder="fileInput"
            className="hidden"
            ref={inputRef}
            type="file"
            multiple={true}
            onChange={handleChange}
            accept=".png, .jpg, .jpeg"
          />
          <p>
            Drag & Drop Images or{" "}
            <span
              className="font-bold text-blue-600 cursor-pointer"
              onClick={openFileExplorer}
            >
              <u>Select Images</u>
            </span>{" "}
            to upload
          </p>
          <div className="flex flex-col items-center p-3">
            {files.map((file: any, idx: any) => (
              <div key={idx} className="flex flex-row space-x-5">
                <span>{file.name}</span>
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={() => removeFile(file.name, idx)}
                >
                  <CloseIcon />
                </span>
              </div>
            ))}
          </div>
        </Box>

        <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#f75866",
              boxShadow: "none",
              "&:hover": { bgcolor: "#f75866" },
            }}
            onClick={handleSubmitFile}
          >
            Submit
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              "&:hover": { color: "black", borderColor: "black" },
            }}
            onClick={(e) => {
              setInputs({
                title: "",
                author: "",
                genre: "",
                stock: null,
                description: "",
              });
              setFiles([])
            }}
          >
            Clear
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default AddBook;
