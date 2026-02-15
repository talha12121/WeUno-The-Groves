import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  IconButton,
  Grid,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { Images } from "../assets/images";
import Colors from "../assets/style/Colors";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PrimaryButton from "../components/Button";
import CardSlider from "../components/CardSlider";

const data1 = [
  {
    id: 1,
    title: "Little Krazy",
    image: Images.card1,
    height: 380,
    width: 300,
  },
  {
    id: 2,
    title: "Hawanim Groves City",
    image: Images.card2,
    height: 260,
    width: 200,
  },
  {
    id: 3,
    title: "Picnic Market",
    image: Images.card3,
    height: 360,
    width: 300,
  },
  {
    id: 4,
    title: "Lucaw...",
    image: Images.card4,
    height: 300,
    width: 300,
  },
];
const data2 = [
  {
    id: 1,
    title: "Resturants",
    image: Images.card2,
    height: 260,
    width: 200,
  },
  {
    id: 1,
    title: "Experiences",
    image: Images.card5,
    height: 380,
    width: 300,
  },
  {
    id: 3,
    title: "Events",
    image: Images.card6,
    height: 300,
    width: 300,
  },
  {
    id: 4,
    title: "Lucaw...",
    image: Images.card4,
    height: 360,
    width: 300,
  },
];
const cuisineData = [
  {
    id: 1,
    title: "Vida Vera",
    price: "100 SR PER GUEST",
    image: Images.cuisine1,
  },
  {
    id: 2,
    title: "Zama Zulu",
    price: "100 SR PER GUEST",
    image: Images.cuisine2,
  },
  {
    id: 3,
    title: "Khawaja Yanni",
    price: "100 SR PER GUEST",
    image: Images.cuisine3,
  },
  {
    id: 4,
    title: "Yamagata",
    price: "100 SR PER GUEST",
    image: Images.cuisine4,
  },
];
const MallSection = () => {
  return (
    <Box sx={{ background: Colors.drawerBg, py: 8, color: Colors.white }}>
      {/* section 1  */}
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 200,
            textAlign: "center",
            mb: 2,
            fontFamily: "Playfair ",
          }}
        >
          Mall Of: Endless Possibilities
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "700px",
            color: Colors.grey,
            mb: 5,
            fontFamily: "Inter ",
            fontSize: "15px",
          }}
        >
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 800,
            mx: "auto",
            borderRadius: 2,
            overflow: "hidden",
            mb: 5,
          }}
        >
          <img
            src={Images.videoImg}
            alt="Mall Video"
            style={{ width: "100%", display: "block" }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: Colors.white,
              color: Colors.blackColor,
              "&:hover": { backgroundColor: Colors.white },
              width: 60,
              height: 60,
            }}
          >
            <PlayArrowIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>

        <Card
          sx={{
            background: Colors.drawerBg2,
            backdropFilter: "blur(30px)",

            borderRadius: 3,
            maxWidth: 780,
            mx: "auto",
            p: 2,
          }}
        >
          <CardContent>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="caption"
                  sx={{ color: Colors.grey, fontFamily: "Inter" }}
                >
                  25 SR/GUEST
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 200,
                    mt: 1.5,
                    fontSize: "26px",
                    fontFamily: "Playfair",
                    color: Colors.white,
                  }}
                >
                  Get your General Access Ticket
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: Colors.grey,
                    mt: 1.3,
                    maxWidth: "560px",
                    fontFamily: "Inter",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text e
                </Typography>
              </Box>
              <IconButton
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "flex-end", sm: "center" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <EastIcon
                  sx={{
                    color: Colors.LightGrey,
                    fontSize: "35px",
                    opacity: 0.8,
                  }}
                />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>
      </Container>

      {/* section 2  */}

      <Container
        maxWidth="lg"
        sx={{
          mt: 15,
          mr: "0px !important",
          pr: "0px !important",
        }}
      >
        <Box sx={{ mb: 8 }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "40px",
              maxWidth: 620,
              fontFamily: "Playfair, serif",
              color: Colors.white,
              lineHeight: 1.1,
              mb: 4,
            }}
          >
            Book General Access ticket and enjoy the attractions for free
          </Typography>

          <PrimaryButton
            text="Book General Access Ticket"
            icon={<EastIcon sx={{ fontSize: "20px" }} />}
          />
        </Box>

        <Box sx={{ width: "100%", position: "relative" }}>
          <CardSlider cards={data1} />
        </Box>
      </Container>

      {/* section 3  */}
      <Container
        maxWidth="lg"
        sx={{
          mt: 15,
        }}
      >
        <Typography
          sx={{
            fontWeight: 200,
            textAlign: { md: "center", sm: "center", xs: "left" },
            fontSize: { md: "52px", sm: "52px", xs: "44px" },
            lineHeight: 1,

            mb: 2,
            fontFamily: "Playfair ",
          }}
        >
          Experience the Finest Cuisine
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "700px",
            display: { md: "flex", sm: "flex", xs: "none" },
            color: Colors.grey,
            mb: 5,
            fontFamily: "Inter ",
            fontSize: "15px",
          }}
        >
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {cuisineData.map(({ id, title, price, image }) => (
            <Grid
              item
              size={{ xs: 12, sm: 6, md: 6 }}
              key={id}
              sx={{
                width: {
                  lg: "480px !important",
                  md: "auto !important",
                  sm: "auto !important",
                  xs: "100% !important",
                },
                background: Colors.drawerBg2,
                backdropFilter: "blur(30px)",
                borderRadius: "30px",
                boxShadow: "0 4px 15px rgb(0 0 0 / 0.2)",
                overflow: "hidden",
                cursor: "pointer",

                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <Box sx={{ p: 1 }}>
                <Box
                  component="img"
                  src={image}
                  alt={title}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  p: 3,
                  pt: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: "auto",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: Colors.white,
                        fontWeight: 400,
                        mb: 1,
                        fontFamily: "Playfair",
                      }}
                    >
                      {title}
                    </Typography>

                    <Button
                      variant="contained"
                      disableElevation
                      sx={{
                        background: Colors.gold,
                        color: Colors.white,

                        fontSize: 11,
                        borderRadius: "20px",
                        px: 2,
                        py: 0.5,
                        textTransform: "none",
                        boxShadow: "none",
                        fontFamily: "Inter",
                        "&:hover": {
                          backgroundColor: Colors.gold,
                          opacity: 0.9,
                          boxShadow: "none",
                        },
                      }}
                    >
                      {price}
                    </Button>
                  </Box>

                  <EastIcon
                    sx={{
                      color: Colors.LightGrey,
                      fontSize: 35,
                      opacity: 0.8,
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* section 4  */}

      <Container
        maxWidth="lg"
        sx={{
          mt: 15,
          pr: "0px !important",
          mr: "0px !important",
          mb: 0,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs:10, md: 3 }}>
            <Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "40px",
                  maxWidth: 620,
                  fontFamily: "Playfair, serif",
                  color: Colors.white,
                  lineHeight: 1.1,
                  mb: 4,
                }}
              >
                Create your experience as you like
              </Typography>

              <PrimaryButton
                text="Book General Access Ticket"
                icon={<EastIcon sx={{ fontSize: "20px" }} />}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            <Box sx={{ width: "100%", position: "relative" }}>
              <CardSlider cards={data2} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* section 5  */}

      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ width: "100%", position: "relative" }}>
              <Box
                component="img"
                src={Images.map}
                sx={{ width: "100%", borderRadius: 2, objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ mt: { md: 0, xs: 6 } }}>
            <Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "2px",
                  maxWidth: 620,
                  fontFamily: "Inter",
                  color: Colors.white,
                  lineHeight: 1.1,
                  mb: {md:4,xs:2},
                  textTransform: "uppercase",
                }}
              >
                Experience the groves
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "28px", md: "52px" },
                  maxWidth: 620,
                  fontFamily: "Playfair, serif",
                  color: Colors.white,
                  lineHeight: 1.1,
                  mb: {md:4,xs:2},
                }}
              >
                Find your place
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: Colors.grey,
                  mt: 2,
                  mb: 5,
                  maxWidth: "330px",
                  fontFamily: "Inter",
                }}
              >
                Our interactive map will show you the way to the shops and
                restaurants that you want to see.
              </Typography>

              <PrimaryButton
                text="Open the Map"
                icon={<EastIcon sx={{ fontSize: "20px" }} />}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MallSection;
