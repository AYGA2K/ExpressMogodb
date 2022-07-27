const MongoClient =
  require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
module.exports = async () => {
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return MongoClient;
};
