class Snake {

    possibleDirections = [];
    body = [];
    direction = null;

    constructor() {
        this.possibleDirections = ["down", "up", "right", "left"];
        this.body = [{
            x: 1,
            y: 1
        }];
        this.direction = "down";
    }

    changeDirection (newDirection) {
        if (!this.possibleDirections.includes(newDirection)) {
            throw new Error(newDirection + "isn`t correct direction.")
        }
        if (this.isPassedOppositeDirection(newDirection)) {
            return;
        }
        this.direction = newDirection;
    }

    isPassedOppositeDirection(newDirection) {
        if ((this.direction == "down" && newDirection == "up")||(this.direction == "up" && newDirection == "down")) {
            return true;
        }
        if ((this.direction == "left" && newDirection == "right")||(this.direction == "right" && newDirection == "left")) {
            return true;
        }
        return false;
    }

    performStep() {
        let currentHeadCoord = this.body[0];
        let newHeadCoord = {
            x: currentHeadCoord.x,
            y: currentHeadCoord.y,
        };
        switch (this.direction) {
            case "down":
                newHeadCoord.x++;
                break;
            case "up":
                newHeadCoord.x--;
                break;
            case "left":
                newHeadCoord.y--;
                break;
            case "right":
                newHeadCoord.y++;
                break;
        }
        this.body.unshift(newHeadCoord);
        this.body.pop();
    }

    increaseBody() {
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };
        this.body.push(newBodyLastCell);
    }
}