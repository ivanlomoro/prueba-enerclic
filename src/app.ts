import express from 'express';
import dispositivoRoutes from './routes/dispositivos.routes';

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", dispositivoRoutes)

app.get("/", (req, res) => {
    res.status(200).json({message:"Prueba Enerclick api"})
})

export default app;