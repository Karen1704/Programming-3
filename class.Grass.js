const  Base  = require("./class.base.js")
 module.exports = class Grass extends Base {
    constructor(x, y) {
        super(x,y);
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
        
        return super.chooseCell(c);

    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        //console.log(emptyCells);
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