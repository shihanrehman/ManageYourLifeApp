var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var dbtwo = mongojs('goallist', ['goallist']);
var dbthree = mongojs('todolist', ['todolist']);

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//Todos Section Of The App CRUD
app.get('/todolist', function (req, res) {

	dbthree.todolist.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});

});

app.post('/todolist', function (req, res) {

	dbthree.todolist.insert(req.body, function (err, docs) {
		res.json(docs);
	});

});

app.delete('/todolist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	dbthree.todolist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.get('/todolist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	dbthree.todolist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.put('/todolist/:id', function (req, res) {
	var id = req.params.id;
	console.log(req.body.name);
	dbthree.todolist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, description: req.body.description, dueDate: req.body.dueDate}},
    	new: true}, function (err, doc) {
      res.json(doc);
	});
});

// Goals Section Of The App CRUD
app.get('/goallist', function (req, res) {

	dbtwo.goallist.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});

});

app.post('/goallist', function (req, res) {

	dbtwo.goallist.insert(req.body, function (err, docs) {
		res.json(docs);
	});

});

app.delete('/goallist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	dbtwo.goallist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});

});

app.get('/goallist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	dbtwo.goallist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.put('/goallist/:id', function (req, res) {
	var id = req.params.id;
	console.log(req.body.name);
	dbthree.todolist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, description: req.body.description, dueDate: req.body.dueDate}},
    	new: true}, function (err, doc) {
      res.json(doc);
	});
});

// Contact Section Of The App CRUD
app.get('/contactlist', function (req, res) {

	db.contactlist.find(function (err, docs) {
		res.json(docs);
	});

});

app.post('/contactlist', function (req, res) {
	db.contactlist.insert(req.body, function (err, doc) {
		res.json(doc);
	});
});

app.delete('/contactlist/:id', function (req, res) {
	var id = req.params.id;
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  db.contactlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
  });


//Server Listen
app.listen(3000, function () {
	console.log('Port 3000');
});