// Academia.js

import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Fab,
  Tooltip
} from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import ReactPlayer from "react-player/vimeo";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Academia = () => {
  // Estados para manejar las pestañas de grado
  const [primariaGradeTab, setPrimariaGradeTab] = useState(0); // 0 a 5 para 1° a 6° Grado
  const [kinderGradeTab, setKinderGradeTab] = useState(0); // 0 a 2 para Kinder 1 a 3

  // Manejadores de cambio de pestañas de grado
  const handlePrimariaGradeChange = (event, newValue) => {
    setPrimariaGradeTab(newValue);
  };

  const handleKinderGradeChange = (event, newValue) => {
    setKinderGradeTab(newValue);
  };

  // Datos simulados para Primaria
  const primariaGrades = [
    {
      grade: "1° Grado",
      books: [

      ],
      materials: [

      ],
    },
    {
      grade: "2° Grado",
      books: [

      ],
      materials: [

      ],
    },
    {
      grade: "3° Grado",
      books: [

      ],
      materials: [

      ],
    },
    {
      grade: "4° Grado",
      books: [

      ],
      materials: [

      ],
    },
    {
      grade: "5° Grado",
      books: [

      ],
      materials: [

      ],
    },
    {
      grade: "6° Grado",
      books: [

      ],
      materials: [

      ],
    },
  ];

  // Datos simulados para Kinder
  const kinderGrades = [
    {
      grade: "Kinder 1",
      books: [

      ],
      materials: [

      ],
    },
    {
      grade: "Kinder 2",
      books: [

      ],
      materials: [

      ],
    },
    {
      grade: "Kinder 3",
      books: [

      ],
      materials: [

      ],
    },
  ];

  // Función para descargar listas utilizando file-saver
  const downloadList = (list, type, grade) => {
    console.log(`Descargando lista de ${type} para ${grade.grade}`);
  };

  // Función para renderizar el contenido de cada grado
  const renderContent = (grade) => (
    <Grid container spacing={4}>
      {/* Columna de Libros */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom color="primary">
              Lista de Libros
            </Typography>
            <List>
              {grade.books.map((book, idx) => (
                <React.Fragment key={idx}>
                  <ListItem>
                    <ListItemText primary={book} />
                  </ListItem>
                  {idx < grade.books.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<DownloadIcon />}
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => downloadList(grade.books, "libros", grade)}
            >
              Descargar lista de libros
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Columna de Materiales */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom color="primary">
              Lista de Materiales
            </Typography>
            <List>
              {grade.materials.map((material, idx) => (
                <React.Fragment key={idx}>
                  <ListItem>
                    <ListItemText primary={material} />
                  </ListItem>
                  {idx < grade.materials.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<DownloadIcon />}
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => downloadList(grade.materials, "materiales", grade)}
            >
              Descargar lista de materiales
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderVideo = () => (
    <Box sx={{ position: "relative", paddingTop: "56.25%" /* 16:9 */ }}>
      <ReactPlayer
        url="https://vimeo.com/227634454"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
        controls
      />
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          height: { xs: "200px", md: "300px" },
          width: "100%",
          bgcolor: "grey.200",
          position: "relative",
          overflow: "hidden",
          mb: 6,
        }}
      >
        <Box
          component="img"
          src="/api/placeholder/1920/300"
          alt="Academia Banner"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0,21,51,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 700,
            }}
          >
            Nuestro Colegio
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg">
        {/* Modelo Educativo Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
            Modelo Educativo
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              textAlign: "center",
              maxWidth: "1200px",
              mx: "auto",
              fontSize: "24px",
            }}
          >
            El modelo educativo de nuestro colegio se basa en las posibilidades
            que brinda la enseñanza para formar mejores estudiantes que
            comprendan la importancia de su aprendizaje, fortaleciendo sus
            habilidades, e inculcando el carácter para demostrar que con el
            esfuerzo y trabajo se puede lograr un mejor desarrollo humano.
          </Typography>
        </Box>

        {/* Misión, Visión y Valores Section */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Misión
                  </Typography>
                  <Typography variant="body1">
                    Nuestro Objetivo es mejorar la calidad de la educación
                    básica, esto implica por una parte, un proceso de cambio de
                    largo plazo que tiene como núcleo el conjunto de prácticas
                    de los actores escolares (maestros, directivos, alumnos y
                    padres de familia). Por otra parte renovar prácticas que
                    posibiliten la mejora de la calidad de la educación básica.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Visión
                  </Typography>
                  <Typography variant="body1">
                    La comunidad escolar se visualiza como personas reflexivas,
                    criticas, creativas y seguras de si mismas capases de
                    resolver problemas a los que se enfrenten en la vida
                    cotidiana, comprometidas y responsables que puedan
                    integrarse adecuadamente en el nivel académico.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Valores
                  </Typography>
                  <Typography variant="body1">
                    Somos una Institución incluyente, donde formamos individuos
                    que desarrollan sus capacidades de manera armónica e
                    integral para incorporarse a una sociedad democrática y
                    global.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="lg">
        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
            Nuestra Academia
          </Typography>
        </motion.div>

        {/* Sección de Educación Preescolar (Kinder) */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Educación Preescolar (Kinder)
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            En nuestro kinder, creamos un ambiente acogedor y estimulante donde
            los niños pueden desarrollar sus primeras habilidades sociales y
            académicas a través del juego y la exploración.
          </Typography>

          {/* Pestañas de Grados de Kinder */}
          <Tabs
            value={kinderGradeTab}
            onChange={handleKinderGradeChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
            sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}
          >
            {kinderGrades.map((grade, index) => (
              <Tab key={index} label={grade.grade} />
            ))}
          </Tabs>

          {/* Contenido de cada Grado de Kinder */}
          {kinderGrades.map((grade, index) => (
            <Box key={index} hidden={kinderGradeTab !== index}>
              {kinderGradeTab === index && renderContent(grade)}
            </Box>
          ))}
        </Box>

        {/* Sección de Educación Primaria */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Educación Primaria
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Nuestro programa de primaria está diseñado para proporcionar una
            base sólida en el aprendizaje, fomentando la curiosidad y el
            pensamiento crítico en cada estudiante.
          </Typography>

          {/* Pestañas de Grados de Primaria */}
          <Tabs
            value={primariaGradeTab}
            onChange={handlePrimariaGradeChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
            sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}
          >
            {primariaGrades.map((grade, index) => (
              <Tab key={index} label={grade.grade} />
            ))}
          </Tabs>

          {/* Contenido de cada Grado de Primaria */}
          {primariaGrades.map((grade, index) => (
            <Box key={index} hidden={primariaGradeTab !== index}>
              {primariaGradeTab === index && renderContent(grade)}
            </Box>
          ))}
        </Box>
        <Box sx={{ mb: 6 }}>
          {renderVideo()}
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

export default Academia;
