import { useEffect } from "react";
import { createTheme, Link, Stack, ThemeProvider } from "@mui/material";
import WhatsappLogo from "../../assets/whatsapp.png";
import YoutubeLogo from "../../assets/youtube.png";
import InstagramLogo from "../../assets/instagram.png";
import style from "../../styles/footer.module.css";
import { Impressum } from "../content/Impressum";

export function Footer() {
  const theme = createTheme({
    typography: {
      fontFamily: "favela",
    },
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  useEffect(() => {
    const animatedContent = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(style.show);
        } else {
          entry.target.classList.remove(style.show);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${style.hiddenlogo}`);
    hiddenElements.forEach((e) => animatedContent.observe(e));

    return () => {
      hiddenElements.forEach((e) => animatedContent.unobserve(e));
    };
  }, []);

  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        mt: "40px",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack className={`${style.hidden} ${style.hiddenlogo}`}>
          <Link sx={{ mb: "10px" }} href="https://wa.me/+491775028513">
            <img
              style={{ height: "50px", width: "50px" }}
              src={WhatsappLogo}
              alt="WhatsApp"
            />
          </Link>
        </Stack>
        <Stack className={`${style.hidden} ${style.hiddenlogo}`}>
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
        <Stack className={`${style.hidden} ${style.hiddenlogo}`}>
          <Link
            sx={{ mb: "10px" }}
            href="https://www.instagram.com/fabio_willmann/"
          >
            <img
              style={{ height: "40px", width: "40px" }}
              src={InstagramLogo}
              alt="Instagram"
            />
          </Link>
        </Stack>
      </Stack>

      <Stack className={`${style.hidden} ${style.hiddenlogo}`}>
        <ThemeProvider theme={theme}>
          <Impressum
            sx={{ paddingBottom: 2, ml: "auto", mt: { xs: "10px", md: 0 } }}
          />
        </ThemeProvider>
      </Stack>
    </Stack>
  );
}
