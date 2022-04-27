const express = require('express')
const router = express.Router()
const {
  loginCondidat,
  registerCondidat,
  getCondidat,
  getCondidats
} = require('../controllers/condidatController')
const { CondidatProtect } = require('../middleware/condidatMiddleware')
 
router.post('/', registerCondidat)
router.post('/login', loginCondidat)
router.get('/me', CondidatProtect, getCondidat)
router.get('/all',getCondidats)

module.exports = router
