<div style="">
<img src="https://i.imgur.com/0r8GHp9.png" width="100px" height="100px" style="float: right;" />

<h1 style="border: none; float: left;">node-grau</h1>

<p>A framework for MongoDB Atlas dedicated to Discord bot development. Used by Nefomemes/Kylebot for database purposes.</p>

## Installing the framework
<p>Run this in your console.</p>

```
npm i node-grau
```

## Using the framework
<p>It's simple, as it's a framework ofc.</p>

<p>Before you use this framework, you should have a connection URL of a MongoDB Atlas cluster (or whatever connection url the MongoDB Node.js driver supports).</p>

<p>Because it has a password in it. It is recommended to put the connection url in an `.env` file.</p>

<p>You may want to use the <a href="https://www.npmjs.com/package/dotenv">dotenv</a> dependency if your hosting provider doesn't have an environment variable setup (or you simply uses localhost).</p>

<p>Here we just give a quick code to show you how easy is to use this framework. The code below won't work though because the `url` variable have not been defined.</p>

```js
const grau = require("node-grau");
const db = new grau(url, 'main')

console.log(JSON.stringify(db.getDoc('users', '665419057075585025')))
```

## Documentation

### grau()
----------
,p>Is a contructor ofc, this is the setup function you need to get started.</p>

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
- <p>client</p>

#### Methods

- <p>getDoc()</p>
- <p>updateDoc()</p>

#### Properties

**`client`**

<p>The database client.</p>

##### Returns
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object (the database client)</a></p>

#### Methods

**`getDoc()`**

Get only a single document. If there is no document with that ID, it will be created.

##### Parameters
| Parameter | Description | Type |
| ----------- | ----------- | ---- |
| `collection` | The collection you want to search the document in. | String |
| `docID` | The main ID of the document, different than the `_id` property every document have. Let's say the user ID, guild ID, or messageID. | You can use either String, Object, Number, or Array. |

##### Example
```js
const grau = require("node-grau");
const db = new grau(url, 'main')

console.log(JSON.stringify(db.getDoc('users', '665419057075585025')))
```

##### Returns
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a> (the document obv)</p>

**updateDoc()**

Update only a single document. If there is no document with that ID, it will be created.

##### Parameters
| Parameter | Description | Type |
| ----------- | ----------- | ---- |
| `collection` | The collection you want to search the document in. | String |
| `docID` | The main ID of the document, different than the `_id` property every document have. Let's say the user ID, guild ID, or messageID. | You can use either String, Object, Number, or Array. |
| `operation` | Basically the operation you want to do, like `{$set: value}` or etc. You shouldn't add the `$currentDate` operator as the framework automatically sets it to `true`. | Object |

##### Example
```js
const grau = require("node-grau");
const db = new grau(url, 'main')

console.log(JSON.stringify(db.updateDoc('users', '665419057075585025', {$set: {playercard: "grau_damascus"}})))
```

##### Returns
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Object</a> (the updated document).</p>

## Frequently Asked Question

### Why node-grau?
<p>Idk.</p>

### Why you choose the name 'node-grau'?
<p>Grau 5.56 was a meta weapon in <a href="">Call of Duty: Modern Warfare / Warzone</a>, especially before the 'Season 4: Reloaded' update which was when Infinity Ward, the developer, nerfed it. Although it's not as OP as before, it's still used until today, (especially by cheaters lol).</p>

### More features, please.
<p>Soon.</p>

Copyright 2020 Nefomemes. This framework is licensed under the MIT lisence. Some assets contains property owned by Activision (for example, in-game assets of Call of Duty: Modern Warfare).
</div>
