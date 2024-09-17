const express = require('express');
const fs = require('fs');
const XLSX = require('xlsx');
const cors = require('cors'); // To handle CORS issues

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
    res.send('Server is running');
});

// API to save contact information
app.post('/api/saveContact', (req, res) => {
    const newRecord = req.body;

    // Load existing Excel file if it exists, or create a new one
    let workbook;
    try {
        const file = fs.readFileSync('ContactInformation.xlsx');
        workbook = XLSX.read(file, { type: 'buffer' });
    } catch (error) {
        workbook = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet([]);
        XLSX.utils.book_append_sheet(workbook, ws, 'Contact Information');
    }

    // Get the worksheet and append the new data
    const worksheet = workbook.Sheets['Contact Information'];
    const data = XLSX.utils.sheet_to_json(worksheet);
    data.push(newRecord);

    // Convert the updated data back to the worksheet
    const newWorksheet = XLSX.utils.json_to_sheet(data);
    workbook.Sheets['Contact Information'] = newWorksheet;

    // Write the updated Excel file back to the server
    XLSX.writeFile(workbook, 'ContactInformation.xlsx');

    // Respond to the client
    res.send({ message: 'Data saved successfully' });
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});