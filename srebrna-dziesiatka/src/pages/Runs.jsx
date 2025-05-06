
import React from "react";
import {
  Accordion, 
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PlaceIcon from "@mui/icons-material/Place";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Groups2Icon from "@mui/icons-material/Groups2";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import FavoriteIcon from "@mui/icons-material/Favorite";



const BannerAccordion = styled(Accordion)(({ theme }) => ({
  width: "100%",
  backgroundColor: "transparent", 
  boxShadow: "none",              
}));

const ResponsiveIframe = ({ src, title }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      paddingTop: "56.25%", 
      mb: 6,
    }}
  >
    <Box
      component="iframe"
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: 0,
        borderRadius: 2,
        boxShadow: 3,
      }}
    />
  </Box>
);

const Feature = styled(Box)(({ theme }) => ({
  flex: "1 1 16rem",       
  maxWidth: "20rem",
  textAlign: "center",
  padding: "2.4rem 1.2rem",
  "& svg": {
    fontSize: 60,
    mb: 1.2,
  },
  [theme.breakpoints.up("md")]: {
    position: "relative",
    "&:not(:last-of-type)::after": {     
      content: '""',
      position: "absolute",
      right: 0,
      top: "15%",
      height: "70%",
     
      background: "#e0e0e0",
    },
  },
}));


const BannerSummary = styled(AccordionSummary)(({ theme }) => ({
  position: "relative",
  minHeight: 180,                       
  "&.Mui-expanded": { minHeight: 180 },
  padding: 0,
  backgroundImage: "url('/srebrna_banner.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",

 
  "& .MuiAccordionSummary-content": {
    width: "100%",
    justifyContent: "center",
  },

  [theme.breakpoints.down(400)]: {
    minHeight: 120,                     // niższy baner
    "&.Mui-expanded": { minHeight: 120 },
    backgroundPosition: "top center",
  },
}));

const InfoCard = styled(Box)(({ theme }) => ({
   flex: "1 1 25rem",
   maxWidth: "30rem",
   textAlign: "center",
  background: "#f5f5f5",
   padding: "3.2rem 2.4rem",
  borderRadius: 8,
    boxShadow: theme.shadows[3],
   transition: "transform .25s ease",
  
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: theme.shadows[6],
    },
  }));


  const CircleIcon = ({ children, bg = "#1976d2" }) => (
      <Box
        sx={{
     width: 56,
          height: 56,
          mb: 2,
          mx: "auto",
          borderRadius: "50%",
          background: bg,
          color: "#fff",
          display: "grid",
          placeItems: "center",
          fontSize: 28,
        }}
      >
        {children}
      </Box>
    );

export default function Runs() {
  return (
    <section
      className="runs"
      
    >

<BannerAccordion disableGutters>
        <BannerSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white", fontSize: {xs: "3rem", md: "4rem"}, mx:{ xs: 2, md: 6} } } />}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Bebas Neue",
              letterSpacing: 5,
              textAlign: "center",
              width: "100%",
              pl: { xs: 7, sm: 3 },   
              pr: { xs: 0, sm: 2 },   
              py: { xs: 3, sm: 5 },
              color: "white",
              fontWeight: "900",
              fontSize: {
                xs: "3.8rem",                 // telefony
                sm: "4rem",                 // małe tablety
                md: "clamp(4.5rem, 6vw, 6rem)", // reszta – płynnie w zależności od viewport %
              },
            }}
          >
            BIEG ULICZNY &nbsp; SREBRNA DZIESIĄTKA
          </Typography>
        </BannerSummary>

        <AccordionDetails sx={{ backgroundColor: "rgba(0,0,0,0.25)", p: 0 }}>
          <Box sx={{ backgroundColor: "#fff", color: "#000", p: {xs: 2, md: 6}, fontFamily: "Montserrat" }}>
            
            <Typography variant="h3" sx={{ mb: 4, fontWeight: 600, fontFamily: "Montserrat" }}>
              Geneza i rozwój
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, lineHeight: 2, fontFamily: "Montserrat" }}>
              Pomysł zorganizowania biegu zrodził się, aby uczcić pamięć
              wybitnego trenera&nbsp;– <strong>Kazimierza Chechelskiego</strong>.
              Pierwsza edycja odbyła się&nbsp;17 września 2016 r. i od tamtej pory
              przyciąga coraz większą liczbę uczestników z całej Polski. To nie
              tylko rywalizacja sportowa, lecz także integracja społeczności
              lokalnej i promocja zdrowego stylu życia.
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, fontFamily: "Montserrat" }}>
  Już podczas&nbsp;debiutu towarzyszyły nam kamery – zobacz krótkie wideo,
  które pokazuje, jak rodziła się dzisiejsza&nbsp;Srebrna&nbsp;Dziesiątka:
</Typography>


<ResponsiveIframe
  src="https://www.youtube.com/embed/qKblm6YswX8"
  title="Tak to się zaczęło – Olkusz biega 2016"
/>

            
            <Typography variant="h3" sx={{ mb: 6, fontWeight: 600, fontFamily: "Montserrat" }}>
  Dystanse i&nbsp;kategorie
</Typography>
<Typography variant="h6" sx={{ mb: 6, fontFamily: "Montserrat"  }}>W ramach Srebrnej Dziesiątki uczestnicy mogą wybierać spośród kilku dystansów dostosowanych do różnych poziomów zaawansowania:</Typography>

<Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    fontFamily: "Montserrat",
    gap: 4,
    justifyContent: "center",
    mb: 6,
  }}
>

  <Box
    sx={{
      flex: "1 1 250px",
      fontFamily: "Montserrat",
      maxWidth: 300,
      px: 3,
      py: 4,
      textAlign: "center",
      borderRadius: 2,
      boxShadow: 3,
      background: "#f5f5f5",
    }}
  >
    <Typography variant="h2" sx={{ fontFamily: "Montserrat", mb: 1 ,  fontWeight: 600,}}>
      10&nbsp;km
    </Typography>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, fontFamily: "Montserrat" }}>
      Bieg&nbsp;główny
    </Typography>
    <Typography variant="body1" sx={{fontFamily: "Montserrat"}}>
      Dla&nbsp;zaawansowanych biegaczy szukających wyzwania.
    </Typography>
  </Box>


  <Box
    sx={{
      flex: "1 1 250px",
      maxWidth: 300,
      fontFamily: "Montserrat",
      px: 3,
      py: 4,
      textAlign: "center",
      borderRadius: 2,
      boxShadow: 3,
      background: "#f5f5f5",
    }}
  >
    <Typography variant="h2" sx={{ fontFamily: "Montserrat", mb: 1,  fontWeight: 600, }}>
      5&nbsp;km
    </Typography>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, fontFamily: "Montserrat" }}>
      Bieg&nbsp;towarzyszący
    </Typography>
    <Typography variant="body1" sx={{fontFamily: "Montserrat"}}>
      Idealny dla osób preferujących krótszy dystans lub
      rozpoczynających przygodę z bieganiem.
    </Typography>
  </Box>

  <Box
    sx={{
      flex: "1 1 250px",
      maxWidth: 300,
      px: 3,
      py: 4,
      textAlign: "center",
      borderRadius: 2,
      boxShadow: 3,
      background: "#f5f5f5",
    }}
  >
    <Typography variant="h2" sx={{ fontFamily: "Montserrat", mb: 1, fontWeight: 600, }}>
      5&nbsp;km
    </Typography>
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, fontFamily: "Montserrat" }}>
      Nordic&nbsp;Walking
    </Typography>
    <Typography variant="body1" sx={{fontFamily: "Montserrat"}}>
      Marsz z kijkami dla miłośników aktywnego spaceru i rekreacji.
    </Typography>
  </Box>
</Box>
            <Typography variant="h6" sx={{ mb: 6, fontFamily: "Montserrat" }}>
              Dodatkowo prowadzimy&nbsp;
              <strong>Memoriał Kazimierza Chechelskiego</strong>
              &nbsp;dla najmłodszych – upamiętniający zasłużonego trenera KS
              Olkusz.
            </Typography>

           
            <Typography variant="h3" sx={{ mb: 4, fontWeight: 600, fontFamily: "Montserrat" }}>
            Trasa biegu <PlaceIcon sx={{ fontSize: "3rem", ml: 0, mb: "-4px" }} />
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, fontFamily: "Montserrat"  }}>
              Do ubiegłego roku trasa wiodła ulicami Olkusza, start i meta na
              Rynku, m.in.&nbsp;Floriańską, Górniczą, Krakowskie Przedmieście,
              Kościuszki – pozwalając podziwiać zabytkową architekturę.W tym roku czeka na uczestników nowa, szybka trasa, której szczegóły zostaną ujawnione wkrótce. Start i meta będą zlokalizowane na stadionie, co pozwoli na lepszą organizację wydarzenia oraz zapewni komfort zarówno biegaczom, jak i kibicom, oraz mieszkańcom Olkusza.
            
            </Typography>

       
            <Typography variant="h3" sx={{ mb: 4, fontWeight: 600, fontFamily: "Montserrat" }}>
             Wyjątkowe chwile
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, fontFamily: "Montserrat"  }}>
            Srebrna Dziesiątka to nie tylko rywalizacja, ale także wyjątkowe momenty. Podczas V edycji biegu, wieloletni maratończyk Ryszard Jałowiec zakończył swoją 50-letnią karierę biegową, pokonując trasę w czasie 58 minut i 49 sekund, finiszując wspólnie ze swoimi wychowankami.  
            </Typography>

            <Typography variant="h3" sx={{ mb: 8, fontWeight: 600, fontFamily: 'Montserrat' }}>
  Dlaczego warto wziąć udział?
</Typography>

<Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    justifyContent: 'center',
    mb: 8,
  }}
>
  <Feature>
    <SettingsSuggestIcon sx={{ color: '#1565c0' }} />
    <Typography variant="h5" sx={{ fontWeight: 700, mb: .5, fontFamily: 'Montserrat' }}>
      Organizacja
    </Typography>
    <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}>
      Dopieszczony każdy detal – od biura zawodów po dekorację.
    </Typography>
  </Feature>

  <Feature>
    <Groups2Icon sx={{ color: '#2e7d32' }} />
    <Typography variant="h5" sx={{ fontWeight: 700, mb: .5, fontFamily: 'Montserrat' }}>
      Atmosfera
    </Typography>
    <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}>
      Spotkasz zarówno stałych bywalców, jak i nowych przyjaciół.
    </Typography>
  </Feature>

  <Feature>
    
    <EmojiEventsIcon sx={{ color: '#FFdd00' }} />
    <Typography variant="h5" sx={{ fontWeight: 700, mb: .5, fontFamily: 'Montserrat' }}>
      Nagrody&nbsp;i&nbsp;medale
    </Typography>
    <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}>
      Pamiątkowy medal dla każdego uczestnika&nbsp;• atrakcyjne puchary i nagrody dla najlepszych.
    </Typography>
  </Feature>

  <Feature>
    <FavoriteIcon sx={{ color: '#c62828' }} />
    <Typography variant="h5" sx={{ fontWeight: 700, mb: .5, fontFamily: 'Montserrat' }}>
      Zdrowie
    </Typography>
    <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}>
      Motywacja, by ruszyć się z kanapy i zadbać o kondycję.
    </Typography>
  </Feature>
</Box>
          </Box>

        </AccordionDetails>
        </BannerAccordion>
     

     
    </section> 
  );
}
