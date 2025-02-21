import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export function Formular() {
  return (
    <Paper
      elevation={24}
      sx={{
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
        <Typography variant="h4" align="center">
          Buche jetzt dein Erstgespräch!
        </Typography>
        <Typography
          sx={{ marginTop: "1vh" }}
          variant="subtitle1"
          align="center"
          noWrap={false}
        >
          Du willst jetzt noch dein Leben verändern? Dann buche jetzt ein
          unverbindliches Erstgespräch!
        </Typography>
      </Box>
      <form>
        <Stack spacing={3}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1">Vorname</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField fullWidth variant="standard" color="info" />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1">Nachname</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField fullWidth variant="standard" color="info" />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1">E-Mail</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                variant="standard"
                type="email"
                color="info"
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1">Telefon</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField fullWidth variant="standard" type="tel" color="info" />
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
