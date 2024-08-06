const express = require("express");
const PORT = 5000;
require("dotenv").config();
const router = require("./mvc/router")

// cors
const cors = require("cors");
let corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
};

const app = express();
app.use(cors(corsOptions)); // middleware for cors
app.use(express.json());    // middleware for json

// router
app.use('/api', router)
app.get('/', (req, res) => {
    res.json({
      message: 'Test data'
    });
  });
  

// start
const start = async () => {
    try {
        app.listen
            (
                PORT,
                () => console.log(`server started on port ${PORT}`)
            );
    } catch (e) {
        console.log(e);
    }
};

start();




 