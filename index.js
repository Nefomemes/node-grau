var mongodb = require("mongodb")

/**
* Get a document that matches the query given. If none matches, a document that matches the query given will be created
* 
* @function
* @returns Promise
*/
mongodb.Collection.prototype.findOneOrCreate = function findOneOrCreate(query) {
    const collection = this;
    return new Promise( (resolve, reject) => {
        try {
            (async function () {
                var doc = await collection.findOne(query);
                if (!doc) {
                    await collection.insertOne(query);
                    resolve(await collection.findOne(query));
                } else {
                    resolve(doc);
                }
            })()
        } catch (e) {
            reject(e);
        }
    })
};
mongodb.Collection.prototype.updateDoc = function updateDoc(query, operation, options) {
    const collection = this;
    return new Promise((resolve, reject) => {
        try {
            (async function () {
        if(!query || !operation)reject("One or more parameters are missing.");
                await collection.findOneOrCreate(query);
                await collection.updateOne(query, operation );
                resolve(await collection.getDoc(query));
            })()
        } catch (e) {
            reject(e);
        }
    })
};

mongodb.Collection.prototype.giveItem = function giveItem(query, string, item, economyOptions){
   const collection = this;
    return new Promise((resolve, reject) => {
        try {
            (async function() {
                if(!query || !string || !item) reject("One or some required parameters are missing.");
                const doc = await collection.getDoc(query);
                const ar =  doc[string]; 
                economyOptions = {};
                var strEconomy = economyOptions.property, money = economyOptions.money;
                if( ar && ar.constructor !== Array) reject("The inventory string is not an array!");
                if( ar && ar.includes(item) && strEconomy && money){
                    let obj = {};
                    obj[strEconomy] = money;

                    resolve(await collection.updateDoc(query,{$inc: obj}));
                } else {
                let obj = {};
                obj[string] = item;
                resolve(await collection.updateDoc(query, {$push: obj}));
                }
            })()
        } catch(e) {
            reject(e);
        }
    })
}

module.exports.mongodb = mongodb;
