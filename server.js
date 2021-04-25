var express  = require( 'express' );
var http     = require( 'http' );
var path     = require( 'path' );
var socketIO = require( 'socket.io' );
var app      = express();
var server   = http.Server(app);
var io       = socketIO(server);

app.set('port', 5000);

app.use('/static', express.static(__dirname + '/static'));

// Маршруты
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/views/index.html'));
});
app.get('/index.html', function(request, response) {
    response.sendFile(path.join(__dirname, '/views/index.html'));
});
app.get('/main.html', function(request, response) {
    response.sendFile(path.join(__dirname, '/views/main.html'));
});

app.get('/main', function(request, response) {
    response.sendFile(path.join(__dirname, '/views/main.html'));
});

// Запуск сервера
server.listen(5000, function() {
    console.log('Запускаю сервер на порте 5000');
});

// Обработчик веб-сокетов
io.on('connection', function(socket) {
});

connection.connect(function(){
    console.log('Connecting to DB to Check');
});

var team_energy_default = 4096;

var position_default = {
    x: 0,
    y: 0
}

var movement_default = {
    up: false,
    down: false,
    left: false,
    right: false
}

var player_default = {
    socket: null,
    name: "Adam",
    team: 'l',
    energy: 1024,
    position: position_default,
    movement: movement_default
}

var room = {
    team_l: {
        energy: team_energy_default,
        has_generator: false
    },
    team_r: {
        energy: team_energy_default,
        has_generator: false
    },
    map: "metro",
    players: [],
    log: []
}
