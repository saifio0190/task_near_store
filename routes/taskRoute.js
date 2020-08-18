var taskController = require('../Controllers/taskController');
var taskRouteG = require('./routeG');
module.exports = function (app) {
	
	
	// app.use('/taskDone',taskRouteG);

	
	app.post('/addNew',taskController.addNew);
	app.get('/',taskController.home);
	app.get('/task',taskController.task);
	app.get('/home',taskController.home);
	
	
	


}


