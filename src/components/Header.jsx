import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Stack,
  IconButton,
  Drawer,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Images } from "../assets/images";
import Colors from "../assets/style/Colors";

const languages = [
  { label: "English", flag: Images.flag },
  { label: "Spanish", flag: Images.flag },
  { label: "French", flag: Images.flag },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = React.useState(languages[0].label);

  const menuItems = [
    "DINE WITH US",
    "PLAN YOUR VISIT",
    "EVENTS",
    "VIEW GROVES MAP",
    "OUR STORY",
    "CONTACT US",
  ];

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          background: "transparent",
          transition: "0.3s",
          borderBottom: "none",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Container maxWidth="lg">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                minHeight: "80px",
                px: "0 !important",
              }}
            >
              <Box
                component="img"
                src={Images.logo}
                alt="logo"
                sx={{
                  py: 2,
                  width: "220px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />

              <Stack direction="row" spacing={3} alignItems="center">
                {[
                  Images.tiktok,
                  Images.insta,
                  Images.twitter,
                  Images.snapchat,
                ].map((icon, i) => (
                  <IconButton
                    key={i}
                    size="small"
                    sx={{
                      p: 0.5,
                      "& img": {
                        width: "19px",
                        height: "21px",
                      },
                    }}
                  >
                    <Box component="img" src={icon} alt="social-icon" />
                  </IconButton>
                ))}

                <Button
                  variant="contained"
                  sx={{
                    background: Colors.bgColor,

                    color: Colors.white,
                    borderRadius: "16px",
                    px: 5,
                    py: 1,
                    fontWeight: 600,
                    textTransform: "none",
                    fontFamily: "Inter",
                    "&:hover": { background: Colors.bgColor, opacity: 0.9 },
                  }}
                >
                  Log in
                </Button>

                <Stack direction="row" spacing={0.5} alignItems="center">
                  <KeyboardArrowDownIcon sx={{ color: Colors.white }} />

                  <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    sx={{
                      color: Colors.white,
                      fontSize: "13px",

                      minWidth: 70,
                      backgroundColor: "transparent",
                      "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      "& .MuiSelect-select": {
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                      },
                      "& .MuiSvgIcon-root": { display: "none" },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: "rgba(0,0,0,0.8)",
                          color: Colors.white,
                        },
                      },
                    }}
                  >
                    {languages.map((lang) => (
                      <MenuItem
                        key={lang.label}
                        sx={{ gap: 1 }}
                        value={lang.label}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontFamily: "Inter",
                            color: Colors.white,
                          }}
                        >
                          <img
                            src={
                              languages.find((l) => l.label === language).flag
                            }
                            alt={language}
                            style={{ height: 20 }}
                          />
                          {lang.label}
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Stack>
            </Toolbar>
          </Container>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            borderTop: "2px solid #5e595a",
            borderBottom: "2px solid #5e595a",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 5,
                py: 1.5,
              }}
            >
              <Stack direction="row" spacing={11}>
                {menuItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: Colors.white,
                      fontSize: "13px",
                      fontFamily: "Inter !important",

                      fontWeight: 200,
                      textTransform: "uppercase",
                      letterSpacing: "1.2px",
                      position: "relative",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-6px",
                        left: 0,
                        width: 0,
                        height: "2px",
                        backgroundColor: Colors.primary,
                        transition: "width 0.3s ease",
                      },
                      "&:hover:after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Container>
        </Box>

        <Toolbar
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            minHeight: "75px",
            px: 2,
          }}
        >
          <Box
            component="img"
            src={Images.logo}
            alt="logo"
            sx={{ height: 40 }}
          />
          <img
            onClick={() => setMobileOpen(true)}
            src={Images.breadcrumb}
            alt={"breadCrumbIcon"}
            style={{ height: 20, cursor: "pointer" }}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            background: Colors.drawerBg,
            color: Colors.white,
          },
        }}
      >
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 3,
              py: 2,
            }}
          >
            <Box
              component="img"
              src={Images.logo}
              alt="logo"
              sx={{ height: 40 }}
            />
            <img
              onClick={() => setMobileOpen(false)}
              src={Images.closedIcon}
              alt={"closedIcon"}
              style={{ height: 20, cursor: "pointer" }}
            />
          </Box>

          <Divider
            sx={{
              borderColor: Colors.white,
              borderBottomWidth: 2,
              opacity: 0.2,
            }}
          />

          <Box sx={{ flex: 1 }}>
            {menuItems.map((item, index) => (
              <Box key={item}>
                <Button
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    fontFamily: "Inter",
                    px: 3,
                    py: 2.5,
                    fontWeight: 300,
                    opacity: 0.8,
                    color: Colors.white,
                    fontSize: "13px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </Button>

                <Divider
                  sx={{
                    borderColor: Colors.white,
                    borderBottomWidth: 2,
                    opacity: 0.2,
                  }}
                />
              </Box>
            ))}

            <Box sx={{ px: 2, mt: 5 }}>
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <KeyboardArrowDownIcon sx={{ color: Colors.white }} />
                <Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  sx={{
                    color: Colors.white,
                    fontSize: "13px",
                    minWidth: 70,
                    backgroundColor: "transparent",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSelect-select": {
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                    },
                    "& .MuiSvgIcon-root": { display: "none" },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: "rgba(0,0,0,0.8)",
                        color: Colors.white,
                      },
                    },
                  }}
                >
                  {languages.map((lang) => (
                    <MenuItem
                      key={lang.label}
                      sx={{ gap: 1 }}
                      value={lang.label}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          fontFamily: "Inter",
                          color: Colors.white,
                          opacity: 0.8,
                        }}
                      >
                        <img
                          src={languages.find((l) => l.label === language).flag}
                          alt={language}
                          style={{ height: 20 }}
                        />
                        {lang.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  background: Colors.bgColor,
                  color: "#ffffff",
                  borderRadius: "16px",
                  px: 5,
                  py: 1,
                  fontWeight: 600,
                  textTransform: "none",
                  fontFamily: "Inter",

                  "&:hover": { background: Colors.bgColor, opacity: 0.9 },
                }}
              >
                Log in
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
