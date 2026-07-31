import { useState } from 'react';
import { Box, Container, Typography, Grid, Modal, Fade } from '@mui/material';
import ProductCard from '../components/ProductCard';
import ChatAssistant from '../components/ChatAssistant';
import { products, type Product } from '../data/products';

function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '70vh' }}>
      <Box
        sx={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(201,162,75,0.16), transparent 50%), linear-gradient(160deg, #14141B 0%, #0A0A0E 100%)',
          borderBottom: '1px solid rgba(201, 162, 75, 0.18)',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '2.75rem' } }}
          >
            The Collection
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(243,241,234,0.75)' }}>
            Precision-engineered kinetic accessories and objets d&apos;art. Tap any card to reveal
            its full story.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProductCard product={product} onBuyNow={setSelectedProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        closeAfterTransition
        slotProps={{
          backdrop: {
            sx: { backdropFilter: 'blur(8px)', bgcolor: 'rgba(10,10,14,0.7)' },
          },
        }}
      >
        <Fade in={Boolean(selectedProduct)}>
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              outline: 'none',
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: 560, md: 620 }, maxWidth: '100%' }}>
              {selectedProduct && (
                <ProductCard product={selectedProduct} large onClose={() => setSelectedProduct(null)} />
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>

      <ChatAssistant />
    </Box>
  );
}

export default Shop;
