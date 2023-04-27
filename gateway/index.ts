import express from "express";
import proxy from "express-http-proxy";

const app = express();



<<<<<<< HEAD
=======
app.use("/user", proxy("http://localhost:8000"));
app.use("/user", proxy("http://localhost:8000"));
app.use("/user", proxy("http://localhost:8000"));

>>>>>>> 257e74f6e62f08daf637ced463f0ffea3a86bc82

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`User service is running on PORT ${PORT}`)
});