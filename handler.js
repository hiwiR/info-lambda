'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin"  : "Access-Control-Allow-Origin",
      "Access-Control-Allow-Methods" : "Access-Control-Allow-Methods",
    },
    body: JSON.stringify(
      {
        message: 'Hello world info lambda at march 27!!'
      }
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
