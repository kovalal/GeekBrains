const config = {
    rowsCount: 10,
    colsCount: 10,
};


const player = {
    x: 0,
    y: 0,

    move(nextPoint){
        this.x = nextPoint.x;
        this.y = nextPoint.y;

    }
};


let mover = {
    getDirection() {
        const availableDirections = [4, 6, 8, 2];
        while(true) {
            let direction = Number(prompt('Input 2, 4, 6 or 8, where you go'));
            if (isNaN(direction)){
                return null;
            }
            if (!availableDirections.includes(direction)){
                alert("for moving input 2, 4, 6  or 8");
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
        }
        return nextPosition;
    }

};

let renderer = {
    map: "",

    render() {
        for (let row = 0; row < config.rowsCount; row++){
            for (let col = 0; col < config.colsCount; col++){
                if (player.y == row && player.x == col) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map)
    },

    clear() {
        console.clear();
        this.map = "";
    }
};

let game = {
    steps: [],
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction == null) {
                console.log("game over");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            this.steps.push(nextPoint);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    step(n) {
        console.log(this.steps[n])
    },

    init() {
        console.log("Your place looks like o.");
        renderer.render();
        console.log("If you want to play, types game.run() and press Enter")
    }
};
game.init();
