# FuseJS mongoose 
Using localStorage 

## Usage

### method
* #### creat dataBase
```js
var db = new Mongoose(dbname);
```
    * dbname: the name of database, in localStorage it is a item key

* #### clear memory
```js
    db.clear();
```
    * react-native-mongoose use memory cache database, when not use it, use it clear memory;


* #### creat collection
```js
var collection = this.db.collection(collectionName, capped);
```
    * collectionName: the name of collection
    * capped: {max: Number, unique:String|Array}
        * max: max rows in collection, if not set, have no limit
        * unique: set unique primary key, it can be a single String or a array for keys

* #### insert
```js
var doc = collection.insert(docs);
```
    * docs: to be insert docs, if set capped.max, when reach capped.max, will be replace oldest one, if set capped.unique, e.g: capped.unique is 'a', then a is unique.


* #### upsert
```js
var doc = collection.upsert(docs, query, params);
```
    * docs: need insert or update data
    * query: look Query help
    * params: {limit:Number, offset:Number, strict:bool};
        * limit: need upsert number
        * offset: need upsert start position
        * strict: set compare strict mode, look Query help


* #### update
```js
var doc = collection.upsert(docs, query, params);
```
    * docs: need update data
    * query: look Query help
    * params: {limit:Number, offset:Number, strict:bool};
        * limit: need update number
        * offset: need update start position
        * strict: set compare strict mode, look Query help


* #### remove
```js
var doc = collection.remove(query, params);
```
    * query: look Query help
    * params: {limit:Number, offset:Number, strict:bool};
        * limit: need remove number
        * offset: need remove start position
        * strict: set compare strict mode, look Query help


* #### find
```js
var docs = collection.find(query, params);
```
    * query: look Query help
    * params: {limit:Number, offset:Number, strict:bool};
        * limit: need find number
        * offset: need find start position
        * strict: set compare strict mode, look Query help


* #### findOne
```js
var doc = collection.findOne(query);
```
    * query: look Query help
    * params: {limit:Number, offset:Number, strict:bool};
        * limit: 1
        * offset: need findOne start position
        * strict: set compare strict mode, look Query help

 ### Query help
Query can be a object like {a:1, b:2}, or {a:{$eq:1}, b:{$eq:2}}
also can be a function lick {a:function(a){return a>1}}
operand like follows:
* '$gt':
```js
    return val1 > val2;
```
* '$lt':
```js
    return val1 < val2;
```
* '$gte':
```js
    return val1 >= val2;
```
* '$lte':
```js
    return val1 <= val2;
```
* '$ne':
```js
    return strict ? val1!==val2 : val1!=val2;
```
* '$eq':
```js
    return strict ? val1===val2 : val1==val2;
```
* '$like':
```js
    return new RegExp(val2).test(val1);
```


## Hint
This code is modified to fit in FuseJS
source: https://github.com/remobile/react-native-mongoose
