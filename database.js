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
                            if (await !operation || await operation.constructor !== Object) reject("Not a valid operation!");
                      
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
            function giveItem(collection, docID, string, item, strEconomy, money){
                return new Promise((resolve, reject) => {
                    try {
                        (async function() {
                            if(await !collection || await collection.constructor !== String) reject("An invalid collection was given!");
                            if(await !docID || await !supported.includes(docID.constructor)) reject("Not a valid ID!");
                            if(await !string || await  string.constructor !== String)reject("Not a valid inventory string!");
                            if(await !item || await !supported.includes(item.constructor)) reject("Not a valid item. This function does NOT support bulk giving.");
                            if(await strEconomy && await strEconomy.constructor !== String)reject("Not a valid economy string!");
                            if(await money && await money.constructor !== Number)reject("Not a valid value of money!");
                            if(await strEconomy && await !money)reject("strEconomy was specified but not money.");
                            if(await money && await !strEconomy)reject("money was specified but not strEconomy.");

                            const doc = await getDoc(collection, docID);
                            const ar = await doc[string]; 
                            if(await ar && ar.constructor !== Array)reject("The inventory string is not an array!");
                            if(await ar && ar.includes(item) && strEconomy && money){
                                let obj = {};
                                obj[strEconomy] = money;

                                resolve(await updateDoc(collection, docID,{$inc: obj}));
                            } else {
                            let obj = {};
                            obj[string] = item;
                            resolve(await updateDoc(collection, docID, {$push: obj}));
                            }
                        })()
                    } catch(e) {
                        reject(e);
                    }
                })
            }

            mod.updateDoc = updateDoc;
            mod.getDoc    = getDoc;
            mod.giveItem = giveItem;
        });
    })();
}
module.exports = main;