const mongoose = require('mongoose');

const FlowLogSchema = new mongoose.Schema({
  userEmail: String,
  status: { type: String, default: 'Started' },
  logs: [String],
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FlowLog', FlowLogSchema);
