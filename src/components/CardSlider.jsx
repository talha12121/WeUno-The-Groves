import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Typography ,Box, useMediaQuery } from "@mui/material";
import Colors from "../assets/style/Colors";

export default function CardSlider({ cards }) {
    const isSmallScreen = useMediaQuery("(max-width:900px)"); 
  return (
    <Swiper
    modules={[Navigation]}
    spaceBetween={30}
    slidesPerView="auto"
  >
    {cards.map((card, index) => (
      <SwiperSlide
        key={card.id}
        style={{
          width: isSmallScreen ? "auto" : `${card.width}px`,
        }}
      >
        <Box>
          <Box
            component="img"
            src={card.image}
            alt={card.title}
            sx={{
              width: {md:`${card.width}px`,xs:"100%"},  
              height: {md:`${card.height}px`,xs:"400px"}, 
              borderRadius: "22px",
              objectFit: "cover",
             
              transition: "0.4s ease",

          
              transform:
                {md:card.height < 350 ? "translateY(60px)" : "none",xs:"none"},

              "&:hover": {
                transform:
                  {md:card.height < 350
                    ? "translateY(60px) scale(1.05)"
                    : "scale(1.05)",xs:"none"},
              },
            }}
          />

          <Typography
            sx={{
              mt: 3,
              fontSize: "27px",
              color: Colors.white,
              fontFamily: "Playfair",
              textAlign: "center",
              transform:
                {md:card.height < 350 ? "translateY(50px)" : "none",xs:"none"},

              
            }}
          >
            {card.title}
          </Typography>
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}
