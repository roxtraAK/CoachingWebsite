import { useState, useEffect, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MailIcon from "@mui/icons-material/Mail";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DescriptionIcon from "@mui/icons-material/Description";
import styles from "../../styles/style.module.css";
import { Link } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = ["Home", "Coaching", "Erfolge", "Impressum", "Kontakt"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const toggleDrawer = () => () => {
    setOpen((open) => !open);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "black",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List className={styles.navbar}>
        {pages.map((text, index) => (
          <ListItem key={text} component={Link} to={text.toLowerCase()}>
            <ListItemButton>
              <ListItemIcon>
                {text === "Coaching" ? (
                  <FitnessCenterIcon color="primary" key={`navbar-${index}`} />
                ) : text === "Erfolge" ? (
                  <EmojiEventsIcon color="primary" key={`navbar-${index}`} />
                ) : text === "Kontakt" ? (
                  <MailIcon color="primary" key={`navbar-${index}`} />
                ) : text === "Impressum" ? (
                  <DescriptionIcon color="primary" key={`navbar-${index}`} />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ fontFamily: "favela" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const displayType = useMemo(() => {
    if (width < 900) {
      return "menuOnly";
    } else if (width < 1100) {
      return "menuWithPages";
    } else {
      return "full";
    }
  }, [width]);

  return (
    <AppBar
      position="sticky"
      sx={{
        overflow: "hidden",
        background: "#000000",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
      }}
    >
      <Container maxWidth={false} sx={{ padding: 0 }}>
        <Toolbar disableGutters>
          {displayType === "menuOnly" ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer()}
                edge="start"
                sx={{ marginLeft: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={open}
                onClick={toggleDrawer()}
                onClose={toggleDrawer()}
              >
                {DrawerList}
              </Drawer>
            </>
          ) : displayType === "menuWithPages" ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer()}
                edge="start"
                sx={{ marginLeft: 1 }}
              >
                <MenuIcon />
              </IconButton>
              {pages.map((page, index) => (
                <Button
                  key={`topbar-${index}`}
                  sx={{
                    my: 3,
                    fontWeight: 700,
                    fontFamily: "favela",
                    fontSize: "20px",
                    color: "white",
                    display: "block",
                    mr: 2,
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      backgroundColor: "black",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
              <Drawer
                anchor="left"
                open={open}
                onClick={toggleDrawer()}
                onClose={toggleDrawer()}
              >
                {DrawerList}
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                flexGrow: 0.8,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  fontSize: "40px",
                  fontFamily: "favela",
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Fabio Willmann
              </Typography>
              {pages.map((page, index) => (
                <Button
                  key={`topbar-${index}`}
                  sx={{
                    my: 3,
                    fontWeight: 700,
                    fontFamily: "favela",
                    fontSize: "20px",
                    color: "white",
                    display: "block",
                    mr: 2,
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      backgroundColor: "black",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}
          <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
