import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Fade, Grow, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import logoImg from '../assets/Logo.jpg';

const rotatingWords = ['Balance', 'Precision', 'Kinetic Art', 'Equilibrium'];

const highlights = [
  {
    icon: <LocalShippingOutlinedIcon fontSize="large" />,
    title: 'Fast Delivery',
    text: 'Get your orders delivered across India within days.',
  },
  {
    icon: <VerifiedOutlinedIcon fontSize="large" />,
    title: 'Trusted Craftsmanship',
    text: 'Every piece is precision-machined and quality-checked.',
  },
  {
    icon: <SupportAgentOutlinedIcon fontSize="large" />,
    title: '24/7 Support',
    text: "We're here to help you, anytime you need us.",
  },
];

function Landing() {
  const navigate = useNavigate();
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setVisible(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: '90vh', md: '95vh' },
          display: 'flex',
          alignItems: 'center',
          background:
            'radial-gradient(circle at 20% 20%, rgba(201,162,75,0.18), transparent 45%), radial-gradient(circle at 80% 70%, rgba(123,140,255,0.16), transparent 45%), linear-gradient(160deg, #0A0A0E 0%, #14141B 100%)',
        }}
      >
        {/* decorative floating rings */}
        <Box
          sx={{
            position: 'absolute',
            width: 320,
            height: 320,
            borderRadius: '50%',
            border: '1px solid rgba(201, 162, 75, 0.25)',
            top: -80,
            right: -80,
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(30px) rotate(15deg)' },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 220,
            height: 220,
            borderRadius: '50%',
            border: '1px solid rgba(123, 140, 255, 0.25)',
            bottom: -60,
            left: -60,
            animation: 'float2 7s ease-in-out infinite',
            '@keyframes float2': {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(-25px) rotate(-15deg)' },
            },
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grow in timeout={800}>
                <Stack spacing={3} sx={{ alignItems: 'flex-start', maxWidth: 640 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: '#F3F1EA',
                      fontWeight: 800,
                      fontSize: { xs: '2.2rem', md: '3.2rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    The Art of{' '}
                    <Fade in={visible} timeout={300}>
                      <Box
                        component="span"
                        sx={{
                          display: 'inline-block',
                          background: 'linear-gradient(90deg, #E4C77A, #C9A24B)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {rotatingWords[wordIndex]}
                      </Box>
                    </Fade>
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'rgba(243,241,234,0.75)', fontWeight: 400 }}>
                    Equilibra crafts kinetic, precision-engineered accessories and objets d&apos;art —
                    where architectural design meets perfect balance.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate('/shop')}
                    sx={{
                      bgcolor: 'primary.main',
                      color: '#0A0A0E',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.05rem',
                      borderRadius: 3,
                      '&:hover': { bgcolor: 'primary.light' },
                    }}
                  >
                    Explore the Collection
                  </Button>
                </Stack>
              </Grow>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Fade in timeout={1000}>
                <Box
                  component="img"
                  src={logoImg}
                  alt="Equilibra"
                  sx={{
                    width: '100%',
                    maxWidth: 420,
                    filter: 'drop-shadow(0 0 40px rgba(201,162,75,0.25))',
                  }}
                />
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Highlights Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {highlights.map((item, idx) => (
            <Grid key={item.title} size={{ xs: 12, sm: 4 }}>
              <Fade in timeout={600 + idx * 300}>
                <Stack
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    border: '1px solid rgba(201, 162, 75, 0.15)',
                    height: '100%',
                  }}
                >
                  <Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </Stack>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Landing;
