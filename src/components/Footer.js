import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Colegio Abraham Castellanos
            </Typography>
            <Typography variant="body2">
              Formando líderes del mañana con educación de calidad y valores.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <Link
              component={RouterLink}
              to="/academia"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Academia
            </Link>
            <Link
              component={RouterLink}
              to="/actividades"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Actividades
            </Link>
            <Link
              component={RouterLink}
              to="/inscripciones"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Inscripciones
            </Link>
            <Link
              component={RouterLink}
              to="/contacto"
              color="inherit"
              display="block"
            >
              Contacto
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                Prol. Pachicalco 48, San Lucas, Iztapalapa, 09000 Ciudad de
                México, CDMX
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">5685-46-79</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                informes@colegioabrahamcastellanos.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 4, textAlign: "center" }}>
          © {new Date().getFullYear()} Colegio Abraham Castellanos. Todos los
          derechos reservados | Desarrollado por{" "}
          <Link
            href="https://www.amoxtli.tech"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "inherit", textDecoration: "underline" }}
          >
            Amoxtli Web Developers
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
