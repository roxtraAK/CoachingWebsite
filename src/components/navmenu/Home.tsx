import { useEffect } from "react";
import { Link, Stack, Typography } from "@mui/material";
import img from "../../assets/fabio.jpg";
import { IFrameVideo } from "../iFrameVideo";
import { Header } from "../layout/Header";
import { Carousel } from "../content/Carousel";
import style from "../../styles/home.module.css";
import WhatsappLogo from "../../assets/whatsapp.png";
import { Footer } from "../layout/Footer";

export function Home() {
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
    <Stack sx={{ minHeight: "100vh", overflow: "hidden" }}>
      <Stack>
        <Header />
      </Stack>

      <Stack
        sx={{
          flex: 1,
          overflowY: "auto",
          width: "100%",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Stack
          className={`${style.hidden}`}
          sx={{ color: "white", mt: 15, alignItems: "center" }}
        >
          <Typography
            sx={{
              display: "grid",
              placeItems: "center",
              fontWeight: "700",
              fontFamily: "favela",
              fontSize: "36px",
              textAlign: "center",
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
              maxWidth: { xl: "60%" },
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
              maxWidth: { xl: "60%" },
            }}
          >
            Hier kostenlos anfragen:
          </Typography>
          <Stack
            sx={{
              marginTop: "10px",
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
        <Carousel />
        <IFrameVideo
          url="https://www.youtube.com/embed/JBJR_3Q2Z8I?si=W_ZQCZahckOEnTxT"
          allowFullscreen={true}
        />
        <Footer />
      </Stack>
    </Stack>
  );
}
