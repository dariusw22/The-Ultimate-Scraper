// Variables
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// tittle 
var ArtSchema = new Schema({
     title: {
         type: String,
         required: true
     },
     // link
     link: {
         type: String,
         required: true
     },
     
 });