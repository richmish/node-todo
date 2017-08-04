const {MongoClient, ObjectID} = require('mongodb') ; 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
	if(err){
		return console.log('Could not connect ');
	}
	console.log('Connected successfully');
	
db.collection('User').find().toArray().then((docs) =>{
console.log(JSON.stringify(docs,undefined,2));});

// find and update one
db.collection('User').findOneAndUpdate({
	_id : new ObjectID('598323cec40e5f2f68c68c1c')
},{
	$set : { name : "Richa"},
	$inc: {age : 1}
},{returnOriginal : false}).then((result) => {
   console.log(result);
});
	 //db.close();
}
);