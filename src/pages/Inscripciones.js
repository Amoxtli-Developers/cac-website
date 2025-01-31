import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Fab,
  Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Inscripciones = () => {
  const [formData, setFormData] = useState({
    nombreAlumno: '',
    apellidos: '',
    fechaNacimiento: '',
    grado: '',
    nombrePadre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      nombreAlumno,
      apellidos,
      fechaNacimiento,
      grado,
      nombrePadre,
      telefono,
      email,
      mensaje
    } = formData;

    // Construir el mensaje
    const mensajeWhatsApp = `
Hola,

Me gustaría inscribirme en su institución educativa. A continuación, proporciono mis datos:

- **Nombre(s) del Alumno**: ${nombreAlumno}
- **Apellidos**: ${apellidos}
- **Fecha de Nacimiento**: ${fechaNacimiento}
- **Grado a Cursar**: ${grado}
- **Nombre del Padre o Tutor**: ${nombrePadre}
- **Teléfono**: ${telefono}
- **Correo Electrónico**: ${email}
- **Mensaje o Comentarios Adicionales**: ${mensaje}

Gracias.
    `;

    // Codificar el mensaje para la URL
    const mensajeEncoded = encodeURIComponent(mensajeWhatsApp);
    const numero = '5215574662282';
    const enlace = `https://wa.me/${numero}?text=${mensajeEncoded}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(enlace, '_blank');
  };

  const requisitos = [
    'Acta de nacimiento (original y copia)',
    'CURP del alumno',
    'Boleta de calificaciones del grado anterior',
    'Carta de buena conducta',
    'Certificado médico reciente',
    'Fotografías tamaño infantil',
    'Comprobante de domicilio'
  ];

  // Opciones para el select de grado
  const opcionesGrado = [
    // Kinder
    { value: 'Kinder 1', label: 'Kinder 1' },
    { value: 'Kinder 2', label: 'Kinder 2' },
    { value: 'Kinder 3', label: 'Kinder 3' },
    // Primaria
    { value: '1° Grado de Primaria', label: '1° Grado de Primaria' },
    { value: '2° Grado de Primaria', label: '2° Grado de Primaria' },
    { value: '3° Grado de Primaria', label: '3° Grado de Primaria' },
    { value: '4° Grado de Primaria', label: '4° Grado de Primaria' },
    { value: '5° Grado de Primaria', label: '5° Grado de Primaria' },
    { value: '6° Grado de Primaria', label: '6° Grado de Primaria' },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h1" sx={{ mb: 2, textAlign: 'center' }}>
            Proceso de Inscripción
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, textAlign: 'center', color: 'text.secondary' }}>
            Forma parte de nuestra comunidad educativa
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Formulario de Inscripción */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Formulario de Solicitud
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Nombre(s) del Alumno"
                      name="nombreAlumno"
                      value={formData.nombreAlumno}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Apellidos"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      type="date"
                      label="Fecha de Nacimiento"
                      name="fechaNacimiento"
                      value={formData.fechaNacimiento}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      required
                      fullWidth
                      label="Grado a Cursar"
                      name="grado"
                      value={formData.grado}
                      onChange={handleChange}
                    >
                      {opcionesGrado.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Nombre del Padre o Tutor"
                      name="nombrePadre"
                      value={formData.nombrePadre}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Teléfono"
                      name="telefono"
                      value={formData.telefono}
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
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Mensaje o Comentarios Adicionales"
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
                      Enviar Solicitud
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Requisitos y Costos */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Requisitos
                </Typography>
                <List>
                  {requisitos.map((requisito, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={requisito} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Información Adicional
                </Typography>
                <Typography variant="body2" paragraph>
                  Para más información sobre costos y proceso de inscripción, 
                  puede contactarnos directamente o visitarnos en nuestras instalaciones.
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  startIcon={<DescriptionIcon />}
                >
                  Descargar Información
                </Button>
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

export default Inscripciones;
