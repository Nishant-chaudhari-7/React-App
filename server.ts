// server/server.ts
import express from 'express';
import cors from 'cors';
import multer from 'multer';

const app = express();
const port = 5000;

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/predict', upload.single('image'), (req, res) => {
  // Replace this with your actual machine learning model integration logic
  const fileName = req.file?.originalname || 'unknown.jpg';
  console.log(`Received image: ${fileName}`);

  // Simulated predictions
  const predictions = ['Category A', 'Category B', 'Category C'];
  res.json({ predictions });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
