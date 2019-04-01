const mongoose = require('mongoose');
const express = require('express');
const port = 3000; //port for express
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/test', { useNewUrlParser : true});
const db = mongoose.connection;
/* Start of the setup for express */
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var Schema = mongoose.Schema;
var studentSchema = new Schema( {
	student : Boolean,
	id : String,
	firstName : String,
	lastName : String,
	year : String,
	age : String,
	major : String,
	gpa : String,
});
var studentModel = mongoose.model('student', studentSchema);
studentModel.collection.drop();
//DB SETUP
//FINISHED CHECKING DB, use student as model


/* GET REQUEST TEST */
app.get('/', (req, res) => console.send('Hello, World'));
app.get('/student', (req, res) => {
	studentModel.find().lean().exec(function (err, users) {
		return res.send(JSON.stringify(users));	
	})

});
app.post('/post', (req, res) => {
	var temp = new studentModel(req.body);
	temp.save(err => {
		if (err) return res.status(500).send(err);
		return res.status(200).send(temp);
	})
});
app.patch('/patch', (req, res) => {
	var id_num = req.body.id;
	console.log(id_num);
	console.log(req.body.firstName);
	studentModel.findOne({id : id_num}).exec(function(err, result) {
		if(err) throw err;
		if(result) {
			result.firstName = req.body.firstName;
			result.lastName = req.body.lastName;
			result.year = req.body.year;
			result.age = req.body.age;
			result.major = req.body.major;
			result.gpa = req.body.gpa;
			result.save();
			console.log("new value");	
		} else {
			res.send("not found");	
		}
	
	});
	
	res.end(0);
});
app.delete('/delete', (req, res) => {
	var id_num = req.body.id;
	studentModel.deleteOne({id : id_num}, function(err) {
		if(err) return handleError(err);	
		res.send('Success');
	}); 
})
app.listen(port, () => console.log(`Listening on port ${port}`));

