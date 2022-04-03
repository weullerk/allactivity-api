const Sequelize = require('sequelize');
const database = require('../db');

const logs = database.define('logs', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  start: {
    type: Sequelize.DATE,
    allowNull: false
  },
  end: {
    type: Sequelize.DATE,
    allowNull: false
  },
  description: Sequelize.STRING
});

module.exports = logs;