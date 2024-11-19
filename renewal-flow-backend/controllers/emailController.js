const EmailTemplate = require('../models/EmailTemplate');

const createTemplate = async (req, res) => {
  const { type, subject, body } = req.body;

  const template = new EmailTemplate({ type, subject, body });
  await template.save();

  res.status(201).json({ message: 'Email template created.' });
};

const getTemplates = async (req, res) => {
  const templates = await EmailTemplate.find();
  res.status(200).json(templates);
};

module.exports = { createTemplate, getTemplates };
