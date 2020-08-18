var userModel = require('../Models/userModel.js');

var listUsers = async function() {
	
	var a = await userModel.listUsers();
	// var b = await userModel.listUsers2();
	// var obj = {"FIRST =>": a, "SECOND =>": b};
	return a;
}
var listUser = async function listUser(id){
	
	var result = await userModel.listUser(id);
	return result;
}

var registerUser = async function registerUser(req){
var result = await userModel.registerUser(req);
return result; 
}
var displayUser= async function displayUser(){
 var result = await userModel.displayUser();
 return result;
}

 var deleteUser = async function deleteUser(req){
 	var result = userModel.deleteUser(req);
 	return result;

 }
// var listUsers = function(cb) {
//  userModel.listUsers(cb);
// }
var userDetails = function(id) {

	return 0;
}


module.exports = {
	'listUsers' : listUsers,
	'listUser' : listUser,
	'userDetails' : userDetails,
	'registerUser' : registerUser,
	'displayUser' : displayUser,
	'deleteUser' :  deleteUser

};
