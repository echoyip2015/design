'use strict';

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Design = require('./models/design');
var port = process.env.PORT || 3000;
var app = express();

app.set('views','./views/pages');
app.set('view engine','jade');
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname,'public')));
app.listen(port);

console.log('echo start at' + port);


//index page
app.get('/',function(req,res) {
	Design.fetch(function(err,designs){
		if(err){
			console.log(err)
		}
		res.render('index',{
			title:'design 首页',
			designs : designs		
			
		})
	})
	// res.render('index',{
	// 	title:'design 首页',
	// 	category:[{
	// 		title:'3D家具',
	// 		_id:1,
	// 		poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/19/054640e2387d4afeb0d6e0a7c0d6ef49.jpg_100x86.jpg',
	// 		small:[{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'水生类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'其它'

	// 		}]
	// 	},{
	// 		title:'3D家具',
	// 		_id:1,
	// 		poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/19/054640e2387d4afeb0d6e0a7c0d6ef49.jpg_100x86.jpg',
	// 		small:[{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'水生类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'其它'

	// 		}]
	// 	},{
	// 		title:'3D家具',
	// 		_id:1,
	// 		poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/19/054640e2387d4afeb0d6e0a7c0d6ef49.jpg_100x86.jpg',
	// 		small:[{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'水生类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'其它'

	// 		}]
	// 	},{
	// 		title:'3D家具',
	// 		_id:1,
	// 		poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/19/054640e2387d4afeb0d6e0a7c0d6ef49.jpg_100x86.jpg',
	// 		small:[{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'水生类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'其它'

	// 		}]
	// 	},{
	// 		title:'3D家具',
	// 		_id:1,
	// 		poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/19/054640e2387d4afeb0d6e0a7c0d6ef49.jpg_100x86.jpg',
	// 		small:[{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'水生类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'其它'

	// 		}]
	// 	},{
	// 		title:'3D家具',
	// 		_id:1,
	// 		poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/19/054640e2387d4afeb0d6e0a7c0d6ef49.jpg_100x86.jpg',
	// 		small:[{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'飞行类'

	// 		},{
	// 			_name:'水生类'

	// 		},{
	// 			_name:'爬行类'

	// 		},{
	// 			_name:'其它'

	// 		}]
	// 	}],
	// 	famous:{
	// 		title:'热门模具',
	// 		_list:[{
	// 			title:'美式餐厅吧台吊灯',
	// 			_id:1,
	// 			_vb:'max2010ID',
	// 			_times:258683,
	// 			_size:'4.63MB',
	// 			poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/14/879ee735b2f84e7b86b78ef7c22392f1.jpg_200x200.jpg'


	// 		},{
	// 			title:'美式餐厅吧台吊灯',
	// 			_id:2,
	// 			_vb:'max2010ID',
	// 			_times:258683,
	// 			_size:'4.63MB',
	// 			poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/14/879ee735b2f84e7b86b78ef7c22392f1.jpg_200x200.jpg'


	// 		},{
	// 			title:'美式餐厅吧台吊灯',
	// 			_id:3,
	// 			_vb:'max2010ID',
	// 			_times:258683,
	// 			_size:'4.63MB',
	// 			poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/14/879ee735b2f84e7b86b78ef7c22392f1.jpg_200x200.jpg'
	// 		},{
	// 			title:'美式餐厅吧台吊灯',
	// 			_id:4,
	// 			_vb:'max2010ID',
	// 			_times:258683,
	// 			_size:'4.63MB',
	// 			poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/14/879ee735b2f84e7b86b78ef7c22392f1.jpg_200x200.jpg'
	// 		},{
	// 			title:'美式餐厅吧台吊灯',
	// 			_id:5,
	// 			_vb:'max2010ID',
	// 			_times:258683,
	// 			_size:'4.63MB',
	// 			poster:'http://cdn2.jiajia1.com/Storage1/image/2016/4/14/879ee735b2f84e7b86b78ef7c22392f1.jpg_200x200.jpg'
	// 		}]

	// 	}
		
	// })
})

//detail page
app.get('/movie/:id',function(req,res) {
	var id = req.params.id;
	Design.findById(id,function(err , design){
		res.render('detail',{
			title:'design ' + id,
			movie:design
		})
	})
	
})

//admin page
app.get('/admin/user',function(req,res) {
	res.render('admin',{
		title:'design 后台首页',
		user:{
			doctor:'XXX',
			title:'XX',
			language:'ee'
		}
		
	})
})

