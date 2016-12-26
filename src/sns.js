import aws from 'aws-sdk';

export default class SNS {
  constructor(config){
    this.sns = new aws.SNS(config);
  }
  publish(params){
    return new Promise((reject, resolve) => {
      sns.publish(params, function(err, data){
        if (err) return reject(err);
        return resolve(data);
      })
    });
  }
}
