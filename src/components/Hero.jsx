import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import EastIcon from '@mui/icons-material/East';

import "swiper/css";
import "swiper/css/pagination";
import { Images } from "../assets/images";
import Colors from "../assets/style/Colors";
import PrimaryButton from "./Button";

const Hero = () => {
  const slides = [
    {
      id: 1,
      subtitle: "KHAWAJA YANNI",
      title: "The new era of luxury",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum.",
    },
    {
      id: 2,
      subtitle: "KHAWAJA YANNI",
      title: "The new era of luxury",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum.",
    },
    {
      id: 3,
      subtitle: "KHAWAJA YANNI",
      title: "The new era of luxury",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum.",
    },
   
  ];

  return (
    <Box
      sx={{
        position: "relative",
        height: "768px",
        width: "100%",
        backgroundImage: `url(${Images.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: { xs: "100%", md: "47%" },
          background: "black",
          zIndex: 2,
          opacity: 0.6,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 3,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Swiper
            modules={[Pagination]}
            autoplay={{ delay: 4000 }}
            loop
            pagination={{ clickable: true }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Stack
                  spacing={3}
                  sx={{
                    height: "750px",
                    // alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "400px",
                  }}
                >
                  <Typography
                    sx={{
                      color: Colors.grey,

                      letterSpacing: "3px",
                      fontSize: "12px",
                      fontFamily: "Playfair",
                      fontWeight: 700,
                    }}
                  >
                    {slide.subtitle}
                  </Typography>

                  <Typography
                    sx={{
                      color: Colors.white,
                      fontSize: { xs: "36px", md: "75px" },
                      fontWeight: 200,
                      lineHeight: 1.1,
                      fontFamily: "Playfair",
                    }}
                  >
                    {slide.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: Colors.grey,
                      fontSize: "14px",
                      maxWidth: "400px",
                      fontFamily: "Inter",
                    }}
                  >
                    {slide.description}
                  </Typography>

                 
                  <PrimaryButton text="Book reservation now" icon={<EastIcon sx={{fontSize:"20px"}} />} />
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
