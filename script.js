
var socket = io();
function setup() {
    frameRate(3)
    createCanvas(n * side, n * side);
    background('#acacac');

    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {

            var k = random([0, 1, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 4, 5, 0, 0, 0, 0, 0, 1, 1, 5, 3, 3, 2, 4, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]);
            matrix[y][x] = k;

        }
    }




}


function drawMatrix(matrix) {
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


}

socket.on("matrix", drawMatrix)








