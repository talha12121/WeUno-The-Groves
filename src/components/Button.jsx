import { Button } from '@mui/material'
import React from 'react'
import Colors from '../assets/style/Colors'

export default function PrimaryButton({ text, icon }) {
  return (
    <Button
      variant="contained"
      sx={{
        width: "fit-content",
        background: Colors.bgColor,
        fontFamily: "Inter",
        color: Colors.white,
        borderRadius: "16px",
        px: 4,
        py: 1.5,
        fontWeight: 300,
        textTransform: "none",
        display: "inline-flex",
        alignItems: "center",  
        gap: 1,                 
        "&:hover": {
          background: Colors.bgColor,
          opacity: 0.9,
        },
      }}
    >
      {text}
      {icon && React.cloneElement(icon, { fontSize: "small" })} 
    </Button>
  )
}
