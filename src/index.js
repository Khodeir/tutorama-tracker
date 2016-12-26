import aws from 'aws-sdk';
import { awsSNS } from './config';
import { topics } from './topics';

export const Topics = topics;

const sns = new aws.SNS(awsSNS);

// See a list of params in the AWS SNS Docs.
// DOC: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html#publish-property
export function publish(params){
  return new Promise((reject, resolve) => {
    sns.publish(params, function(err, data){
      if (err) return reject(err);
      return resolve(data);
    })
  });
}
