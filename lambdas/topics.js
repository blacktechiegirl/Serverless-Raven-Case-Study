const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const dynamo = new DynamoDBClient({});

function sortByDate(a, b) {
  if (a.date > b.date) {
    return -1;
  } else return 1;
}

const getTopics = async (event) => {
    const topicvalue = event.pathParameters.topicId
  const response = { 
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          'Access-Control-Allow-Credentials': true,
      },
   };

  try {
      let data;
      const params = {
          TableName: process.env.DYNAMODB_TABLE_NAME,
        };
      const { Items } = await dynamo.send(new ScanCommand(params));
      data = Items.map((item) => unmarshall(item))
      data = data.sort(sortByDate)

      const newdata = data.filter((item) => item.topics.includes(topicvalue) )

      response.body = JSON.stringify({
          status: "success",
          result: data.length,
          data: newdata
      });
  
  } catch (e) {
      console.error(e);
      response.statusCode = 500;
      response.body = JSON.stringify({
          message: "Failed to retrieve posts.",
          errorMsg: e.message,
          errorStack: e.stack,
      });
  }

  return response;
};

module.exports = { getTopics};