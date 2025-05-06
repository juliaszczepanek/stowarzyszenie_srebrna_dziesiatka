import React from "react";
import { Box, Typography, Button } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
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
            color: "#000",
          }}
        >
          <BuildCircleIcon sx={{ fontSize: 48 }} />
          <DirectionsRunIcon sx={{ fontSize: 48 }} />
          <HourglassTopIcon sx={{ fontSize: 48 }} />
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
          Strona w przygotowaniu
        </Typography>

        {/* Tekst informacyjny */}
        <Typography
          variant="body1"
          sx={{
            color: "#333",
            fontFamily: "Montserrat",
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            lineHeight: 1.6,
            maxWidth: 600,
            mx: "auto",
            mb: 4,
          }}
        >
          Intensywnie pracujemy nad tą sekcją, aby dostarczyć Ci
          najbardziej aktualne informacje związane z naszym
          stowarzyszeniem biegowym. Już wkrótce znajdziesz tu
          zapowiedzi wydarzeń, relacje z imprez sportowych oraz
          inspirujące historie biegaczy. Dziękujemy za cierpliwość
          i zapraszamy niebawem!
        </Typography>

        {/* Przycisk CTA (powrót do strony głównej) */}
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#333",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 8,
            fontFamily: "Montserrat",
            px: 3,
            py: 1.2,
            "&:hover": {
              backgroundColor: "#444",
            },
          }}
        >
          Wróć do strony głównej
        </Button>
      </Box>
    </Box>
  );
};

export default UnderConstruction;
