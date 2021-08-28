const ws = new WebSocket('ws://127.0.1.1:9000/');

ws.onopen = function () {
    ws.send('大家好');
}

ws.onmessage = function (event) {
    chatroom.innerHTML += '<br/>' + event.data;
}

ws.onclose = function () {
    alert('Closed');
}

ws.onerror = function (err) {
    alert('Error:' + err);
}