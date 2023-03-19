import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", proxy("http://localhost:8001"))
app.use("/lecturer", proxy("http://localhost:8002"))
app.use("/user", proxy("http://localhost:8003"))


const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Gateway is listening on PORT ${PORT}`)
})