import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { readFile, writeFile, existsSync, writeFileSync } from 'fs';
const app = express();
const port = 5000;

app.use(json());
app.use(cors());

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  
  readFile('submissions.json', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Internal server error');
    } else {
      const submissions = JSON.parse(data);
      submissions.push(formData);
      writeFile('submissions.json', JSON.stringify(submissions), (err) => {
        if (err) {
          console.error('Error writing file:', err);
          res.status(500).send('Internal server error');
        } else {
          res.send('Submission successful!');
        }
      });
    }
  });
});

app.get('/submissions', (req, res) => {
  readFile('submissions.json', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Internal server error');
    } else {
      const submissions = JSON.parse(data);
      res.json(submissions);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  // Initialize submissions.json if it doesn't exist
  if (!existsSync('submissions.json')) {
    writeFileSync('submissions.json', '[]');
  }
});
