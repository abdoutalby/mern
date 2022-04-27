const mongoose = require('mongoose')

const annonceSchema = mongoose.Schema(
  {
    recruter: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Recruter',
      },
      specialite: {
      type: String,
      required: [true, 'Please add a specialite'],
      },
      desc: {
      type: String,
      required: [true, 'Please add a description'],
      },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Annonce', annonceSchema)
