import {Router} from 'express'
import {  getData, insertDispositivos } from '../controllers/dispositivoController'

const dispositivoRoutes = Router()

dispositivoRoutes.post('/dispositivo', insertDispositivos)
dispositivoRoutes.get('/getData', getData)

export default dispositivoRoutes