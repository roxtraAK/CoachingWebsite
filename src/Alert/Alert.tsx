import { Box, Alert } from "@mui/material";

export default function MUIAlert({
  message,
  width,
  severity,
}: {
  message: string | undefined;
  width?: string;
  severity?: "error" | "info" | "success" | "warning";
}) {
  return (
    <Box>
      <Alert
        sx={{ minWidth: width, justifyContent: "center" }}
        variant="filled"
        severity={severity}
      >
        {message}
      </Alert>
    </Box>
  );
}
