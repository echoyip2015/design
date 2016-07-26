var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var DesignSchema = new Schema({
	title: String,
	famous: {
		title:String,
		_list:[{
			title:String,
			_id:Number,
			_vb:String,
			_times:Number,
			_size:String,
			poster:String
		}]
	},
	images:{
		coverSmall: String,
		coverBig:String,
	},
	category:[{
		title:String,
		_id:String,
		poster:String,
		samll:String,
		
	}],
	meta:{
		createAt:{
			type: Date,
			default:Date.now()
		},
		updateAt:{
			type: Date,
			default:Date.now()
		}
	}
})

DesignSchema.pre('save',function(){
	if(this.isNew){
		this.meta.createAt =  this.meta.updateAt = Date.now();
	}
	else{
		this.meta.updateAt = Date.now();
	}
})

DesignSchema.statics = {
	fetch:function(cb){
		return this
		.find({})
		.sort('meta.updateAt')
		exec(cb)
	},
	findByID:function(id ,cb){
		return this
			.findOne({_id:id})
	}
}

// var Movie = mongodb.mongoose.model("Movie",MovieSchema);
// var MovieDAO = function(){};

module.exports = DesignSchema