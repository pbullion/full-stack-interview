// dependencies
const AWS = require('aws-sdk');
const util = require('util');

// get reference to S3 client
const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
  console.log(
    'Reading options from event:\n',
    util.inspect(event, { depth: 5 })
  );
};
