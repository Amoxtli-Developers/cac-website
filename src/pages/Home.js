import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Fab,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Link as RouterLink } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Home = () => {
  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: "Inculcamos Conocimiento",
      description:
        "A través de distintas estrategias que nos permiten aprovechar el potencial de nuestros alumnos.",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: "Fortalecemos los Valores",
      description:
        "Mediante los cuales, deseamos formar alumnos responsables e independientes.",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: "Sembramos el interés",
      description:
        "De nuestra comunidad escolar por la importancia del aprendizaje y el desarrollo de sus habilidades.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: { xs: 8, md: 24 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Colegio Abraham Castellanos
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Nuestra escuela primaria y sección preescolar cuenta con el nivel
              de enseñanza más alto de la zona, ya que desde pequeños
              desarrollamos sus competencias y habilidades con proyectos
              educativos
            </Typography>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Button
                component={RouterLink}
                to="/inscripciones"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2 }}
              >
                Inscripciones
              </Button>
              <Button
                component={RouterLink}
                to="/contacto"
                variant="outlined"
                color="inherit"
                size="large"
              >
                Contáctanos
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ textAlign: "center", mb: 6 }}
        >
          Nuestro compromiso
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                  }}
                >
                  <Box sx={{ color: "primary.main", mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="h3">
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: "1.5rem" }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: "center", mb: 6 }}
          >
            Lo que dicen nuestras familias
          </Typography>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {[
              {
                text: "La dedicación de los maestros es excepcional. Mi hija ha mejorado significativamente en matemáticas y lectura desde que ingresó al colegio.",
                author: "María González",
                role: "Madre de alumna de primaria",
              },
              {
                text: "El ambiente escolar es muy positivo y seguro. Los niños no solo aprenden académicamente, sino que también desarrollan valores importantes.",
                author: "Roberto Méndez",
                role: "Padre de alumno de kinder",
              },
              {
                text: "Las actividades extracurriculares son excelentes. Mi hijo disfruta mucho del club de ciencias y ha desarrollado un verdadero interés por la investigación.",
                author: "Ana Martínez",
                role: "Madre de alumno de primaria",
              },
              {
                text: "La comunicación entre maestros y padres es constante. Siempre estamos informados sobre el progreso de nuestros hijos.",
                author: "Carlos Ramírez",
                role: "Padre de alumna de primaria",
              },
              {
                text: "El programa bilingüe es muy efectivo. Mi hija ha mejorado muchísimo su inglés en solo un año.",
                author: "Laura Sánchez",
                role: "Madre de alumna de primaria",
              },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      p: 3,
                      m: 1,
                      minHeight: "280px",
                    }}
                  >
                    <CardContent sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "primary.main",
                        }}
                      >
                        <FormatQuoteIcon sx={{ transform: "rotate(180deg)" }} />
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ mb: 3, fontStyle: "italic" }}
                      >
                        {testimonial.text}
                      </Typography>
                      <Box sx={{ mt: "auto" }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {testimonial.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>

      {/* Image Slider Section */}
      <Box sx={{ bgcolor: "grey.100", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: "center", mb: 6 }}
          >
            Nuestras Instalaciones
          </Typography>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            style={{ borderRadius: "8px" }}
          >
            {[1, 2, 3].map((item) => (
              <SwiperSlide key={item}>
                <Box
                  sx={{
                    height: { xs: "300px", md: "500px" },
                    bgcolor: "grey.300",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h5">
                    Imagen de Instalación {item}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, bgcolor: "primary.main", color: "white" }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h3" gutterBottom>
                  ¿Listo para ser parte de nuestra comunidad?
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Inscripciones abiertas para el próximo ciclo escolar. Asegura
                  el futuro educativo de tus hijos.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    component={RouterLink}
                    to="/inscripciones"
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        transition: "transform 0.2s",
                      },
                    }}
                  >
                    Iniciar inscripción
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contacto"
                    variant="outlined"
                    color="inherit"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        transition: "transform 0.2s",
                      },
                    }}
                  >
                    Contáctanos
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    p: 4,
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Beneficios de inscripción temprana:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {[
                      "Descuentos especiales en inscripción",
                      "Facilidades de pago",
                      "Apartado de lugar garantizado",
                      "Kit de bienvenida exclusivo",
                    ].map((benefit, index) => (
                      <Typography
                        key={index}
                        component="li"
                        sx={{
                          mb: 1,
                          opacity: 0.9,
                          "&::marker": {
                            color: "secondary.main",
                          },
                        }}
                      >
                        {benefit}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: "center", mb: 6 }}
          >
            Nuestra Ubicación
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: { xs: "300px", md: "450px" },
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.2088965022535!2d-99.09832222393216!3d19.36010548190393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fde6b573095f%3A0x32451097421e23c6!2sCOLEGIO%20ABRAHAM%20CASTELLANOS!5e0!3m2!1ses!2smx!4v1738295841297!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Colegio Abraham Castellanos"
            />
          </Box>
        </Container>
      </Box>

      {/* Floating WhatsApp Button */}
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

export default Home;
