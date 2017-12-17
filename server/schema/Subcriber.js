var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let subscriberSchema = new Schema({
   name : string,
   message : string,
   email : string
});


mongoose.model('subscriber', subscriberSchema);