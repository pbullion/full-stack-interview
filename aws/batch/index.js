'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const myBucket = process.env.MY_BUCKET;
const myKey = process.env.MY_KEY;
const jobId = `${process.env.AWS_BATCH_JOB_ID}/`;
const params = { Bucket: myBucket, Key: jobId };
console.log('myBucket:', myBucket);
console.log('jobId:', jobId);
console.log('myKey:', myKey);
console.log('params:', params);

s3.putObject(params).promise();
