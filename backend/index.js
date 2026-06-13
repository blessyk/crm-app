require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "https://crm-appfrontend-n6mifcft5-blessyks-projects.vercel.app/",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("CRM API Running");
});

const PORT = process.env.PORT || 5002;
app.use("/api/customers", require("./routes/customerRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

const errorHandler = require("./middleware/validationMiddleware");
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
