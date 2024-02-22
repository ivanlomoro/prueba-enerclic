import {Router} from 'express'
import { loginUser, createUser } from '../controllers/userController'

const userRoutes = Router()

userRoutes.post('/login', loginUser)
userRoutes.post('/createUser', createUser)

export default userRoutes