import { useState } from "react";
import AdAddFetch from "../../../../Api/adAddFetch";
import AddAdForm from "./AddAdForm";
import AddAdHeader from "./AddAdHeader";
import { Alert, Snackbar } from "@mui/material";

const AddAdPageMain = () => {
  const [open, setOpen] = useState(false);
  const {
    file,
    title,
    setTitle,
    salary,
    setSalary,
    description,
    setDescription,
    handleFileChange,
    addAd,
  } = AdAddFetch();

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <AddAdHeader />
      <Snackbar
        autoHideDuration={2000}
        open={open}
        message="Skelbimas sėkmingai patalpintas!"
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Skelbimas sėkmingai patalpintas!
        </Alert>
      </Snackbar>
      <AddAdForm
        file={file}
        title={title}
        salary={salary}
        description={description}
        setTitle={setTitle}
        setSalary={setSalary}
        setDescription={setDescription}
        addAd={addAd}
        handleFileChange={handleFileChange}
        handleClick={handleClick}
      />
    </>
  );
};

export default AddAdPageMain;
