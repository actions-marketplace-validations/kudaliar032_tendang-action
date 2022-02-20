const core = require('@actions/core');
const axios = require('axios');

async function run() {
  const url = core.getInput('url', { required: true });
  const token = core.getInput('token', { required: true });
  const name = core.getInput('name', { required: true });
  const value = core.getInput('value');

  await axios({
    method: 'post',
    url,
    data: {
      token,
      name,
      value,
    },
  });
  core.info('🎉 Deployment successfully.');
}

run().catch((error) => {
  if (error.response && error.response.status === 401) {
    core.setFailed('👮 Deployment unauthorized, please check your token or your deployment name.');
  } else if (error.response && error.response.status === 400) {
    core.setFailed('🚫 Deployment failed, request invalid check your value.');
  } else if (error.response && error.response.status === 500) {
    core.setFailed('❌ Deployment failed, please check tendang log.');
  } else {
    core.setFailed(error.message);
  }
});
