// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Serve static files from the 'public' directory
app.use(express.static('public'));  
// Handle GET request to the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}
);
// Handle POST request to '/submit'
app.post('/submit', (req, res) => {
    const data = req.body;
    console.log('Data received:', data);
    res.json({ message: 'Data received successfully!' });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// Export the app for testing
module.exports = app;
