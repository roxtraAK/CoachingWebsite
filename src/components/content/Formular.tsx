import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import CoachingApi from "../../API/CoachingApi";
import MUIAlert from "../../Alert/Alert";
import { ErrorMessages } from "../../Alert/AlertMessages";
import { useIsMobile } from "../../Hooks/useIsMobile";

export function Formular() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>();

  const isMobile = useIsMobile();

  useEffect(() => {
    // Sichern, dass beim Laden der Seite der Hover-Effekt entfernt wird
    const style = document.styleSheets[0];
    style.insertRule(
      ".MuiInput-underline:hover:before { border-bottom-color: #0288D1 !important; }",
      style.cssRules.length
    );
  }, []);

  const validateInputs = (inputs: {
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: string;
  }) => {
    if (!inputs.firstname) {
      setErrorMessage(ErrorMessages.FirstnameError);
      return;
    }
    if (!inputs.lastname) {
      setErrorMessage(ErrorMessages.LastnameError);
      return;
    }
    if (!inputs.email) {
      setErrorMessage(ErrorMessages.EmailError);
      return;
    }
    if (!inputs.phonenumber || !inputs.phonenumber.startsWith("+")) {
      setErrorMessage(ErrorMessages.PhonenumberError);
      return;
    }
  };

  const customTextFieldStyles = {
    "& .MuiInputBase-input": { color: "white" },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline.Mui-focused:before": {
      borderBottomColor: "#0288D1",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0288D1",
    },
  };

  return (
    <Paper
      elevation={24}
      sx={{
        overflow: "auto",
        paddingTop: 3,
        paddingRight: 5,
        paddingLeft: 5,
        height: isMobile ? "75%" : "72vh",
        width: isMobile ? "87vw" : "45vw",
        background: "linear-gradient(45deg, #393938, #111111)",
        borderRadius: 5,
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
            <Grid item xs={2}>
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
            <Grid item xs={2}>
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
            <Grid item xs={2}>
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
            <Grid item xs={2}>
              <Typography fontFamily={"favela"} variant="body1">
                Telefon
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                value={phonenumber}
                required
                onChange={(e) => setPhonenumber(e.target.value)}
                sx={customTextFieldStyles}
                fullWidth
                variant="standard"
                type="tel"
                color="info"
              />
            </Grid>
          </Grid>
          <Stack sx={{ alignItems: "center", paddingTop: 5 }}>
            <Button
              sx={{
                width: isMobile ? "60vw" : "25vw",
                height: "50px",
                fontFamily: "favela",
              }}
              color="info"
              variant="contained"
              onClick={() => {
                validateInputs({ firstname, lastname, email, phonenumber });
                if (!errorMessage)
                  CoachingApi({ firstname, lastname, email, phonenumber });
              }}
            >
              Jetzt Erstgespräch Buchen
            </Button>
            {errorMessage && !isMobile ? (
              <Box sx={{ paddingTop: 3 }}>
                <MUIAlert message={errorMessage} />
              </Box>
            ) : null}
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
}
