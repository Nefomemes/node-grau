
const supported =  [String, Object, Number];
class GrauClient {
    const mod = this;
constructor(connectionURL){
    mod.connectionURL = connectionURL;
}
    (async function () {
        const { MongoClient } = require("mongodb");
        const assert = require("assert");

        MongoClient.connect(url, function (err, dbClient) {
            assert.equal(null, err);
            mod.client = dbClient;
            db = dbClient.db(dbName);
            
        });
    })();
}
module.exports = GrauClient;
