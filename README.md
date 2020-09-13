
<img src="https://i.imgur.com/jRLmdla.jpg" width="100px" height="100px" style="float: right;" />
<h1 style="border: none;">node-grau</h1>
<img src="https://nodei.co/npm/node-grau.png?compact=true"/> <br/>
<img alt="npm" src="https://img.shields.io/npm/dt/node-grau?style=flat-square&logo=npm&color=blue" style="margin-right: 1px;">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Nefomemes/node-grau?style=flat-square&logo=github" style="margin-right: 1px;">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/Nefomemes/node-grau?style=flat-square&logo=github" style="margin-right: 1px;"> 
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/node-grau?style=flat-square&logo=npm" style="margin-right: 1px;">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/node-grau?style=flat-square&logo=npm" style="margin-right: 1px;">
<img alt="Discord support server" src="https://img.shields.io/badge/discord-SCMQwzC-blue?style=flat-square&logo=discord&logoColor=white" style="margin-right: 1px;">

<p>     A small but powerful and flexible MongoDB Atlas framework dedicated for Discord bot development. Used by <a href="https://github.com/Nefomemes/Kylebot">Nefomemes/Kylebot</a> for database purposes.</p>

<p>     Grau 5.56 was an overpowered assault rifle in Call of Duty: Modern Warfare and its Warzone. Unline the Bruen MK9 that have became a trash gun, this rifle survived the nerf that have been implemented since the "Season 4: Reloaded" update. This rifle is still commonly used across multiple gunfights and engagements across Verdansk(the name of the BR  ap in Modern Warfare's Warzone). It has decent recoil, decent damage range, and absolutely one of the go to rifle in Modern Warfare's Warzone.</p>

<p>     The Grau vector is made by Gordon#2059. But I have added some changes though. It's not the same as the in-gane model, but at least it resembles it. Btw, I am on mobile so it will look less detailed on the modified parts.</p>

<h2>Why is this important?</h3>

<p>¯\_(ツ)_/¯, I use this for my projects. Which you know, copy and pasting the utility module isn't that great. So I publish it to NPM anyways.</p> 

<h2>API Reference</h2>
<p>As this is basically an addon for the official MongoDB Node.js driver. We will use <code>>package_name<</code> to help you understanding things here.</p>

<h3>Addons</h3>
<p>Here are full in-depth API reference of add-ons we implemented to the MongoDB Node.js Driver.</p>

```
>mongodb<.Collection()

    - Methods added 

        - getDoc()

            Get a document that matches the query given. If none matches, a document that matches the query given will be created. Returns Promise<Object>.

            ----------------------------------------------------------------------------------------------------------
            | Parameter        | Optional | Default | Type                       | Description                       |
            | ---------------- | -------- | ------- | -------------------------- | --------------------------------- |
            | query            | false    | null    | Anything                   | The object you want to match with |
            |                  |          |         |                            | the documents.                    |
            ----------------------------------------------------------------------------------------------------------

        - updateDoc()

            Update a document that matches the query given. If none matches, a document that matches the query given will be created and that document will be the one edited. Returns Promise<Object>.

            ---------------------------------------------------------------------------------------------------------
            | Parameter       | Optional | Default | Type                       | Description                       |
            | --------------- | -------- | ------- | -------------------------- | --------------------------------- |
            | query           | false    | null    | Anything                   | The object you want to match with |
            |                 |          |         |                            | the documents.                    |
            | --------------- | -------- | ------- | -------------------------- | ----------------------------------|
            | operation       | false    | null    | Object                     | Regular MongoDB operators object  |
            |                 |          |         |                            | you use.                          |
            ---------------------------------------------------------------------------------------------------------

        - giveItem()

            Add an item to a property of a document that matches the query given. If none matches, a document that matches the query given will be created and that document will be the one edited. If the property already have the item, it wont receive the item or will receive an increment in their currency property. Returns Promise<Object>.

            ---------------------------------------------------------------------------------------------------------
            | Parameter       | Optional | Default | Type                       | Description                       |
            | --------------- | -------- | ------- | -------------------------- | --------------------------------- |
            | query           | false    | null    | Anything                   | The object you want to match with |
            |                 |          |         |                            | the documents.                    |
            | --------------- | -------- | ------- | -------------------------- | --------------------------------- |
            | property        | false    | null    | Anything                   | The name of the property you want |
            |                 |          |         |                            | the item to be given to.          |
            | --------------- | -------- | ------- | -------------------------- | --------------------------------- |
            | item            | false    | null    | Anything                   | The item you want to add to the   |
            |                 |          |         |                            | property.                         |
            | --------------- | -------- | ------- | -------------------------- | --------------------------------- |
            | economySettings | true     | {}      | Object                     | The settings for the economy      |
            |                 |          |         |                            | increment thing.                  |
            | --------------- | -------- | ------- | -------------------------- | --------------------------------- |
            | economySettings | false    | null    | Object                     | The property you want to          |
            | .property       |          |         |                            | increment. Rules in MongoDB       |
            |                 |          |         |                            | Operators applies.                |
            | --------------- | -------- | ------- | -------------------------- | --------------------------------- |
            | economySettings | false    | null    | Number                     | How much the value you want to be |
            | .money          |          |         |                            | incremented with.                 |
            ---------------------------------------------------------------------------------------------------------
        
```

<h2>Bugs and Feature Requests</h2>
<p>All bug reports and feature requests can be submitted trough making a new issue.</p>

<h2>Contributing</h2>
<p>Just fork the repository, do whatever you want. The create a new pull request.</p>
