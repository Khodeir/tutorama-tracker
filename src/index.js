import aws from 'aws-sdk';

export class SNS {
  constructor(config){
    this.sns = new aws.SNS(config);
  }
  publish(params){
    return new Promise((reject, resolve) => {
      this.sns.publish(params, function(err, data){
        if (err) return reject(err);
        return resolve(data);
      })
    });
  }
}
