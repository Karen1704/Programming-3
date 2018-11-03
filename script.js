
var amenArr=[];
var satanaArr=[];
var gishatichArr=[];
var grassEatArr = [];
var grassArr = [];
var side = 25;
var matrix = [];
var n = 25;



     
// var matrix = [
//     [0, 0, 0, 0, 0],
//     [1, 0, 3, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 2, 4, 0],
//     [0, 0, 0, 0, 5],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0]
//     [0, 0, 0, 0, 0],
//     [1, 0, 3, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 2, 4, 0],
//     [0, 0, 0, 0, 5],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0]
//  ];
 


function setup() {
    frameRate(3)
    createCanvas(n * side, n * side);
    background('#acacac');

    for (var y = 0; y < n; y++) {
    matrix[y] = [];
        for (var x = 0; x < n; x++) {
    
            var k = random([0,1,1,1,1,1,1,5,5,5,1,1,1,1,1,0,0,0,0,0,2,2,2,0,0,0,4,5,0,0,0,0,0,1,1,5,3,3,2,4,0,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]);
            matrix[y][x] = k;
    
        }
    }  

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


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 5) {
                fill("purple");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);

            }
        }
    }


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

   
    
    
    



}
//console.log(grassArr);








