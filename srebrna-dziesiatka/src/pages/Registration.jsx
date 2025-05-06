
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import TimerIcon from '@mui/icons-material/Timer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Registration = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f0f0f0 0%, #ccc 100%)",
        p: 2,
      }}
    >
      
      <Box
        sx={{
          position: "relative",
          maxWidth: 800,
          width: "100%",
          borderRadius: 3,
          p: { xs: 3, sm: 6 },
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
      
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mb: 2,
            color: "#333",
          }}
        >
          <DirectionsRunIcon sx={{ fontSize: 48 }} />
          <TimerIcon sx={{ fontSize: 48 }} />
          <EmojiEventsIcon sx={{ fontSize: 48 }} />
        </Box>

       
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat",
            color: "#000",
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "3rem" },
            mb: 2,
            letterSpacing: 1,
          }}
        >
          Zapisy na VIII Srebrną Dziesiątkę
        </Typography>

        {/* Tekst informacyjny */}
        <Typography
          variant="body1"
          sx={{
            color: "#333",
            fontFamily: "Montserrat",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            lineHeight: 1.6,
            maxWidth: 600,
            mx: "auto",
            mb: 4,
          }}
        >
          Skorzystaj z oficjalnego formularza, aby zagwarantować sobie
          miejsce na liście startowej. <br></br> Do zobaczenia na trasie!
        </Typography>

        <Button
          component="a"
          href="https://elektronicznezapisy.pl/event/13259.html"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          sx={{
            backgroundColor: "rgb(255, 0, 30)",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 8,
            fontFamily: "Montserrat",
            px: 4,
            py: 1.4,
            "&:hover": { backgroundColor: "rgb(202, 0, 0)" },
            mb: 3,
            fontSize: "1.6rem"
          }}
        >
          ZAPISZ SIĘ
        </Button>

        {/* Powrót na stronę główną */}
        
      </Box>
    </Box>
  );
};

export default Registration;
