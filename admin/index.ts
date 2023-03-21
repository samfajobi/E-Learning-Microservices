import express from "express";

const app = express();

const PORT = process.env.PORT || 8003;

app.listen(PORT, () => {
    console.log(`User service is running on PORT ${PORT}`)
});