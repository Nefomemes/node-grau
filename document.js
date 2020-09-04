class Document {

constructor(collection, obj){
if(!collection || collection.constructor !== require("mongodb").Collection){

}
this.#object = obj
require("underscore").each(obj, (value, key) => {
this[key] = value;
})

this.#parent = collection;
}
delete(){
this.#parent.deleteOne(this.#object);
}

s(){
return {collection: this.#parent}
}
}
