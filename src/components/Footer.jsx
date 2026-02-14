import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Link,
  Container,
  Stack,
  IconButton,
} from "@mui/material";

import Colors from "../assets/style/Colors";
import { Images } from "../assets/images";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: Colors.drawerBg,
        color: "white",
        pt: 8,
        pb: 6,
        borderTop: "2px solid #434833",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            size={{ xs: 12, md: 12 }}
            sx={{
              display: { md: "none", xs: "flex" },
              justifyContent: { xs: "flex-start", md: "flex-start" },
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
          </Grid>
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Typography
              sx={{
                fontFamily: "Playfair",

                color: Colors.white,
                lineHeight: 1.1,
                whiteSpace: "pre-line",
                fontSize: { xs: "1.75rem", md: "45px" },
              }}
            >
              {"Join us for an unforgettable experience"}
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6.5 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { md: "flex-end", xs: "flex-start" },
              alignItems: { md: "flex-end", xs: "flex-start" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "2px",
                maxWidth: 620,
                fontFamily: "Inter",
                color: Colors.white,
                lineHeight: 1.1,
                mb: 4,
                textTransform: "uppercase",
                textAlign: "left",
              }}
            >
              Download the groves app
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "flex-start",
                "& img": {
                  width: { md: "150px", xs: "120px" },
                  height: "40px",
                },
              }}
            >
              <img src={Images.appstore} alt="App Store" />
              <img src={Images.playstore} alt="Play Store" />
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ md: 20, xs: 2 }}
          justifyContent={"flex-start"}
          sx={{ mt: 2 }}
        >
          <Grid size={{ xs: 12, md: 3 }} sx={{ mt: 5, textAlign: "center" }}>
            <Box sx={{ textAlign: "left", fontFamily: "Inter" }}>
              <Typography
                variant="overline"
                sx={{
                  color: "gray.500",
                  fontWeight: 600,
                  mb: 0.5,
                  letterSpacing: 1,
                }}
              >
                LOCATION
              </Typography>
              <Typography variant="body2" sx={{ color: Colors.textColor }}>
                Al-Hazm Park
              </Typography>
              <Typography variant="body2" sx={{ color: Colors.textColor }}>
                Al-Jemaiah, Yanbu Al Bahr 46455
              </Typography>
              <Typography variant="body2" sx={{ color: Colors.textColor }}>
                Riyadh Saudi Arabia
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} sx={{ mt: 5, textAlign: "center" }}>
            <Box sx={{ textAlign: "left", fontFamily: "Inter" }}>
              <Typography
                variant="overline"
                sx={{
                  color: "gray.500",
                  fontWeight: 600,
                  mb: 0.5,
                  letterSpacing: 1,
                }}
              >
                WORKING HOURS
              </Typography>
              <Typography variant="body2" sx={{ color: Colors.textColor }}>
                Sun until Thurs: 4:00PM
              </Typography>
              <Typography variant="body2" sx={{ color: Colors.textColor }}>
                Fri & Sat: 2:30PM
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: Colors.textColor, mt: 2 }}
              >
                Gates Close at:
              </Typography>
              <Typography variant="body2" sx={{ color: Colors.textColor }}>
                Sat until Wed: 12:00AM
              </Typography>
              <Typography variant="body2" sx={{ color: Colors.textColor }}>
                Thu & Fri: 12:30AM
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} sx={{ mt: 5, textAlign: "center" }}>
            <Box sx={{ textAlign: "left", fontFamily: "Inter" }}>
              <Typography
                variant="overline"
                sx={{
                  color: "gray.500",
                  fontWeight: 600,
                  mb: 1,
                  letterSpacing: 1,
                }}
              >
                GUEST SERVICE CALL
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: Colors.textColor,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Link
                  href="mailto:cc@thegroves-sa.com"
                  underline="hover"
                  sx={{ color: "inherit" }}
                >
                  cc@thegroves-sa.com
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: Colors.textColor }}>
                920001672
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: Colors.textColor, mt: 2 }}
              >
                +966556831309
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          justifyContent={"space-between"}
          sx={{ mt: { md: 5, xs: 1 }, alignItems: "center" }}
        >
          <Grid
            size={{ xs: 12, md: 5.5 }}
            sx={{
              mt: { xs: 3, md: 0 },
              display: { md: "flex", xs: "none" },
              justifyContent: { xs: "center", md: "flex-start" },
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
          </Grid>
          <Grid
            size={{ xs: 12, md: 6.5 }}
            sx={{
              textAlign: "right",
              mt: { xs: 3, md: 0 },
              display: "flex",

              justifyContent: { md: "flex-end", xs: "flex-start" },
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              alignItems="flex-end"
              sx={{ ml: { md: 12, xs: 0 } }}
            >
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
                      width: "31px",
                      height: "25px",
                    },
                  }}
                >
                  <Box component="img" src={icon} alt="social-icon" />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
          justifyContent={"space-between"}
          sx={{ mt: { md: 5, xs: 1 }, alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                display: "flex",
                fontFamily: "Inter",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 1.5, md: 3 },
                textAlign: { xs: "left", md: "right" },
                alignItems: { xs: "left", md: "flex-end" },
                fontSize: { xs: "13px  !important", md: "14px !important" },
                color: Colors.textColor,
                mt: { xs: 3, md: 0 },
              }}
            >
              <Typography sx={{ color: Colors.textColor }}>
                Terms & Conditions
              </Typography>

              <Typography sx={{ color: Colors.textColor }}>
                Privacy Policy
              </Typography>

              <Typography sx={{ color: Colors.textColor }}>
                © 2023 The Groves for Entertainment
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              textAlign: "right",
              mt: { xs: 3, md: 0 },
              display: "flex",
              alignItems: { md: "flex-end", xs: "flex-start" },
              justifyContent: { md: "flex-end", xs: "flex-start" },
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ ml: { md: 26, xs: 0 } }}
            >
              {[Images.visa, Images.mastercard, Images.paypal].map(
                (icon, i) => (
                  <Box
                    component="img"
                    sx={{ width: "100%", height: "15px" }}
                    src={icon}
                    alt="social-icon"
                  />
                ),
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
