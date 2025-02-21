import { useEffect } from "react";
import { Link, Stack, Typography } from "@mui/material";
import { IFrameVideo } from "../content/iFrameVideo";
import { Header } from "./Header";
import style from "../../styles/home.module.css";
import WhatsappLogo from "../../assets/whatsapp.png";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import video from "../../assets/4761767-uhd_4096_2160_25fps.mp4";

export function Content() {
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

    const hiddenElements = document.querySelectorAll(`.${style.hidden}`);
    hiddenElements.forEach((e) => animatedContent.observe(e));

    return () => {
      hiddenElements.forEach((e) => animatedContent.unobserve(e));
    };
  }, []);

  return (
    <Stack sx={{ height: "100vh" }}>
      <Stack>
        <Header />
      </Stack>
      <Stack
        sx={{
          flex: 1,
          overflowY: "auto",
          width: "100%",
        }}
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        />
        <Stack
          className={`${style.hidden}`}
          sx={{ color: "white", mt: 5, alignItems: "center" }}
        >
          <Typography
            sx={{
              display: "grid",
              placeItems: "center",
              fontWeight: "700",
              fontFamily: "favela",
              fontSize: "36px",
              textAlign: "center",
              width: { xs: "80%", sm: "60%", md: "60%" },
            }}
          >
            Werde jetzt ein Teil von meinem Team!
          </Typography>
          <Typography
            sx={{
              fontFamily: "favela",
              fontSize: "20px",
              display: "block",
              placeItems: "center",
              textAlign: "center",
              width: { xs: "80%", sm: "80%", md: "90%" },
            }}
          >
            In meinem Persönlichen Coaching biete ich dir alles, was du wissen
            musst. Ich unterstütze dich mit maßgeschneiderten Ernährungsplänen,
            Trainingsplänen und effektiven Techniken.Dabei berücksichtige ich
            auch wichtige Aspekte wie Schlafenszeiten, Flüssigkeitszufuhr,
            deinen Tagesablauf. Wir haben regelmäßigen Kontakt, einschließlich
            eines wöchentlichen Formchecks. Du erhältst meine Handynummer, um
            mich jederzeit zu erreichen.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "favela",
              fontSize: "20px",
              display: "block",
              placeItems: "center",
              textAlign: "center",
              width: { xl: "60%" },
            }}
          >
            Hier kostenlos anfragen:
          </Typography>
          <Stack
            sx={{
              marginTop: "20px",
            }}
          >
            <Link sx={{ mb: 10 }} href="https://wa.me/+491775028513">
              <img
                style={{ height: "100px", width: "100px" }}
                src={WhatsappLogo}
              ></img>
            </Link>
          </Stack>
        </Stack>
        {/* <Carousel /> */}
        <IFrameVideo
          url="https://www.youtube.com/embed/lDGfyTM--PY?si=Ixu6LSgGdWSlEFh7"
          allowFullscreen={true}
        />
        <Outlet />
        <Footer />
      </Stack>
    </Stack>
  );
}
