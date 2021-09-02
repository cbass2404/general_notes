# MongoDB

[MongoDB Documentation](https://www.mongodb.com)

Mongo is short for humongous, because it can store lots and lot of data.

How it works:

-   collections (e.g. users, orders, etc...)
-   documents (e.g. {name: 'Max', age: 29})
    -   Schemaless, data doesn't have to match other documents in the same collection
    -   uses the JSON (BSON) Data Format
    -   can query data in the structure you need out of the box
    -   allows changes without complex server restructuring

```json
{
    "name": "Max",
    "age": 29,
    "address": {
        "city": "Munich"
    },
    "hobbies": [{ "name": "Cooking" }, { "name": "Sports" }]
}
```

A core of mongodb is that you have less collections to sort through, relational data needs to be merged manually (kind of).

MongoDB can be used for All types of applications due to its flexibility, speed, and nearly limitless data storage.

Types:

-   MongoDB Database
    -   Self-Managed/Enterprise
        -   CloudManager/OpsManager
    -   Atlas (Cload)
    -   Mobile
    -   Compass
    -   Bi Connectors
    -   MongDB Charts
        -   Data analytics
-   Stitch
    -   Serverless Query API
    -   Serverless Functions (e.g. AWS Lambda, Google Cloud Functions)
    -   Database triggers (e.g. email about documents on add)
    -   Real-Time Sync (e.g. used to synchronize cloud database with mobile device)

## Installation

1. Go to documentation link and install the client (community is free) and mongodb tools
2. set environment variable to the bin directory for both installations
3. it should run now

There are language specific drivers to use [here](https://docs.mongodb.com/drivers/) for individual projects

## Running

In your terminal use the following command to enter the mongo shell in windows

```
$ mongo
```

To stop mongodb from running as a service on windows open a terminal as administrator and run the following

```
$ net stop MongoDB
```

To run manually if not a service run the following command, possibly with administrator mode turned on in windows or sudo command in mac/linux

```
$ mongod
```

_this starts the mongodb service_

_if you choose a custom db path do the following in your terminal, white spaces in path should be wrapped in curly braces_

_if you chose to stop mongo as a service it may not start without setting the path as below_

```
$ mongod --dbpath "path"
```

## Basics and CRUD Operations

```js
show dbs
```
_cls clears your console screen_

_shows all created databases in the shell_

```js
use name
```

_enters or creates a database if it does not exist_

```js
db.products.insertOne({name: "A Book", price: 12.99})

// returns
{
        "acknowledged" : true,
        "insertedId" : ObjectId("60e4f99256bbd7a2689cdcdb")
}
```

_db refers to the database, products to the collection, insertOne inserts a document into the collection_

```js
db.products.find()

// returns
{ "_id" : ObjectId("60e4f99256bbd7a2689cdcdb"), "name" : "A Book", "price" : 12.99 }
```

_returns all entries in the collection, alternatively you can add .pretty() for a more human readable format_
