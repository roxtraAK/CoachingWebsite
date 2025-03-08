import { Box, Alert } from "@mui/material";

export default function MUIAlert({
  message,
  width,
}: {
  message: string | undefined;
  width?: string;
}) {
  return (
    <Box>
      <Alert
        sx={{ minWidth: width, justifyContent: "center" }}
        variant="filled"
        severity="error"
      >
        {message}
      </Alert>
    </Box>
  );
}
