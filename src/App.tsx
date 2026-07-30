import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Shop from './pages/Shop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/shop"
        element={
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Shop />
            </Box>
            <Footer />
          </Box>
        }
      />
    </Routes>
  );
}

export default App;
