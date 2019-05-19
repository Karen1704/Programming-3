const  Base  = require("./class.base.js")
module.exports = class GrassEater  extends Base {
    constructor(x,y){
        super(x,y);
        this.energy=8;
    }
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
       return super.chooseCell(c);
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