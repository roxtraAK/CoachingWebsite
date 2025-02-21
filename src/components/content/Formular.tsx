import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function Formular() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");

  const customTextFieldStyles = {
    "& .MuiInputBase-input": { color: "white" },
    "& .MuiInput-underline:before": { borderBottomColor: "white" },
    "& .MuiInput-underline:hover:before": { borderBottomColor: "#0288D1" },
  };

  return (
    <Paper
      elevation={24}
      sx={{
        overflow: "auto",
        paddingTop: 5,
        paddingRight: 7,
        paddingLeft: 2,
        height: "70vh",
        width: "40vw",
        background: "linear-gradient(45deg, #393938, #111111)",
        borderRadius: 3,
      }}
    >
      <Box sx={{ marginBottom: 2, padding: 1 }}>
        <Typography fontFamily={"favela"} variant="h4" align="center">
          Buche jetzt dein Erstgespräch!
        </Typography>
        <Typography
          fontFamily={"favela"}
          sx={{ marginTop: "1vh" }}
          variant="subtitle2"
          align="center"
        >
          Du willst jetzt noch dein Leben verändern?
          <br />
          Dann buche jetzt ein unverbindliches Erstgespräch!
        </Typography>
      </Box>
      <form>
        <Stack spacing={3} sx={{ color: "white" }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <Typography fontFamily={"favela"} variant="body1">
                Vorname
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                sx={customTextFieldStyles}
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                fullWidth
                variant="standard"
                color="info"
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <Typography fontFamily={"favela"} variant="body1">
                Nachname
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                sx={customTextFieldStyles}
                fullWidth
                variant="standard"
                color="info"
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <Typography fontFamily={"favela"} variant="body1">
                E-Mail
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={customTextFieldStyles}
                fullWidth
                variant="standard"
                type="email"
                color="info"
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <Typography fontFamily={"favela"} variant="body1">
                Telefon
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                sx={customTextFieldStyles}
                fullWidth
                variant="standard"
                type="tel"
                color="info"
              />
            </Grid>
          </Grid>
          <Stack sx={{ alignItems: "center", paddingTop: 7 }}>
            <Button
              sx={{ width: "20vw", height: "50px" }}
              color="info"
              variant="contained"
            >
              Senden
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
}
