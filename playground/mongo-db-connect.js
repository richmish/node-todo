const MongoClient = require('mongodb').MongoClient ; 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
	if(err){
		return console.log('Could not connect ');
	}
	console.log('Connected successfully');
	db.collection('Todos').insertOne({
		text:'Something to do',
		completed : false
	},(err,result) =>{
		if(err)
		{
			return console.log('Could not add Todo');
		}

		console.log(JSON.stringify(result.ops,undefined,2));
	})

	db.collection('User').insertOne({
		name:'Richa Mishra',
		age : 30,
		location:'Pune'
	},(err,result) =>{
		if(err)
		{
			return console.log('Could not add User ');
		}

		console.log(JSON.stringify(result.ops,undefined,2));
	})
	db.close();
}
);