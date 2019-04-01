const mongoose = require('mongoose');
const express = require('express');
const body-parser = require('body-parser');
const app = express;
const db = mongoose;

var studentSchema = new db.Schema( {
	Student : String,
	id : String,
	firstName : String,
	lastName : String,
	year : String,
	age : String,
	major : String,
	gpa : String,
});
