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
import MUIAlert from "../../Alert/Alert";
import { useIsMobile } from "../../Hooks/useIsMobile";
import { useShoppingCartContext } from "../../Hooks/useShoppingCartContext";
import DateTimePicker from "./DatePicker";

export function TrainingFormular() {
  const cart = useShoppingCartContext();
  const isMobile = useIsMobile();

  const packages = [
    "1 Std. Personal Training",
    "2 Std. Personal Training",
    "3 Std. Personal Training",
  ];

  const [selectedPackage, setSelectedPackage] = useState<string>("");

  return (
    <Paper
      elevation={24}
      sx={{
        overflow: "auto",
        paddingTop: 3,
        paddingRight: 6,
        paddingLeft: 6,
        height: isMobile ? "100%" : "72vh",
        width: isMobile ? "87vw" : "45vw",
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
          <DateTimePicker />
        </Box>
      </Box>
      <Stack sx={{ alignItems: "center", paddingTop: 5 }}>
        <Button
          sx={{
            mb: 3,
            height: "50px",
            fontFamily: "favela",
          }}
          color="info"
          variant="contained"
          onClick={() => {
            cart.setProductCount((prev) => prev + 1);
          }}
        >
          Zum Warenkorb hinzufügen
        </Button>
      </Stack>
    </Paper>
  );
}
