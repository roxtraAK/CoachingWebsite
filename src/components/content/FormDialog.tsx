import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Product } from "./TrainingFormular";
import { Box } from "@mui/material";
import { useState } from "react";
import { BookPersonalTraining } from "../../API/PersonalTrainingApi";

export default function FormDialog({
  product,
  open,
  setOpen,
  onBookingStatus,
}: {
  product: Product;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onBookingStatus: (status: number | null) => void;
}) {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");

  const handleClose = () => {
    setOpen(false);
  };

  const inputFields = ["Vorname", "Nachname", "Email", "Telefonnummer"];

  const customTextFieldStyles = {
    color: "white",
    "& .MuiInputBase-input": { color: "white" },
    "& .MuiInputLabel-root": { color: "white", fontSize: "0.8rem" },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#0288D1",
      fontSize: "0.8rem",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "info.main",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#0288D1 !important",
    },
    "& .MuiInput-underline.Mui-focused:before": {
      borderBottomColor: "#0288D1",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0288D1",
    },
  };

  const handleSubmit = async () => {
    if (product) {
      const statusCode = await BookPersonalTraining(
        { date: product.selectedDate, time: product.time },
        { firstname, lastname, email, phonenumber },
        product.selectedPackage
      );
      if (onBookingStatus) {
        onBookingStatus(statusCode);
      }
    }
    handleClose();
  };

  return (
    <Box fontFamily={"favela"}>
      <Dialog
        PaperProps={{
          sx: {
            borderRadius: 2,
            background: "linear-gradient(45deg, #393938, #111111)",
          },
        }}
        open={open}
        onClose={handleClose}
        onSubmit={handleClose}
      >
        <DialogTitle variant="h4" fontFamily={"favela"}>
          Buche jetzt dein Personaltraining
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            variant="body2"
            color={"white"}
            fontFamily={"favela"}
          >
            Gebe hier deine Adressinformationen ein um ein Personal Training zu
            buchen.
          </DialogContentText>
          {inputFields.map((field, index) => (
            <TextField
              autoFocus
              key={index}
              sx={customTextFieldStyles}
              required
              value={
                field === "Vorname"
                  ? firstname
                  : field === "Nachname"
                  ? lastname
                  : field === "Email"
                  ? email
                  : phonenumber
              }
              onChange={(e) => {
                e.target.name === "vorname"
                  ? setFirstname(e.target.value)
                  : e.target.name === "nachname"
                  ? setLastname(e.target.value)
                  : e.target.name === "email"
                  ? setEmail(e.target.value)
                  : setPhonenumber(e.target.value);
              }}
              margin="dense"
              color="info"
              id="name"
              name={field.toLowerCase()}
              label={field}
              type="text"
              fullWidth
              variant="standard"
            />
          ))}
        </DialogContent>
        <DialogActions
          sx={{ mb: 2, display: "flex", justifyContent: "center" }}
        >
          <Button variant="contained" color="info" onClick={handleClose}>
            Abbrechen
          </Button>
          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            color="info"
            type="submit"
          >
            Buchen
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
