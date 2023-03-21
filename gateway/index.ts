import express from "express";
import proxy from "express-http-proxy";

const app = express();




const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`User service is running on PORT ${PORT}`)
});