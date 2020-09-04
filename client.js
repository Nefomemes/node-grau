
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
            mod.nativeClient = dbClient;
           
            
        });
    })();
}
module.exports = GrauClient;
