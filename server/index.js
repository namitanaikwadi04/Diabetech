const express = require("express");
const fs = require("fs");
const XLSX = require("xlsx");
const cors = require("cors"); // To handle CORS issues

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get("/", (req, res) => {
  res.send("Server is running");
});

// API to save contact information
app.post("/api/saveContact", (req, res) => {
  const newRecord = req.body;

  // Load existing Excel file if it exists, or create a new one
  let workbook;
  try {
    const file = fs.readFileSync("ContactInformation.xlsx");
    workbook = XLSX.read(file, { type: "buffer" });
  } catch (error) {
    workbook = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(workbook, ws, "Contact Information");
  }

  // Get the worksheet and append the new data
  const worksheet = workbook.Sheets["Contact Information"];
  const data = XLSX.utils.sheet_to_json(worksheet);
  data.push(newRecord);

  // Convert the updated data back to the worksheet
  const newWorksheet = XLSX.utils.json_to_sheet(data);
  workbook.Sheets["Contact Information"] = newWorksheet;

  // Write the updated Excel file back to the server
  XLSX.writeFile(workbook, "ContactInformation.xlsx");

  // Respond to the client
  res.send({ message: "Data saved successfully" });
});

// API to schedule an appointment
app.post("/api/scheduleDemo", (req, res) => {
  const newRecord = req.body;

  // Log request body to ensure data is received
  console.log("Received new record:", newRecord);

  // Check if all necessary fields are present
  if (
    !newRecord.name ||
    !newRecord.age ||
    !newRecord.email ||
    !newRecord.phone ||
    !newRecord.date
  ) {
    return res.status(400).send({ message: "All fields are required" });
  }

  // Load existing Excel file if it exists, or create a new one
  let workbook;
  try {
    const file = fs.readFileSync("demos.xlsx");
    workbook = XLSX.read(file, { type: "buffer" });
    console.log("Existing demos.xlsx file loaded.");
  } catch (error) {
    console.log("Creating a new demos.xlsx file.");
    workbook = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(workbook, ws, "Demos");
  }

  // Get the worksheet and append the new data
  const worksheet = workbook.Sheets["Demos"];
  const data = XLSX.utils.sheet_to_json(worksheet);
  data.push({
    Name: newRecord.name,
    Age: newRecord.age,
    Email: newRecord.email,
    Phone: newRecord.phone,
    Date: newRecord.date,
  });

  // Convert the updated data back to the worksheet
  const newWorksheet = XLSX.utils.json_to_sheet(data);
  workbook.Sheets["Demos"] = newWorksheet;

  // Write the updated Excel file back to the server
  try {
    XLSX.writeFile(workbook, "demos.xlsx");
    console.log("Data written successfully to demos.xlsx");
  } catch (writeError) {
    console.error("Error writing to demos.xlsx:", writeError);
    return res.status(500).send({ message: "Failed to save demo data" });
  }

  // Log the updated data
  console.log("Updated demo data:", data);

  // Respond to the client
  res.send({ message: "Demo scheduled successfully" });
});

// Start the server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
