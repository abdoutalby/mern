const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Condidat = require('../models/condidatModel')

// @desc    Register new condidat
// @route   POST /api/condidats
// @access  Public
const registerCondidat = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if condidat exists
  const exists = await Condidat.findOne({ email })

  if (exists) {
    res.status(400)
    throw new Error('Condidat already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create condidat
  const condidat = await Condidat.create({
    name,
    email,
    password: hashedPassword,
  })

  if (condidat) {
    res.status(201).json({
      _id: condidat.id,
      name: condidat.name,
      email: condidat.email,
      token: generateToken(condidat._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid condidat data')
  }
})

// @desc    Authenticate a condidat
// @route   POST /api/condidats/login
// @access  Public
const loginCondidat = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const condidat = await Condidat.findOne({ email })

  if (condidat && (await bcrypt.compare(password, condidat.password))) {
    res.json({
      _id: condidat.id,
      name: condidat.name,
      email: condidat.email,
      token: generateToken(condidat._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get condidat data
// @route   GET /api/condidats/me
// @access  Private
const getCondidat = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

// @desc    Get condidats data
// @route   GET /api/condidats/all
// @access  Private
const getCondidats = asyncHandler(async (req, res) => {
  condidat = await Condidat.find();
  res.status(200).json(condidat)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerCondidat,
  loginCondidat,
  getCondidat,
  getCondidats,
}
