var io = require('socket.io')();

io.on('connection',function(_socket){
	_socket.emit('message','success');
	_socket.on('send',function(msg){
		console.log(msg.nickname);
		io.sockets.emit('resend123',msg);
	})
});

exports.listen = function(_server){
	return io.listen(_server);
}