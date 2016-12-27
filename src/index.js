import aws from 'aws-sdk';

export class SNS {
  constructor(config){
    this.sns = new aws.SNS(config);
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
