import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Paper,
  Fab,
  Tooltip
} from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí iría la lógica para enviar el formulario
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: "Dirección",
      content:
        "Prolongación Pachicalco No. 48, Barrio San Lucas C.P. 09000, Delegación Iztapalapa",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: "Teléfono",
      content: "5685-46-79",
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: "Correo Electrónico",
      content: "informes@colegioabrahamcastellanos.com",
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: "Horario de Atención",
      content: "Lunes a Viernes: 9:00am - 1:00pm",
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{ mb: 2, textAlign: "center" }}
          >
            Contáctanos
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 6, textAlign: "center", color: "text.secondary" }}
          >
            Si quieres saber mas sobre nosotros, ponte en contacto vía
            telefónica o escríbenos un correo electrónico y con gusto te
            atenderemos.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Information Cards */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card sx={{ height: "100%", textAlign: "center" }}>
                      <CardContent>
                        <Box sx={{ color: "primary.main", mb: 2 }}>
                          {info.icon}
                        </Box>
                        <Typography variant="h6" gutterBottom>
                          {info.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {info.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Envíanos un Mensaje
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Nombre Completo"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      type="email"
                      label="Correo Electrónico"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label="Mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Map and Social Media */}
          <Grid item xs={12} md={6}>
            {/* Map Placeholder */}
            <Box sx={{ mb: 4 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.2088965022535!2d-99.09832222393216!3d19.36010548190393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fde6b573095f%3A0x32451097421e23c6!2sCOLEGIO%20ABRAHAM%20CASTELLANOS!5e0!3m2!1ses!2smx!4v1738295841297!5m2!1ses!2smx"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ubicación del Colegio Abraham Castellanos"
              ></iframe>
            </Box>

            {/* Social Media */}
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Síguenos en Redes Sociales
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <IconButton
                    color="primary"
                    size="large"
                    component="a"
                    href="https://www.facebook.com/colegioabrahamcastellanos"
                    target="_blank"
                  >
                    <FacebookIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    size="large"
                    component="a"
                    href="https://wa.link/y86fx7"
                    target="_blank"
                  >
                    <WhatsAppIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    size="large"
                    component="a"
                    href="https://www.instagram.com/colegioabrahamcastellanos/"
                    target="_blank"
                  >
                    <InstagramIcon fontSize="large" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Tooltip title="Contáctanos por WhatsApp" placement="left">
        <Fab
          color="success"
          aria-label="WhatsApp"
          href="https://wa.link/y86fx7"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1000,
            boxShadow: 3,
            "&:hover": {
              transform: "scale(1.1)",
              transition: "transform 0.2s",
            },
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default Contacto;
