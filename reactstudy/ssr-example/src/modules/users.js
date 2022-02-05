const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const UseerSchema = new Schema({
  username: String,
  hashedPassword: String,
});

UseerSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};
UseerSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};
UseerSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};
UseerSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UseerSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
    },
    '17c68d95df000b051dabee2d371f7d2f3858f51128c9cc23c0794ec8c110dd9aebf7f458d171b481ffeeac7b67977495d167cfe098e81b886c8c6fdde23347c9',
    // process.env.JWT_SCRET,
    {
      expiresIn: '7d', //7일간 유효
    }
  );
  return token;
};
exports.User = mongoose.model('User', UseerSchema);
