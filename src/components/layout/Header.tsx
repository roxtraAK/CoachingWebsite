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
import StarRateIcon from "@mui/icons-material/StarRate";
import styles from "../../styles/style.module.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = [
    "Coaching",
    "Personaltraining",
    "Erfolge",
    "Impressum",
    "Warenkorb",
  ];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const toggleDrawer = () => {
    setOpen((open) => !open);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const DrawerList = (
    <Box
      sx={{
        width: { xs: 200, sm: 250 },
        height: "100%",
        backgroundColor: "black",
        color: "white",
      }}
      role="presentation"
      onClick={() => toggleDrawer()}
      onKeyDown={() => toggleDrawer()}
    >
      <List sx={{ mt: 8 }} className={styles.navbar}>
        {pages.map((text, index) => (
          <ListItem key={text}>
            <ListItemButton onClick={() => navigate(`/${text.toLowerCase()}`)}>
              <ListItemIcon>
                {text === "Personaltraining" ? (
                  <FitnessCenterIcon color="primary" key={`navbar-${index}`} />
                ) : text === "Coaching" ? (
                  <EmojiEventsIcon color="primary" key={`navbar-${index}`} />
                ) : text === "Kontakt" ? (
                  <MailIcon color="primary" key={`navbar-${index}`} />
                ) : text === "Impressum" ? (
                  <DescriptionIcon color="primary" key={`navbar-${index}`} />
                ) : text === "Erfolge" ? (
                  <StarRateIcon color="primary" key={`navbar-${index}`} />
                ) : undefined}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ fontFamily: "favela" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box></Box>
      <Divider />
    </Box>
  );

  const displayType = useMemo(() => {
    if (width < 600) {
      return "menu";
    } else if (width < 900) {
      return "menuWithTitle";
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
          {displayType === "menu" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => toggleDrawer()}
                  edge="start"
                  sx={{ marginLeft: 1 }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={open}
                  onClick={() => toggleDrawer()}
                  onClose={() => toggleDrawer()}
                >
                  {DrawerList}
                </Drawer>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
              ></Box>
            </Box>
          ) : displayType === "menuWithTitle" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => toggleDrawer()}
                  edge="start"
                  sx={{ marginLeft: 1 }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={open}
                  onClick={() => toggleDrawer()}
                  onClose={() => toggleDrawer()}
                >
                  {DrawerList}
                </Drawer>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
              >
                <Button onClick={() => navigate("/")}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                      display: "flex",
                      textAlign: "center",
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
                </Button>
              </Box>
            </Box>
          ) : displayType === "menuWithPages" ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => toggleDrawer()}
                edge="start"
                sx={{ marginLeft: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {pages.map((page, index) => {
                  if (page === "Warenkorb") {
                    return null;
                  }
                  return (
                    <Button
                      key={`topbar-${index}`}
                      onClick={() => navigate(`/${page.toLowerCase()}`)}
                      sx={{
                        my: 3,
                        fontWeight: 700,
                        fontFamily: "favela",
                        fontSize: "20px",
                        color: "white",
                        display: "block",
                        mx: 2,
                        transition: "transform 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                          backgroundColor: "black",
                        },
                        textAlign: "center",
                      }}
                    >
                      {page}
                    </Button>
                  );
                })}
              </Box>
              <Drawer
                anchor="left"
                open={open}
                onClick={() => toggleDrawer()}
                onClose={() => toggleDrawer()}
              >
                {DrawerList}
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button onClick={() => navigate("/")}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    fontWeight: 700,
                    fontSize: "40px",
                    fontFamily: "favela",
                    letterSpacing: ".3rem",
                    color: "white",
                    textDecoration: "none",
                    marginLeft: 2,
                  }}
                >
                  Fabio Willmann
                </Typography>
              </Button>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                {pages.map((page, index) => {
                  if (page === "Warenkorb") {
                    return null;
                  }
                  return (
                    <Button
                      key={`topbar-${index}`}
                      onClick={() => navigate(`/${page.toLowerCase()}`)}
                      sx={{
                        my: 3,
                        fontWeight: 700,
                        fontFamily: "favela",
                        fontSize: "24px",
                        color: "white",
                        display: "block",
                        mx: 2,
                        transition: "transform 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                          backgroundColor: "black",
                        },
                        textAlign: "center",
                      }}
                    >
                      {page}
                    </Button>
                  );
                })}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
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
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
