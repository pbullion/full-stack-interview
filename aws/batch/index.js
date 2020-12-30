'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const myBucket = process.env.MY_BUCKET;
console.log('process:', process);
const myKey = process.env.MY_KEY;
const jobId = process.env.AWS_BATCH_JOB_ID;
console.log('jobId:', jobId);
const params = { Bucket: myBucket, Key: myKey };
console.log('params:', params);

s3.putObject({
  Key: `${jobId}`,
  Bucket: `${myBucket}`,
});
