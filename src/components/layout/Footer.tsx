import { Link, Stack } from "@mui/material";
import WhatsappLogo from "../../assets/whatsapp.png";
import YoutubeLogo from "../../assets/youtube.png";

export function Footer() {
  return (
    <Stack
      sx={{
        mt: "40px",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link sx={{ mb: "10px" }} href="https://wa.me/+491775028513">
          <img
            style={{ height: "50px", width: "50px" }}
            src={WhatsappLogo}
            alt="WhatsApp"
          />
        </Link>
        <Link
          sx={{ mb: "10px" }}
          href="https://www.youtube.com/@fabio_willmann"
        >
          <img
            style={{ height: "50px", width: "50px" }}
            src={YoutubeLogo}
            alt="YouTube"
          />
        </Link>
      </Stack>
    </Stack>
  );
}
