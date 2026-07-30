import { Box, Container, Grid, Typography, IconButton, Stack, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from './Logo';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: 8,
                py: 6,
                background: 'linear-gradient(135deg, #0E0E13, #0A0A0E)',
                borderTop: '1px solid rgba(201, 162, 75, 0.2)',
                color: '#fff',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Box sx={{ mb: 1.5 }}>
                            <Logo compact />
                        </Box>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            Kinetic, balanced luxury — precision-crafted accessories and objets d&apos;art for
                            those who move between worlds.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 6, sm: 4 }}>
                        <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 700 }}>
                            Quick Links
                        </Typography>
                        <Stack spacing={1}>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Home</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Shop</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>About Us</Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Contact</Typography>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 6, sm: 4 }}>
                        <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 700 }}>
                            Follow Us
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="Facebook" sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.08)' }}>
                                <FacebookIcon fontSize="small" />
                            </IconButton>
                            <IconButton aria-label="Instagram" sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.08)' }}>
                                <InstagramIcon fontSize="small" />
                            </IconButton>
                            <IconButton aria-label="Twitter" sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.08)' }}>
                                <TwitterIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: 'rgba(201, 162, 75, 0.15)' }} />

                <Typography variant="body2" align="center" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                    © {new Date().getFullYear()} Equilibra. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
