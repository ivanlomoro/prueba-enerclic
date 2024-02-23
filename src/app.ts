import express from 'express';
import dispositivoRoutes from './routes/dispositivos.routes';
import userRoutes from './routes/users.routes';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './docs/swagger.json';

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", dispositivoRoutes)
app.use("/", userRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
    res.status(200).json({message:"Prueba Enerclick api"})
})

export default app;