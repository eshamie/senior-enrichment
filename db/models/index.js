'use strict';

const User = require('./user');
const Student = require('./student');
const Campus = require('./campus');


Student.belongsTo(Campus);

Campus.hasMany(Student, {
  onDelete: 'CASCADE',
  hooks: true
});

module.exports = {
  User,
  Student,
  Campus
};
