const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  _id: Types.ObjectId,
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = model('User', schema);
