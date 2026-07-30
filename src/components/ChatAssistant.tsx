import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Fab,
  Paper,
  Typography,
  IconButton,
  TextField,
  Stack,
  Zoom,
  Avatar,
} from '@mui/material';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { products } from '../data/products';

interface Message {
  from: 'bot' | 'user';
  text: string;
}

const INTRO: Message = {
  from: 'bot',
  text: "Hi, I'm Vera — the Equilibra assistant. Ask me about any product, its materials, price, or features.",
};

/** Answers questions locally by matching keywords against the product catalog — no backend needed. */
function answerQuery(query: string): string {
  const q = query.toLowerCase();

  if (/\b(hi|hello|hey)\b/.test(q)) {
    return 'Hello! Ask me about any product in the collection — its price, materials, or features.';
  }

  if (/list|catalog|products|what do you (sell|have)/.test(q)) {
    return `We currently offer: ${products.map((p) => p.name).join(', ')}.`;
  }

  const matched = products.find((p) => {
    const keywords = p.name.toLowerCase().split(/[\s"']+/).filter((w) => w.length > 3);
    return keywords.some((k) => q.includes(k)) || q.includes(p.name.toLowerCase());
  });

  if (matched) {
    if (/price|cost|₹|rupee/.test(q)) {
      return `The ${matched.name} is priced at ${matched.priceDisplay}.`;
    }
    if (/material|made of|fabric/.test(q)) {
      return `${matched.name} is crafted from: ${matched.materials.join(', ')}.`;
    }
    if (/feature|highlight|why|special/.test(q)) {
      return `${matched.name} — key highlights:\n• ${matched.features.join('\n• ')}`;
    }
    return `${matched.name}: ${matched.description} Price: ${matched.priceDisplay}.`;
  }

  if (/price|cost/.test(q)) {
    const cheapest = products.reduce((a, b) => (a.price < b.price ? a : b));
    const priciest = products.reduce((a, b) => (a.price > b.price ? a : b));
    return `Our prices range from ${cheapest.priceDisplay} to ${priciest.priceDisplay}. Ask about a specific product for exact pricing.`;
  }

  return "I'm not sure about that yet — try asking about a product name, its materials, features, or price.";
}

function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INTRO]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const reply = answerQuery(trimmed);
    setMessages((prev) => [...prev, { from: 'user', text: trimmed }, { from: 'bot', text: reply }]);
    setInput('');
  };

  return (
    <>
      <Zoom in={open}>
        <Paper
          elevation={12}
          sx={{
            position: 'fixed',
            bottom: 96,
            right: { xs: 16, sm: 32 },
            width: { xs: 'calc(100vw - 32px)', sm: 360 },
            maxWidth: 360,
            height: 460,
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(201, 162, 75, 0.3)',
            bgcolor: 'background.paper',
            zIndex: 1300,
          }}
        >
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              px: 2,
              py: 1.5,
              background: 'linear-gradient(90deg, #1A1A22, #14141B)',
              borderBottom: '1px solid rgba(201, 162, 75, 0.2)',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
              <AutoAwesomeIcon sx={{ fontSize: 18, color: '#0A0A0E' }} />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Vera — Equilibra Assistant
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Ask about our products
              </Typography>
            </Box>
            <IconButton size="small" onClick={() => setOpen(false)} aria-label="close chat">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Box ref={scrollRef} sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
            <Stack spacing={1.5}>
              {messages.map((m, idx) => (
                <Box
                  key={idx}
                  sx={{
                    alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    bgcolor: m.from === 'user' ? 'primary.main' : 'rgba(255,255,255,0.06)',
                    color: m.from === 'user' ? '#0A0A0E' : 'text.primary',
                    px: 1.5,
                    py: 1,
                    borderRadius: 2,
                    whiteSpace: 'pre-line',
                  }}
                >
                  <Typography variant="body2">{m.text}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{ p: 1.5, borderTop: '1px solid rgba(201, 162, 75, 0.2)' }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Ask about a product…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
            />
            <IconButton color="primary" onClick={handleSend} aria-label="send message">
              <SendIcon />
            </IconButton>
          </Stack>
        </Paper>
      </Zoom>

      <Fab
        onClick={() => setOpen((prev) => !prev)}
        aria-label="open chat assistant"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: { xs: 16, sm: 32 },
          zIndex: 1300,
          bgcolor: 'primary.main',
          color: '#0A0A0E',
          boxShadow: '0 0 0 0 rgba(201,162,75,0.6)',
          animation: open ? 'none' : 'pulse 2.4s infinite',
          '@keyframes pulse': {
            '0%': { boxShadow: '0 0 0 0 rgba(201,162,75,0.55)' },
            '70%': { boxShadow: '0 0 0 16px rgba(201,162,75,0)' },
            '100%': { boxShadow: '0 0 0 0 rgba(201,162,75,0)' },
          },
          '&:hover': { bgcolor: 'primary.light' },
        }}
      >
        {open ? <CloseIcon /> : <ChatBubbleOutlinedIcon />}
      </Fab>
    </>
  );
}

export default ChatAssistant;
