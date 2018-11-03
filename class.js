



class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(c) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);

                }
            }


        }
        return found;

    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        
        if (newCell && this.multiply >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }




}





class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8
        this.multiply = 0;


    };
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }

    move() {


        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            matrix[this.y][this.x] = 0;

            matrix[newCell[1]][newCell[0]] = 2;
            this.x = newCell[0];
            this.y = newCell[1];
        }
        this.energy--;
        if (this.energy <= 0) {
            this.die();

        }

    }
    eat() {



        var grcells = this.chooseCell(1);
        var eatCells = random(grcells);

        if (eatCells) {
            matrix[this.y][this.x] = 0;
            var newX = eatCells[0];
            var newY = eatCells[1];
            matrix[newY][newX] = 2;
            this.x = newX;
            this.y = newY;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }


            }

            this.energy++;
            if (this.energy >= 5) {
                this.mul();
                this.energy = 0;
            }


        } else {
            this.move();
        }

    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newGrassEater = new GrassEater(newX, newY);
            grassEatArr.push(newGrassEater);

        }
    }
    die() {


        for (var i in grassEatArr) {
            if (this.y == grassEatArr[i].y && this.x == grassEatArr[i].x) {
                grassEatArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }

        }


    }


}






class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8
        this.multiply = 0;


    };
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }

    move() {


        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            matrix[this.y][this.x] = 0;

            matrix[newCell[1]][newCell[0]] = 3;
            this.x = newCell[0];
            this.y = newCell[1];
        }
        this.energy--;
        if (this.energy <= 0) {
            this.die();

        }

    }
    eat() {



        var grcells = this.chooseCell(2);
        var eatCells = random(grcells);

        if (eatCells) {
            matrix[this.y][this.x] = 0;
            var newX = eatCells[0];
            var newY = eatCells[1];
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;
            for (var i in grassEatArr) {
                if (newX == grassEatArr[i].x && newY == grassEatArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }


            }

            this.energy++;
            if (this.energy >= 16) {
                this.mul();
                this.energy = 6;
            }


        } else {
            this.move();
        }

    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newGishatich = new Gishatich(newX, newY);
            gishatichArr.push(newGishatich);

        }
    }
    die() {


        for (var i in gishatichArr) {
            if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                gishatichArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }

        }


    }


}


class Satana {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8
        this.multiply = 0;


    };


    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }

    move() {


        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            matrix[this.y][this.x] = 0;

            matrix[newCell[1]][newCell[0]] = 4;
            this.x = newCell[0];
            this.y = newCell[1];
        }
        this.energy--;

        if (this.energy <= 0) {
            this.die();
        }

    }
    eat() {


        var t = Math.ceil(Math.random() * 3)
        var grcells = this.chooseCell(t);
        var eatCells = random(grcells);

        if (eatCells) {
            matrix[this.y][this.x] = 0;
            var newX = eatCells[0];
            var newY = eatCells[1];
            matrix[newY][newX] = 4;
            this.x = newX;
            this.y = newY;


            if (matrix[newY[newX]] == 3) {
                for (var i in gishatichArr) {
                    if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                        gishatichArr.splice(i, 1);
                        break;
                    }
                }

            }
            else if (matrix[newY[newX]] == 1) {
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }

            }
            else if (matrix[newY[newX]] == 2) {
                for (var i in grassEatArr) {
                    if (newX == grassEatArr[i].x && newY == grassEatArr[i].y) {
                        grassEatArr.splice(i, 1);
                        break;
                    }
                }

            }

            this.energy++;
            if (this.energy >= 30) {
                this.mul();
                this.energy = 5;
            }


        } else {
            this.move();
        }

    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newSatana = new Satana(newX, newY);
            satanaArr.push(newSatana);

        }
    }
    die() {


        for (var i in satanaArr) {
            if (this.y == satanaArr[i].y && this.x == satanaArr[i].x) {
                satanaArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }

        }


    }


}


class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8
        this.multiply = 0;


    };


    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 3, this.y - 3],

            [this.x + 3, this.y - 3],
            [this.x - 3, this.y + 3],
            [this.x + 3, this.y + 3],
        ];
    }
    getNewCoordinates2() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x, this.y - 2],
            
            
            [this.x, this.y + 1],
            [this.x, this.y + 2],
           
            

            [this.x - 1, this.y],
            [this.x - 2, this.y],
           
          
            [this.x + 1, this.y],
            [this.x + 2, this.y],
           
        


        ];
    }
  

    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    chooseCell2(c) {
        this.getNewCoordinates2();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
  
    move() {


        var emptyCells = this.chooseCell2(0);
        var newCell = random(emptyCells);

        if (newCell) {
            matrix[this.y][this.x] = 0;

            matrix[newCell[1]][newCell[0]] = 5;
            this.x = newCell[0];
            this.y = newCell[1];
        }
        this.energy--;

        if (this.energy <= 0) {
            this.die();
        }

    }
    eat() {


        var t = Math.ceil(Math.random() * 4)
        var grcells = this.chooseCell(t);
        var eatCells = random(grcells);

        if (eatCells) {
            matrix[this.y][this.x] = 0;
            var newX = eatCells[0];
            var newY = eatCells[1];
            matrix[newY][newX] = 5;
            this.x = newX;
            this.y = newY;


            if (matrix[newY[newX]] == 3) {
                for (var i in gishatichArr) {
                    if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                        gishatichArr.splice(i, 1);
                        break;
                    }
                }

            }
            else if (matrix[newY[newX]] == 1) {
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }

            }
            else if (matrix[newY[newX]] == 2) {
                for (var i in grassEatArr) {
                    if (newX == grassEatArr[i].x && newY == grassEatArr[i].y) {
                        grassEatArr.splice(i, 1);
                        break;
                    }
                }

            }
            else if (matrix[newY[newX]] == 4) {
                for (var i in satanaArr) {
                    if (newX == satanaArr[i].x && newY == satanaArr[i].y) {
                        satanaArr.splice(i, 1);
                        break;
                    }
                }


            }

            this.energy++;
            if (this.energy >= 45) {
                this.mul();
                this.energy = 5;
            }


        } else {
            this.move();
        }

    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var emptyCells2 = this.chooseCell2(0);
        var newCell = random([emptyCells,emptyCells2]);


        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var newAmen = new Amenaker(newX, newY);
            amenArr.push(newAmen);

        }
    }
    die() {


        for (var i in amenArr) {
            if (this.y == amenArr[i].y && this.x == amenArr[i].x) {
                amenArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }

        }


    }


}
