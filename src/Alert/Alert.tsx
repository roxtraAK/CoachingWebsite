import { Box, Alert } from "@mui/material";

export default function MUIAlert({
  message,
  width,
  severity,
  onClose,
}: {
  message: string | undefined;
  width?: string;
  severity?: "error" | "info" | "success" | "warning";
  onClose?: () => void;
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
