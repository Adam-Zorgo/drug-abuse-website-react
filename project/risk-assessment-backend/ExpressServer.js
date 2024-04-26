const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001; // Adjust the port as needed

app.use(express.json()); // Enable parsing of JSON request bodies

// Endpoint to write data to a file
app.post('/api/risk-count', (req, res) => {
  const { riskLevel } = req.body; // Extract risk level from request
  const filePath = path.resolve(__dirname, `risk_count_${riskLevel}.txt`); // Define file path based on risk level

  try {
    // Read the current count, increment, and write back to the file
    let count = 0;
    if (fs.existsSync(filePath)) {
      count = parseInt(fs.readFileSync(filePath, 'utf8'), 10);
    }
    fs.writeFileSync(filePath, (count + 1).toString(), 'utf8'); // Increment and write to file

    res.status(200).json({ message: 'Risk count updated successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update risk count.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
