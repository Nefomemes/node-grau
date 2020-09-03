
const supported =  [String, Object, Number];
function main(url, dbName) {
    const mod = this;
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
module.exports = main;
