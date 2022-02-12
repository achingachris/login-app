const getGoals = (req, res) => {
  res.status(200).json({ message: 'get goals' })
}

const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Missing text')
  }

  res.status(200).json({ message: 'set goals' })
}

const updateGoal = (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` })
}

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
