import {Router} from 'express'
import { getAllDispositivos, insertDispositivos } from '../controllers/dispositivoController'

const dispositivoRoutes = Router()

dispositivoRoutes.post('/', insertDispositivos)
dispositivoRoutes.get('/', getAllDispositivos)

export default dispositivoRoutes