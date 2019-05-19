const  Base  = require("./class.base.js")
module.exports = class Gishatich  extends Base{
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
