import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Spiritual Shastra Query Endpoint
app.post('/api/ask-shastra', async (req, res) => {
  const { question, context } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Question is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.json({
      answer: "Namaste. In Sanatana Dharma, daily actions (Karma) done with devotion and mindfulness purify the mind. For your question on \"" + question.trim() + "\", tradition advises consulting local learned Purohits or scriptures like the Bhagavad Gita and Manusmriti for context-specific guidance. Focus on purity of intention (Bhava), clarity of mind (Sattva), and selfless action (Nishkama Karma).",
      source: "Built-in Traditional Wisdom"
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const systemPrompt = `You are a reverent, knowledgeable, and compassionate Vedic scholar (Acharya/Shastri) well-versed in Sanatana Dharma, the Vedas, Upanishads, Bhagavad Gita, Puranas, Smritis, Grihya Sutras, and daily temple/puja traditions.
Provide an authentic, respectful, clear, and practical response to the seeker's inquiry.
Rules:
1. Explain both the deep religious scriptural perspective (Sanskrit references, underlying philosophical meaning) and simple, practical modern application (especially for busy householders).
2. Maintain warmth, reverence, and clarity.
3. Keep the response organized with short paragraphs or bullet points. Avoid unnecessary verbosity (around 150-250 words unless detail is explicitly asked).
4. Always conclude with an auspicious blessing or Shanti invocation (e.g. Om Shanti).`;

    const prompt = `Context: ${context || 'General Hindu Rituals and Scriptures'}\n\nUser Question: ${question}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    const text = response.text || "May peace and wisdom illuminate your spiritual path. Om Tat Sat.";
    res.json({ answer: text, source: "Vedic Guidance (Gemini 2.5 Flash)" });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.json({
      answer: `Namaste. Regarding your inquiry on "${question.trim()}": Tradition teaches that pure devotion (Bhakti) and inner sincerity (Shraddha) outweigh rigid complexity. In the Bhagavad Gita (9.26), Bhagavan Krishna states: 'Patram Pushpam Phalam Toyam Yo Me Bhaktya Prayacchati' - whoever offers Me with devotion even a leaf, a flower, a fruit, or water, I accept with love. Proceed with humility and prayer. Om Shanti.`,
      source: "Sanatana Dharma Wisdom"
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, () => {
    console.log(`Sanatana Marg app server running on port ${PORT}`);
  });
}

startServer();
