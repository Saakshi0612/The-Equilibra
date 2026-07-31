import { Box, Typography } from '@mui/material';
import logoImg from '../assets/Logo1.jpg';

interface LogoProps {
    compact?: boolean;
}

function Logo({ compact = false }: LogoProps) {
    const size = compact ? 28 : 36;
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
                component="img"
                src={logoImg}
                alt="Equilibra"
                sx={{ width: size, height: size, flexShrink: 0, borderRadius: '50%', objectFit: 'cover' }}
            />
            <Typography
                sx={{
                    fontWeight: 700,
                    letterSpacing: 2,
                    fontSize: compact ? 16 : 20,
                    color: '#F3F1EA',
                    textTransform: 'uppercase',
                }}
            >
                Equilibra
            </Typography>
        </Box>
    );
}

export default Logo;
