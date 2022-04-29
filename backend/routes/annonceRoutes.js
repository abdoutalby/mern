const express = require('express')
const router = express.Router()
const { 
    addAnnonce,
    getAll,
    getAllByRecruter
} = require('../controllers/annonceController')
const { recruterProtect } = require('../middleware/recruterMiddleware')
 
router.post('/',   addAnnonce  )
router.get('/'   ,getAllByRecruter )
router.get('/all'  ,getAll )


module.exports = router
