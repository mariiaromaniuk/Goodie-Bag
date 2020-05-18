'use strict'

const db = require('./database')
const Candy = require('./models/Candy')

// Bring Sequelize instance (`db`) together with models.
// Establish associations between them
// https://sequelize-guides.netlify.com/association-types/
// Puppy.belongsTo(Owner)

module.exports = {
  db,
  Candy
}
