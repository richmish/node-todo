const {MongoClient, ObjectID} = require('mongodb') ; 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
	if(err){
		return console.log('Could not connect ');
	}
	console.log('Connected successfully');
	// db.collection('Todos').insertOne({
	// 	text:'Eat Breakfast',
	// 	completed : false
	// },(err,result) =>{
	// 	if(err)
	// 	{
	// 		return console.log('Could not add Todo');
	// 	}

	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// })
	// db.collection('Todos').insertOne({
	// 	text:'Do Exercise',
	// 	completed : false
	// },(err,result) =>{
	// 	if(err)
	// 	{
	// 		return console.log('Could not add Todo');
	// 	}

	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// })

	// db.collection('User').insertOne({
	// 	name:'Richa Mishra',
	// 	age : 30,
	// 	location:'Pune'
	// },(err,result) =>{
	// 	if(err)
	// 	{
	// 		return console.log('Could not add User ');
	// 	}

	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// })

//delete many
// delete one
db.collection('Todos').deleteOne({text : 'Eat Breakfast'}).then((result) =>{ 
	console.log(result);
});

// find and delete one
// db.collection('Todos').find().toArray().then((docs) =>{
// console.log(JSON.stringify(docs,undefined,2));});
	 //db.close();
}
);