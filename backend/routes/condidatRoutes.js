const express = require('express')
const router = express.Router()
const {
    loginCondidat,
    registerCondidat,
    getCondidat,
    getCondidats,
    deleteCondidat ,
    changeStatus
} = require('../controllers/condidatController')
const { CondidatProtect } = require('../middleware/condidatMiddleware')

router.post('/', registerCondidat)
router.post('/login', loginCondidat)
router.get('/me', CondidatProtect, getCondidat)
router.get('/', getCondidats)
router.delete('/:id', deleteCondidat)
router.put('/:id' , changeStatus)

module.exports = router