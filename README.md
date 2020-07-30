# node-grau
A framework for MongoDB Atlas dedicated to Discord bot development. Used by Nefomemes/Kylebot for database purposes.

## Installing the framework
Run this in your console.
```
npm i node-grau
```

## Using the framework
It's simple, as it's a framework ofc.

Before you use this framework, you should have a connection URL of a MongoDB Atlas cluster (or whatever connection url the MongoDB Node.js driver supports).

Because it has a password in it. It is recommended to put the connection url in an `.env` file.

You may want to use the [`dotenv`](https://www.npmjs.com/package/dotenv) dependency if your hosting provider doesn't have an environment variable setup (or you simply uses localhost).

Here we just give a quick code to show you how easy is to use this framework. The code below won't work though because the `url` variable have not been defined.

```js
const grau = require("node-grau");
const db = new grau(url, 'main')

console.log(JSON.stringify(db.getDoc('users', '665419057075585025')))
```

## Documentation

### grau()
----------
Is a contructor ofc, this is the setup function you need to get started.

#### Parameters
| Parameter | Description |
| ----------- | ----------- |
| `url` | The connection URL for your MongoDB database, most likely Atlas. |
| `dbName` | The name of the database you want. |

#### Example
```js
const db = new grau(process.env.DB, 'main')
```

#### Properties
- client

#### Methods

- getDoc()
- updateDoc()

#### Properties

**`client`**

The database client.

##### Returns
Object (the database client)

#### Methods

**`getDoc()`**

Get only a single document. If there is no document with that ID, it will be created.

##### Parameters
| Parameter | Description | Type |
| ----------- | ----------- | ---- |
| `collection` | The collection you want too search the document in. | String |
| `docID` | The main ID of the document, different than the `_id` property every document have. Let's say the user ID, guild ID, or messageID. | Snowflake |

##### Example
```js
const grau = require("node-grau");
const db = new grau(url, 'main')

console.log(JSON.stringify(db.getDoc('users', '665419057075585025')))
```

##### Returns
Object (the document obv)

**updateDoc()**

Update only a single document. If there is no document with that ID, it will be created.

##### Parameters
| Parameter | Description | Type |
| ----------- | ----------- | ---- |
| `collection` | The collection you want too search the document in. | String |
| `docID` | The main ID of the document, different than the `_id` property every document have. Let's say the user ID, guild ID, or messageID. | Snowflake |
| `operation` | Basically the operation you want to do, like `{$set: value}` or etc. You shouldn't add the `$currentDate` operator as the framework automatically sets it to `true`. | Object |

##### Example
```js
const grau = require("node-grau");
const db = new grau(url, 'main')

console.log(JSON.stringify(db.updateDoc('users', '665419057075585025', {$set: {playercard: "grau_damascus"}})))
```

##### Returns
Object (the updated document).

## Frequently Asked Question

### Why node-grau?
Idk.

### Why you choose the name 'node-grau'?
Grau 5.56 was a meta weapon in Call of Duty: Modern Warfare / Warzone, especially before the 'Season 4: Reloaded' update which was when Infinity Ward, the developer, nerfed it. Although it's not as OP as before, it's still used until today, (especially by cheaters lol).

### More features, please.
Soon.
