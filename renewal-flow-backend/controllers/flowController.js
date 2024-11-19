// server/controllers/flowController.js
const FlowLog = require('../models/FlowLog');
const mailer = require('../config/mailer');

const emailTemplates = {
  Reminder: {
    subject: 'Reminder: Renew Your Subscription',
    body: 'This is a reminder to renew your subscription. Please take action to continue enjoying our services.'
  },
  ThankYou: {
    subject: 'Thank You for Renewing Your Subscription',
    body: 'Thank you for renewing your subscription. We appreciate your continued support.'
  }
};

const startFlow = async (req, res) => {
  const { userEmail } = req.body;

  const log = new FlowLog({ userEmail });
  await log.save();

  const logs = [];
  const addLog = (message, timestamp) => {
    logs.push({ message, timestamp });
    log.logs.push(`${timestamp} - ${message}`);
  };

  console.log('Flow started for:', userEmail);
  addLog('Flow started', new Date().toISOString());

  // Send the initial reminder email
  await sendReminderEmail(userEmail, log, logs);

  // Wait for 3 days and check the renewal status
  setTimeout(async () => {
    const renewed = Math.random() > 0.5; // Randomize outcome
    if (renewed) {
      addLog('Subscription renewed. Sending Thank You email', new Date().toISOString());
      log.status = 'Completed';
      await log.save();

      await sendThankYouEmail(userEmail, log, logs);
    } else {
      addLog('Subscription not renewed', new Date().toISOString());

      // Send a second reminder email
      await sendReminderEmail(userEmail, log, logs);

      // Wait for 2 days and check the renewal status again
      setTimeout(async () => {
        const renewed2 = Math.random() > 0.5;
        if (renewed2) {
          addLog('Subscription renewed. Sending Thank You email', new Date().toISOString());
          log.status = 'Completed';
          await log.save();

          await sendThankYouEmail(userEmail, log, logs);
        } else {
          addLog('Subscription not renewed', new Date().toISOString());
          log.status = 'Ended';
          await log.save();
        }
      }, 20000); // 2 days
    }
  }, 30000); // 3 days

  res.status(200).json({ message: 'Flow started.', logs });
};

const sendReminderEmail = async (userEmail, log, logs) => {
  const emailTemplate = emailTemplates.Reminder;
  if (!emailTemplate) {
    console.error('Reminder email template not found');
    addLog(logs, 'Reminder email template not found', new Date().toISOString());
    await log.save();
    return;
  }

  await mailer().sendMail({
    to: userEmail,
    subject: emailTemplate.subject,
    text: emailTemplate.body,
  });

  addLog(logs, 'Reminder email sent', new Date().toISOString());
  await log.save();
};

const sendThankYouEmail = async (userEmail, log, logs) => {
  const thankYouTemplate = emailTemplates.ThankYou;
  if (!thankYouTemplate) {
    console.error('Thank You email template not found');
    addLog(logs, 'Thank You email template not found', new Date().toISOString());
    await log.save();
    return;
  }

  await mailer().sendMail({
    to: userEmail,
    subject: thankYouTemplate.subject,
    text: thankYouTemplate.body,
  });

  addLog(logs, 'Thank you email sent', new Date().toISOString());
  await log.save();
};

module.exports = { startFlow };