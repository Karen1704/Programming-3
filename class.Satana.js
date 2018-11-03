class Satana extends Base {
    constructor(x,y){
        super(x,y);
        this.energy=8;
    }


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
        return super.chooseCell(c);

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