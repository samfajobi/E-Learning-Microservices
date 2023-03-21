import express from "express";
import proxy from "express-http-proxy";

const app = express();



app.use("/user", proxy("http://localhost:8000"));
app.use("/lecturer", proxy("http://localhost:8000"));
app.use("/admin", proxy("http://localhost:8000"));


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`User service is running on PORT ${PORT}`)
});