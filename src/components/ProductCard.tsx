import { useState } from 'react';
import { Box, Typography, Chip, Stack, List, ListItem, ListItemText, Button, IconButton } from '@mui/material';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseIcon from '@mui/icons-material/Close';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  large?: boolean;
  onBuyNow?: (product: Product) => void;
  onClose?: () => void;
}

function ProductCard({ product, large = false, onBuyNow, onClose }: ProductCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      onClick={() => setFlipped((prev) => !prev)}
      sx={{
        perspective: 1400,
        height: large ? { xs: 640, sm: 700 } : 500,
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front face */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            borderRadius: 3,
            border: '1px solid rgba(201, 162, 75, 0.25)',
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.45)',
          }}
        >
          {onClose && (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 2,
                bgcolor: 'rgba(10,10,14,0.75)',
                color: '#F3F1EA',
                '&:hover': { bgcolor: 'rgba(10,10,14,0.9)' },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
          <Box sx={{ position: 'relative', height: large ? { xs: 320, sm: 380 } : 230, flexShrink: 0 }}>
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Chip
              icon={<TouchAppOutlinedIcon sx={{ fontSize: 16 }} />}
              label="Tap to explore"
              size="small"
              sx={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                bgcolor: 'rgba(10,10,14,0.75)',
                color: '#E4C77A',
                fontWeight: 600,
              }}
            />
          </Box>
          <Stack spacing={1} sx={{ p: 2.5, flexGrow: 1 }}>
            <Typography variant="h6" sx={{ lineHeight: 1.25, fontWeight: 700 }}>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.tagline}
            </Typography>
            <Typography
              variant="h5"
              sx={{ mt: 'auto', color: 'primary.main', fontWeight: 800 }}
            >
              {product.priceDisplay}
            </Typography>
            {onBuyNow && (
              <Button
                variant="contained"
                startIcon={<ShoppingBagOutlinedIcon />}
                onClick={(e) => {
                  e.stopPropagation();
                  onBuyNow(product);
                }}
                sx={{ mt: 0.5, fontWeight: 700 }}
              >
                Buy Now
              </Button>
            )}
          </Stack>
        </Box>

        {/* Back face */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: 3,
            border: '1px solid rgba(201, 162, 75, 0.35)',
            background: 'linear-gradient(160deg, #17171F 0%, #0E0E13 100%)',
            p: large ? { xs: 3, sm: 4 } : 2.5,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            boxShadow: '0 10px 30px rgba(0,0,0,0.45)',
          }}
        >
          <Typography
            variant={large ? 'h5' : 'subtitle1'}
            color="primary.main"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            {product.name}
          </Typography>
          <Typography
            variant={large ? 'body1' : 'body2'}
            sx={{ color: 'text.secondary', mb: 1.5 }}
          >
            {product.description}
          </Typography>

          <Typography
            variant={large ? 'body2' : 'caption'}
            sx={{ color: '#7B8CFF', letterSpacing: 1, fontWeight: 700 }}
          >
            MATERIALS
          </Typography>
          <Stack direction="row" sx={{ gap: 0.75, mb: 1.5, mt: 0.5, flexWrap: 'wrap' }}>
            {product.materials.map((m) => (
              <Chip
                key={m}
                label={m}
                size={large ? 'medium' : 'small'}
                sx={{ bgcolor: 'rgba(123,140,255,0.12)', color: '#B9C2FF', fontSize: large ? '0.85rem' : '0.7rem' }}
              />
            ))}
          </Stack>

          <List dense disablePadding sx={{ mb: 1 }}>
            {product.features.map((f) => (
              <ListItem key={f} disableGutters sx={{ py: large ? 0.5 : 0.25 }}>
                <ListItemText
                  primary={f}
                  slotProps={{
                    primary: { variant: large ? 'body2' : 'caption', sx: { color: 'text.secondary' } },
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Stack direction="row" sx={{ mt: 'auto', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant={large ? 'h4' : 'h6'} sx={{ color: 'primary.main', fontWeight: 800 }}>
              {product.priceDisplay}
            </Typography>
            {onBuyNow && (
              <Button
                variant="contained"
                size={large ? 'medium' : 'small'}
                startIcon={<ShoppingBagOutlinedIcon />}
                onClick={(e) => {
                  e.stopPropagation();
                  onBuyNow(product);
                }}
                sx={{ fontWeight: 700 }}
              >
                Buy Now
              </Button>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
