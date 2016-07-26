var mongoose = require('mongoose');
var DesignSchema = require('../Schema/design');
var Design = mongoose.model('Design',DesignSchema);

module.exports = Design;
