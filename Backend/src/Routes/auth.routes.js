import express from 'express'
import authController from '../Controllers/Auth.controllers.js'
import multer from 'multer'
const router = express.Router()
const upload = multer()
router.post('/register',upload.none(),authController.registerUser)
router.post('/logout',authController.logOut)
router.post('/login',upload.none(),authController.loginUser)
export default router
