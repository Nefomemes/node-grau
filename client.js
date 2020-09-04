

const { MongoClient } = require("mongodb")
class GrauClient extends MongoClient {
    (async function () {
 await super.connect();
    })();
}
module.exports = GrauClient;
