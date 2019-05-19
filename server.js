
var amenArr = [];
var satanaArr = [];
var gishatichArr = [];
var grassEatArr = [];
var grassArr = [];
var side = 20;
var matrix = [];
var n = 30;

var Grass  = require("./class.Grass.js");
var GrassEater  = require("./class.GrassEater.js");
var Gishatich  = require("./class.Gishatich.js");
var Satana  = require("./class.Satana.js");
var Amenaker  = require("./class.Amenaker.js");






var matrix = [
    [0, 0, 0, 0, 0],
    [1, 0, 3, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 2, 4, 0],
    [0, 0, 0, 0, 5],  
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0],
    [1, 0, 3, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 2, 4, 0],
    [0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
 ];

 var express  = require('express');
 var app = express();
 var server = require('http').Server(app);
 var io = require('socket.io')(server);

 app.use(express.static("."));
 app.get("/",(req,res)=>{
     res.redirect('index.html');
 });
 server.listen(3000);


  function createObject(){
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var great = new GrassEater(x, y);
                grassEatArr.push(great);
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y);
                gishatichArr.push(gish);
            }
            else if (matrix[y][x] == 4) {
                var sat = new Satana(x, y);
                satanaArr.push(sat);
            }
            else if (matrix[y][x] == 5) {
                var amn = new Amenaker(x, y);
                amenArr.push(amn);
            }
        }
    }
  }


  createObject();

function game(){

    for (var i in grassArr) {
        grassArr[i].mul();
    }



    for (var i in grassEatArr) {
        grassEatArr[i].eat();


    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat();


    }
    for (var i in satanaArr) {
        satanaArr[i].eat();


    }
    for (var i in amenArr) {
        amenArr[i].eat();


    }
    io.sockets.emit('matrix',matrix)
}
setInterval(game,10);
