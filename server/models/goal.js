const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goalSchema = Schema({
  text: {
    type: String,
    required: [true, 'Goal text is required'],
  },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)
