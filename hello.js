// Load the http module to create an http server.
var http = require('http');

// Load the Ghost Module and Start Ghost
var ghost = require('ghost');
process.env.NODE_ENV = 'development';
ghost({ config: __dirname + '/content/config.js' }).then(function (ghostServer) {
    ghostServer.start();

});




    
    
	// process.env.NODE_ENV = 'development';
	// ghost({ config: __dirname + '/ghost-config.js' }).then(function (ghostServer) {
	// 	ghostServer.start();
	// });