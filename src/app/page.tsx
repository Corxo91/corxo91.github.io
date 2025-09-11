import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ServiceList } from '../components/skills/ServiceList';
import { TechnologyList } from '../components/skills/TechnologyList';

import { PageCardList } from '../components/pages/PageCardList';


export default function Home() {
  return (
    <Container maxWidth="lg" sx={{
      py: 8,
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      '::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: 'radial-gradient(circle at 20% 30%, #00fff7 0%, transparent 60%), radial-gradient(circle at 80% 70%, #ff00ea 0%, transparent 60%), radial-gradient(circle at 50% 90%, #fffb00 0%, transparent 60%)',
        opacity: 0.25,
        filter: 'blur(32px)',
      },
    }}>
      <Box>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              background: 'linear-gradient(90deg, #00fff7, #ff00ea, #fffb00, #00ff85)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 900,
              textShadow: '0 0 2px #00fff7, 0 0 16px #ff00ea',
              letterSpacing: '0.05em',
            }}
          >
            Marcos Santana Delgado
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#ff00ea',
              textShadow: '0 0 6px #ff00ea',
              fontWeight: 700,
            }}
          >
            Programador Fullstack | Sysadmin | DevOps | Ing. Ciberseguridad
          </Typography>
          <Typography
            variant="body1"
            mt={2}
            sx={{
              color: '#00fff7',
              textShadow: '0 0 4px #00fff7',
              fontWeight: 500,
            }}
          >
            Especialista en Node.js (React, Nest, Next, Express, Angular) y Python (Django, DRF, FastAPI). Gestión de bases de datos, Ciberseguridad, SysAdmin y DevOps.
          </Typography>
        </Box>
  <Box mt={6} mb={2}>
        <Box>
          <Typography
                variant="h4"
                gutterBottom
                sx={{
                  background: 'linear-gradient(90deg, #00fff7, #ff00ea, #fffb00, #00ff85)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  mb: 0,
                  mt: 0,
                  textShadow: '0 0 3px #00fff7, 0 0 6px #ff00ea',
                  textAlign: { xs: 'center', md: 'center' },
                }}
              >
                Habilidades
              </Typography>
        </Box>
          <Grid container spacing={2} alignItems="flex-start">
            {/* Títulos alineados horizontalmente */}
            <Grid item xs={12} md={6}>
            </Grid>
            <Grid item xs={12} md={6}>
            </Grid>
            {/* Listas de skills debajo de los títulos */}
            <Grid item xs={12} md={6}>
              <TechnologyList
                title=""
                gradient="linear-gradient(90deg, #00fff7, #ff00ea, #fffb00, #00ff85)"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ServiceList
                title=""
                gradient="linear-gradient(90deg, #ff00ea, #00fff7, #fffb00, #00ff85)"
              />
            </Grid>
          </Grid>
        </Box>
          {/* Portafolio de páginas pegado a skills */}
          <Box sx={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', px: { xs: 2, sm: 4, md: 8 }, py: 0 }}>
            <Box sx={{ maxWidth: '1800px', margin: '0 auto' }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  background: 'linear-gradient(90deg, #00fff7, #ff00ea, #fffb00, #00ff85)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  mb: 0,
                  mt: 0,
                  textShadow: '0 0 3px #00fff7, 0 0 6px #ff00ea',
                  textAlign: { xs: 'center', md: 'center' },
                }}
              >
                Proyectos
              </Typography>
              <PageCardList />
            </Box>
          </Box>
        <Box textAlign="center" mt={6}>
          <Typography variant="caption" color="text.secondary">
            &copy; {new Date().getFullYear()} Marcos Santana Delgado. Todos los derechos reservados.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}