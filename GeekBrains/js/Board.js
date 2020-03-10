class Board {
    boardEl = null;
    settings = null;
    snake = null;

    constructor() {
        this.boardEl = document.getElementById("game");
    }

    init(settings, snake) {
        this.settings = settings;
        this.snake = snake;
    }

    renderBoard() {
        this.boardEl.innerHTML = "";
        for  (let row = 0; row < this.settings.rowsCount; row++) {
            let tr = document.createElement("tr");
            this.boardEl.appendChild(tr);

            for (let col = 0; col < this.settings.colsCount; col++) {
                let td = document.createElement("td");
                tr.appendChild(td);
            }
        }
    }

    renderSnake() {
        const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);
        if (snakeBodyElems) {
            snakeBodyElems.forEach(function(tdEl) {
                if (tdEl) {
                    tdEl.classList.add('snakeBody');
                }
            })
        }
    }

    clearBoard() {
        const tdElems = document.querySelectorAll('td');
        tdElems.forEach(td => {
            td.className = ""
        });
    }

    getSnakeBodyElems(bodyCoords) {
        if (bodyCoords.length > 0) {
            let bodyElems = [];
            for (const coord of bodyCoords) {
                let elem = this.getCellEl(
                    coord.x % (this.settings.rowsCount + 1), coord.y % (this.settings.colsCount + 1));
                bodyElems.push(elem);
            }
            return bodyElems;
        }
        return null;
    }

    getCellEl(x, y) {
        return this.boardEl.querySelector(
            `tr:nth-child(${x % (this.settings.rowsCount + 1)}) td:nth-child(${y % (this.settings.colsCount + 1)})`);
    }

    isNextStepToWall(nextCellCoords) {
        //let nextCell = this.getCellEl(nextCellCoords.x , nextCellCoords.y);
        //return nextCell == null;
        return null;
    }

    isNextStepToSnake(nextCellCoords) {
        let nextCell = this.getCellEl(
            nextCellCoords.x, nextCellCoords.y);
        if (nextCell) {
            return nextCell.className == 'snakeBody';
        }
        return null
    }

    renderFood(coords) {
        let foodCell = this.getCellEl(coords.x, coords.y);
        foodCell.classList.add("food");
    }

    isHeadOnFood() {
        let foodCell = this.boardEl.querySelector(".food");
        return foodCell.classList.contains("snakeBody");
    }
}