import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Fab,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import ComputerIcon from "@mui/icons-material/Computer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Actividades = () => {
  const activities = [
    {
      title: "Informática e Inglés",
      icon: <ComputerIcon sx={{ fontSize: 40 }} />,
      description:
        "Ofrecemos la adquisición de estos conocimientos de manera práctica para permitir a la población escolar desenvolverse en el ambiente digital, ya que en la actualidad ambas habilidades representan una necesidad primordial en el aprendizaje.",
      details: [
        "Clases prácticas de informática",
        "Cursos de inglés interactivos",
        "Proyectos digitales y lingüísticos",
      ],
    },
    {
      title: "Educación Física",
      icon: <SportsBasketballIcon sx={{ fontSize: 40 }} />,
      description:
        "Fomentamos la salud y el bienestar con actividades físicas que ayudan a nuestros alumnos a incrementar la coordinación, los reflejos, la fortaleza física, así como distintos aspectos adicionales mediante el trabajo en equipo.",
      details: [
        "Entrenamientos deportivos diarios",
        "Torneos internos y externos",
        "Actividades de coordinación y reflejos",
      ],
    },
    {
      title: "Tae Kwon Do",
      icon: <SportsMartialArtsIcon sx={{ fontSize: 40 }} />,
      description:
        "Como es bien sabido, este tipo de actividad inculca a quienes la practican el valor de la disciplina, a la vez de brindar seguridad y autoestima en cada logro alcanzado. Por lo que implementamos este deporte como parte de nuestro plan de estudios.",
      details: [
        "Clases de artes marciales",
        "Competencias y exhibiciones",
        "Desarrollo de disciplina y autoestima",
      ],
    },
    {
      title: "Danza",
      icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
      description:
        "Ya que las expresiones artísticas proveen valores esenciales en el desarrollo de la sociedad, es que comprendemos la necesidad por aportar esta sensibilidad a nuestros alumnos, que los hará capaces de ampliar sus recursos sociales y emocionales.",
      details: [
        "Clases de diferentes estilos de danza",
        "Presentaciones y espectáculos",
        "Talleres de expresión corporal",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
            Actividades Escolares
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 2, textAlign: "center", color: "text.secondary" }}
          >
            Desarrollando talentos y habilidades más allá del aula
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 6, textAlign: "center", color: "primary.main" }}
          >
            Actividades con Horario Extendido: 3:00 pm – 4:00 pm
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {activities.map((activity, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "none",
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          color: "primary.main",
                          display: "flex",
                          justifyContent: "left",
                          mb: 2,
                        }}
                      >
                        {activity.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        align="left"
                      >
                        {activity.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        paragraph
                        textAlign={"justify"}
                      >
                        {activity.description}
                      </Typography>
                      <Box component="ul" sx={{ pl: 2 }}>
                        {activity.details.map((detail, idx) => (
                          <Typography
                            component="li"
                            key={idx}
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                          >
                            {detail}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Calendar Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
            Realiza tus tareas con la ayuda de una maestra al terminar las
            clases
          </Typography>
        </Box>
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

export default Actividades;
