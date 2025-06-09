
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/api/book", (req, res) => {
    const { name, wasteType } = req.body;
    console.log(`Booking from ${name} for ${wasteType}`);
    res.json({ message: "Pickup booked successfully!" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
