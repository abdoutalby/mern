const express = require('express')
const router = express.Router()
const { 
    addAnnonce,
    getAll,
    getAllByRecruter
} = require('../controllers/annonceController')
const { recruterProtect } = require('../middleware/recruterMiddleware')
 
router.post('/', recruterProtect,addAnnonce  )
router.get('/' ,recruterProtect,getAllByRecruter )
router.get('/all' ,recruterProtect,getAll )


module.exports = router
