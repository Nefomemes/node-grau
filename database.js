const supported =  [String, Object, Number, Array];
function main(url, dbName) {
    const mod = this;
    (async function () {
        const { MongoClient } = require("mongodb");
        const assert = require("assert");

        MongoClient.connect(url, function (err, dbClient) {
            assert.equal(null, err);
            mod.client = dbClient;
            db = dbClient.db(dbName);
            function getDoc(collection, docID) {
                return new Promise( (resolve, reject) => {
                    try {
                        (async function () {
                       
                            if (await !collection || await collection.constructor !== String) reject("An invalid collection was provided.");
                            if (await !docID || await !supported.includes(docID.constructor)) reject("Not a valid ID!");
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
                return new Promise((resolve, reject) => {
                    try {
                        (async function () {
                        
                            if (await !collection || await collection.constructor !== String) reject("An invalid collection was provided.");
                            if (await !docID || await !supported.includes(docID.constructor)) reject("Not a valid ID!");
                            if (await !operation || await operation.constructor !== Object) reject("`operation` is not an object!");
                      
                            await delete operation.$currentDate;
                            await getDoc(collection, docID);
                            await db.collection(collection).updateOne({ docID: docID }, { ...operation, $currentDate: { lastModified: true } })
                            await resolve( getDoc(collection, docID));
                        })()
                    } catch (e) {
                        reject(e);
                    }
                })
            }

            mod.updateDoc = updateDoc;
            mod.getDoc = getDoc;
        });
    })();
}
module.exports = main;