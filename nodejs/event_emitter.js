const EventEmitter = require('events');

class Player extends EventEmitter { };

var player = new Player();

player.on('play', (track) => {
    console.log(`正在播放:《${track}》`);
})

player.emit('play', '呵呵');
player.emit('play', '呵呵1');