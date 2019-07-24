const send = require('./sender.js')

/**
 * @summary Validate the mail object if the required fields are missing or have invalid type
 * @param {object} mail
 * 
 * @return {String} Error message, returns an empty string if no errors
 */
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

/**
 * @summary Call back function for POST request to send email
 * 
 * @param {Object} req
 * @param {Object} res
 * 
 * @return {Object} Promise, contains success (TRUE/FALSE), errors and metadata
 */
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
