const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
require("./Database/Connection");
const bodyParser = require('body-parser');
const router = require("./Routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
   /*  origin: "https://next-ecommerce-frontend-psi.vercel.app", */
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json());
//Cookies
app.use(cookieParser());
//Routers Api
app.get("/", async (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.use("/api", router);

//Port For Running
const PORT =  process.env.PORT|| 5000; 

app.listen(PORT, () => {
  console.log("Server is running");
});
