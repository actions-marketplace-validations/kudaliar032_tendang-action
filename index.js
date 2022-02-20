const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {
  const tendangUrl = core.getInput('url');
  const tendangToken = core.getInput('token');
  const name = core.getInput('name');
  const value = core.getInput('value');


} catch (error) {
  core.setFailed(error.message);
}