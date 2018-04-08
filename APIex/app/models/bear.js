var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;// schema is a table and to make it easy make it schema

var BearSchema   = new Schema({ //special word to make a new empty object letral
    name: String//special keyword
});

module.exports/*take out and make available to server*/ = mongoose.model('Bear', BearSchema);