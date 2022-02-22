const axios = require('axios');
const messages = require('./messages');

function tendang(url, token, name, value) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: {
        token,
        name,
        value,
      },
    }).then(() => {
      resolve(messages.SUCCESS);
    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        reject(new Error(messages.UNAUTHORIZED));
      } else if (error.response && error.response.status === 400) {
        reject(new Error(messages.INVALID_VALUE));
      } else if (error.response && error.response.status === 500) {
        reject(new Error(messages.DEPLOYMENT_FAILED));
      } else if (error.response && error.response.status === 504) {
        reject(new Error(messages.DEPLOYMENT_TIMEOUT));
      } else {
        reject(new Error(`❌ ${error.message}`));
      }
    });
  });
}

module.exports = tendang;
