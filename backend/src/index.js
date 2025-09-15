require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Mock routes (replace with real DB queries)
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

app.get('/api/courses', (req, res) => {
  res.json([
    { id:1, title:'مقدمہ الفقہ', level:'بنیادی', progress: 20 },
    { id:2, title:'تفسیرِ بنیادی', level:'درمیانہ', progress: 60 }
  ]);
});

app.get('/api/quran/surah', (req, res) => {
  res.json([{ id:1, name:'الفاتحہ', ayaCount:7 }, { id:2, name:'البقرہ', ayaCount:286 }]);
});

app.get('/api/hadith', (req, res) => {
  res.json([{ id:1, text:'حدیث نمونہ...', grade:'صحیح' }]);
});

// AI proxy placeholder: validate API key and forward to your AI provider
app.post('/api/ai/query', (req, res) => {
  const { question } = req.body;
  // WARNING: This is a placeholder. Integrate real AI provider securely on server-side.
  res.json({ answer: 'یہ ایک نمونہ AI جواب ہے (سرور سائیڈ)' , source: 'placeholder' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
