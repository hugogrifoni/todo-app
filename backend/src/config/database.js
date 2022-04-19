const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.export = mongoose.connect('mongodb://127.0.0.1:27017/todo')