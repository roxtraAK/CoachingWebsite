import { Box, Alert } from "@mui/material";

export default function MUIAlert({ message }: { message: string }) {
  return (
    <Box>
      <Alert variant="filled" severity="error">
        {message}
      </Alert>
    </Box>
  );
}
