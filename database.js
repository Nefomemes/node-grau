const supported =  [String, Object, Number, Array];
function main(url, dbName) {
    (async function () {
        const { MongoClient } = require("mongodb");
        const assert = require("assert");

        MongoClient.connect(url, function (err, dbClient) {
            assert.equal(null, err);
            this.client = dbClient;
            db = dbClient.db(dbName);
            function getDoc(collection, docID) {
                return new Promise(async (resolve, reject) => {
                    try {
                        (async function () {
                       
                            if (await !collection || collection.constructor !== String) reject("An invalid collection was provided.");
                            if (await !docID || !supported.includes(docID.constructor)) reject("Not a valid ID!");
                            var doc = await db.collection(collection).findOne({ docID: docID });

                            if (!doc) {
                                await db.collection(collection).insertOne({ docID: docID })
                                resolve(await db.collection(collection).findOne({ docID: docID }))
                            } else {
                                resolve(doc);
                            }
                        })()
                    } catch (e) {
                        reject(e);
                    }
                })
            }

            function updateDoc(collection, docID, operation) {
                return new Promise(async (resolve, reject) => {
                    try {
                        (async function () {
                           
                            if (await !collection || collection.constructor !== String) reject("An invalid collection was provided.");
                            if (await !operation || operation.constructor !== Object) reject("`operation` is not an object!");
                            if (await !docID || !supported.includes(docID.constructor)) reject("Not a valid ID!");
                            await delete operation.$currentDate;
                            await getDoc(docID);
                            await db.collection(collection).updateOne({ docID: docID }, { ...operation, $currentDate: { lastModified: true } })
                            resolve(await getDoc(docID));
                        })()
                    } catch (e) {
                        reject(e);
                    }
                })
            }
            this.updateDoc = updateDoc;
            this.getDoc = getDoc;
        });
    })();
}
module.exports = main;