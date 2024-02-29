const express = require("express");
const connectDb = require("./config.js/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

// db connection
connectDb();

const app = express();

// port
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

// server running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
