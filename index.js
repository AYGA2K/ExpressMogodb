const mongo = require("./mongo");

const connectmongoDB = async () => {
  await mongo().then((MongoClient) => {
    try {
      console.log("Connected to MongoDB");
    } catch (err) {
      console.log(err);
    }
  });
};
connectmongoDB();
