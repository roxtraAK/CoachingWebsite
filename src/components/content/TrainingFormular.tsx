import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useIsMobile } from "../../Hooks/useIsMobile";
import DateTimePicker from "./DatePicker";
import MUIAlert from "../../Alert/Alert";
import { ErrorMessages } from "../../Alert/AlertMessages";
import FormDialog from "./FormDialog";
import { BookingResponse } from "../../API/PersonalTrainingApi";

export type Product = {
  selectedPackage: string;
  selectedDate: string | null;
  time: string;
};

export function TrainingFormular() {
  const isMobile = useIsMobile();

  const [open, setOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<{
    selectedDate: string | null;
    time: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [bookingResponse, setbookingResponse] =
    useState<BookingResponse | null>(null);

  const handlebookingResponse = (response: BookingResponse | null) => {
    setbookingResponse(response);
    setTimeout(() => {
      setbookingResponse(null);
    }, 5000);
  };

  const packages = [
    "1 Std. Personal Training",
    "2 Std. Personal Training",
    "3 Std. Personal Training",
  ];

  const validateInputs = (inputs: {
    selectedPackage: string;
    selectedDate: string | null;
    time: string;
  }) => {
    if (!inputs.selectedPackage) {
      setErrorMessage(ErrorMessages.PackageError);
      return false;
    }
    if (!inputs.selectedDate) {
      setErrorMessage(ErrorMessages.DateError);
      return false;
    }
    if (!inputs.time) {
      setErrorMessage(ErrorMessages.TimeError);
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSelection = (dateTime: string) => {
    const [formattedDate, time] = dateTime.split(" ");
    setSelectedProduct({
      selectedDate: formattedDate,
      time,
    });
    console.log("Ausgewähltes Training:", formattedDate, time);
  };

  const handleOpenForm = (): void => {
    if (selectedProduct && selectedPackage) {
      setOpen(true);
    } else {
      console.warn("Bitte ein Paket, Datum und Uhrzeit auswählen.");
    }
  };

  return (
    <Box>
      <Paper
        elevation={24}
        sx={{
          overflow: "auto",
          paddingTop: 3,
          paddingRight: 6,
          paddingLeft: 6,
          minHeight: isMobile ? "100vh" : "72vh",
          maxWidth: isMobile ? "87vw" : "45vw",
          background: "linear-gradient(45deg, #393938, #111111)",
          borderRadius: 5,
        }}
      >
        <Box sx={{ marginBottom: 2, padding: 1 }}>
          <Typography fontFamily={"favela"} variant="h4" align="center">
            Buche jetzt dein Personal Training!
          </Typography>
        </Box>
        <Box sx={{ padding: 2, color: "white" }}>
          <FormControl fullWidth variant="filled">
            <Typography variant="h6" fontFamily="favela">
              Wähle dein Paket aus
            </Typography>
            <Select
              color="info"
              variant="filled"
              value={selectedPackage}
              onChange={(event: SelectChangeEvent) =>
                setSelectedPackage(event.target.value)
              }
              sx={{
                fontFamily: "favela",
                backgroundColor: "transparent",
                "&.MuiFilledInput-root": {
                  backgroundColor: "transparent",
                },
                "&:before": {
                  borderBottom: "2px solid",
                  borderColor: "info.main",
                },
                "&:hover:before": {
                  borderBottom: "2px solid",
                  borderColor: "info.light",
                },
                "&:after": {
                  borderBottom: "2px solid",
                  borderColor: "info.main",
                },
                "& .MuiSelect-select": {
                  color: "white",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#333",
                    color: "white",
                  },
                },
              }}
            >
              {packages.map((pkg, index) => (
                <MenuItem
                  sx={{ fontFamily: "favela", color: "white" }}
                  key={index}
                  value={pkg}
                >
                  {pkg}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ pt: 5 }}>
            <Typography sx={{ pb: 3 }} variant="h6" fontFamily="favela">
              Wähle ein Datum und eine Uhrzeit
            </Typography>
            <DateTimePicker onSelect={handleSelection} />
          </Box>
        </Box>
        <Stack sx={{ alignItems: "center" }}>
          {errorMessage && !selectedPackage ? (
            <Box sx={{ paddingTop: 1, pb: 1 }}>
              <MUIAlert severity="error" width="60vh" message={errorMessage} />
            </Box>
          ) : null}
          <Button
            sx={{
              mb: 3,
              mt: 3,
              height: "50px",
              fontFamily: "favela",
            }}
            color="info"
            variant="contained"
            onClick={() => {
              const isValid = validateInputs({
                selectedPackage,
                selectedDate: selectedProduct?.selectedDate ?? null,
                time: selectedProduct?.time ?? "",
              });
              if (isValid) {
                handleOpenForm();
              }
            }}
          >
            <Typography fontFamily="favela">Termin jetzt Buchen</Typography>
          </Button>
        </Stack>
        <FormDialog
          onBookingResponse={handlebookingResponse}
          product={{
            selectedPackage,
            selectedDate: selectedProduct?.selectedDate ?? null,
            time: selectedProduct?.time ?? "",
          }}
          open={open}
          setOpen={setOpen}
        />
      </Paper>
      <Box sx={{ pt: 4, pb: 2 }}>
        {bookingResponse ? (
          <MUIAlert
            width="80vh"
            message={
              bookingResponse.status === 200
                ? "Training erfolgreich gebucht"
                : "Das Training konnte nicht gebucht werden"
            }
            severity={bookingResponse.status === 200 ? "success" : "error"}
          />
        ) : undefined}
      </Box>
    </Box>
  );
}
