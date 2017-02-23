import SNSClient from 'aws-sdk/clients/SNS';

export class SNS {
  constructor(config){
    this.sns = new SNSClient(config);
  }
  publish(message, topicARN){
    return new Promise((reject, resolve) => {
      this.sns.publish({
        Message: message,
        TopicArn: topicARN
      }, function(err, data){
        if (err) return reject(err);
        return resolve(data);
      })
    });
  }
}
