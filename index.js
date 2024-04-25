const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./Database/Connection");
const router = require("./Routes");
const cookieParser = require("cookie-parser");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
//Cookies
app.use(cookieParser());
//Routers Api

app.use("/api", router);

//Port For Running
const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running");
});
