const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
exports.User = mongoose.model('User', UseerSchema);
