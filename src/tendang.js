const axios = require('axios');

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
      resolve('🎉 Deployment successfully.');
    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        reject(new Error('👮 Deployment unauthorized, please check your token or your deployment name.'));
      } else if (error.response && error.response.status === 400) {
        reject(new Error('🚫 Deployment failed, request invalid check your value.'));
      } else if (error.response && error.response.status === 500) {
        reject(new Error('❌ Deployment failed, please check tendang log.'));
      } else {
        reject(new Error(`❌ ${error.message}`));
      }
    });
  });
}

module.exports = tendang;
