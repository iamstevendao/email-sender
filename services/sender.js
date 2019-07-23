const axios = require('axios')

// constants from .env
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SPARKPOST_API_KEY = process.env.SPARKPOST_API_KEY;
const URL_SENDGRID = 'https://api.sendgrid.com/v3/mail/send';
const URL_SPARKPOST = 'https://api.sparkpost.com/api/v1/transmissions';

const send = (mail, callback) => {
  const errors = [];
  // Send by SendGrid
  sendBySendGrid(mail, (resSendGrid) => {
    // Check status code
    if (!validateCode(resSendGrid)) {
      errors.push({ provider: 'SendGrid', message: resSendGrid.errors });
      // Code is failed, try to send by sparkpost
      sendBySparkpost(mail, (resSparkpost) => {
        // Check status code
        if (!validateCode(resSparkpost)) {
          errors.push({ provider: 'Sparkpost', message: resSparkpost.errors });
          // Return fail
          callback({
            success: false,
            status: 400,
            errors,
          });
        } else {
          // Otherwise return success
          callback({
            success: true,
            status: resSparkpost.status,
            errors,
            metadata: {
              provider: 'Sparkpost',
            },
          })
        }
      })
    } else {
      callback({
        success: true,
        status: resSendGrid.status,
        errors,
        metadata: {
          provider: 'SendGrid',
        },
      });
    }
  })
}

/**
 * @summary Decide to return FAIL or TRUE based on the returned status
 * @param {Object} response 
 */
function validateCode(response = {}) {
  if (response.status > 300) {
    return false;
  }
  return true;
}

/**
 * @summary Get array of email address from the string
 * @param {String} str 
 */
function getAddresses(str) {
  if (!str || typeof str !== 'string') {
    return [];
  }
  return str.split(';').map(address => address.trim()).filter(Boolean);
}

function sendBySendGrid(mail, callback) {
  const to = getAddresses(mail.to).map(address => ({ email: address }));
  const cc = getAddresses(mail.cc).map(address => ({ email: address }));
  const bcc = getAddresses(mail.bcc).map(address => ({ email: address }));

  if (!to.length) {
    callback({
      status: 400,
      errors: [{
        message: 'Invalid. Expected valid email address(es)',
        field: 'to',
      }],
    });
  }

  const personalization = { to };

  if (cc.length) {
    Object.assign(personalization, { cc });
  }
  if (bcc.length) {
    Object.assign(personalization, { bcc });
  }

  // SENDGRID
  axios({
    method: 'POST',
    url: URL_SENDGRID,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + SENDGRID_API_KEY,
    },
    data: {
      personalizations: [personalization],
      from: {
        email: mail.from,
      },
      subject: mail.subject,
      content: [{
        type: 'text/plain',
        value: mail.content,
      }],
    }
  })
    .then((res) => {
      callback({ status: res.status });
    })
    .catch((error) => {
      callback({
        status: error.response.status,
        errors: error.response.data,
      });
    })
}

function sendBySparkpost(mail, callback) {
  const to = getAddresses(mail.to).map(address => ({ address: { email: address } }));
  const cc = getAddresses(mail.cc).map(address => ({
    address: { email: address, header_to: to[0] },
  }));
  const bcc = getAddresses(mail.bcc).map(address => ({
    address: { email: address, header_to: to[0] },
  }));

  const content = {
    from: mail.from,
    subject: mail.subject,
    text: mail.content,
  };

  if (cc.length) {
    Object.assign(content, {
      headers: {
        CC: cc[0],
      },
    });
  }

  // SPARKPOST
  axios({
    method: 'POST',
    url: URL_SPARKPOST,
    headers: {
      'Content-Type': 'application/json',
      Authorization: SPARKPOST_API_KEY
    },
    data: {
      options: {
        sandbox: true,
      },
      recipients: [...to, ...cc, ...bcc],
      content,
    }
  })
    .then((res) => {
      callback({ status: res.status })
    }).catch((error) => {
      callback({
        status: error.response.status,
        errors: error.response.data,
      });
    })
}

module.exports = send
