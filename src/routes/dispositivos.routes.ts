import {Router} from 'express'
import {  getData, insertDispositivos } from '../controllers/dispositivoController'
import { verifyToken } from '../middleware/verifyToken'

const dispositivoRoutes = Router()

dispositivoRoutes.post('/dispositivo', insertDispositivos)
dispositivoRoutes.get('/getData',verifyToken , getData)

export default dispositivoRoutes