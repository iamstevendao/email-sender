const send = require('./sender.js')

function validateObject(mail) {
  if (!mail) {
    return 'Body is invalid';
  }
  if (!mail.from) {
    return '"from" is required';
  }
  if (!mail.to) {
    return '"to" is required';
  }
  if (!mail.subject) {
    return '"subject" is required';
  }
  if (mail.cc) {
    if (typeof mail.cc !== 'string') {
      return '"cc" must be type of string';
    }
  }
  if (mail.bcc) {
    if (typeof mail.bcc !== 'string') {
      return '"bcc" must be type of string';
    }
  }
  if (mail.content) {
    if (typeof mail.content !== 'string') {
      return '"content" must be type of string';
    }
  }
  return '';
}

// POST
module.exports = (req, res) => {
  const mail = req.body;

  // Start validate the object
  const errorMessage = validateObject(mail);
  if (errorMessage) {
    res
      .status(400)
      .json({
        success: false,
        errors: [{ field: 'validation', message: errorMessage }],
      });
    return;
  }

  // Send email
  send(mail, ({ status, success, errors = [], metadata }) => {
    const response = { success, metadata };
    if (errors.length) {
      Object.assign(response, { errors });
    }
    res
      .status(status)
      .json(response);
  })
}
