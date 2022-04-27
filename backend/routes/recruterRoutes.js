const express = require('express')
const router = express.Router()
const {
 registerRecruter,
 loginRecruter,
  getMe,getAll,
  deleteRecruter,
  statusUpdate
} = require('../controllers/recruterController')
const { recruterProtect } = require('../middleware/recruterMiddleware')

router.post('/register', registerRecruter)
router.post('/login', loginRecruter)
router.get('/me', recruterProtect, getMe)
router.get('/' , getAll)
router.delete('/:id',deleteRecruter)
router.put('/:id' , statusUpdate)

module.exports = router
