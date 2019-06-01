var Paint = {};
Paint.board = document.getElementById("canvas");
var draw = false;


Paint.start = function () {
    Paint.board.addEventListener("mousemove", Paint.makepoint);
    Paint.board.addEventListener("mousedown", Paint.turnOn);
    Paint.board.addEventListener("mouseup", Paint.turnOff);
    document.getElementById("reset").addEventListener("click", Paint.reset);
}

Paint.turnOn = function () {
    draw = true;
}

Paint.turnOff = function () {
    draw = false;
}

Paint.reset = function () {
    document.getElementById("canvas").innerHTML="";
}
Paint.makepoint = function (e) {
    if (draw === true) {
        var point = document.createElement("div");
        point.style.backgroundColor = myColor.value;
        point.style.height = document.getElementById("size").value + "px";
        point.style.width = document.getElementById("size").value + "px";
        point.style.position = "absolute";
        var coordinates = myFunction(e);
        point.style.left = coordinates[0] + "px";
        point.style.top = (coordinates[1] - 50) + "px";
        Paint.board.appendChild(point);
    }

}

function myFunction(e) {
    var x_pos = e.clientX;
    var y_pos = e.clientY;
    var coor = "Coordinates: (" + x_pos + "," + y_pos + ")";
    return [x_pos, y_pos];
}

Paint.start();