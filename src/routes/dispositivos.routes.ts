import {Router} from 'express'
import {  getData, insertDispositivos } from '../controllers/dispositivoController'

const dispositivoRoutes = Router()

dispositivoRoutes.post('/', insertDispositivos)
dispositivoRoutes.get('/getData', getData)

export default dispositivoRoutes