import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Badge,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from './Logo';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
];

function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                background: 'rgba(10, 10, 14, 0.85)',
                backdropFilter: 'blur(10px)',
                color: 'text.primary',
                borderBottom: '1px solid rgba(201, 162, 75, 0.18)',
            }}
        >
            <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
                <Box
                    component={Link}
                    to="/"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        flexGrow: 1,
                    }}
                >
                    <Logo />
                </Box>

                {!isMobile && (
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <Button
                                key={link.path}
                                component={Link}
                                to={link.path}
                                sx={{
                                    color: location.pathname === link.path ? 'primary.main' : 'text.secondary',
                                    fontWeight: 600,
                                }}
                            >
                                {link.label}
                            </Button>
                        ))}
                        <IconButton sx={{ ml: 1 }} aria-label="cart">
                            <Badge badgeContent={0} color="secondary">
                                <ShoppingBagOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                )}

                {isMobile && (
                    <IconButton edge="end" onClick={() => setDrawerOpen(true)} aria-label="open menu">
                        <MenuIcon />
                    </IconButton>
                )}
            </Toolbar>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 220, pt: 2 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                    <List>
                        {navLinks.map((link) => (
                            <ListItemButton key={link.path} component={Link} to={link.path}>
                                <ListItemText primary={link.label} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}

export default Header;
