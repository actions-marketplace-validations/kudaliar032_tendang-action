const core = require('@actions/core');
const tendang = require('./tendang');

async function run() {
  try {
    const url = core.getInput('url', { required: true });
    const token = core.getInput('token', { required: true });
    const name = core.getInput('name', { required: true });
    const value = core.getInput('value');
    const tendangResponse = await tendang(url, token, name, value);
    core.info(tendangResponse);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
