let cell = {
    init(color, id) {
        this.div = document.createElement("div");
        this.div.classList.add(color);
        this.div.id = id;
        return this.div
    }
};
let letter = {
    init(value) {
        this.div = document.createElement("div");
        this.div.classList.add("letter");
        this.div.innerHTML = value;
        return this.div
    }
};
let bottomLetters = {
    init() {
        this.div = document.createElement("div");
        this.div.classList.add("bottom");

        let corner1 = document.createElement("div");
        corner1.classList.add("corner");
        this.div.appendChild(corner1);

        for (let i = 65; i < 73; i++){
            this.div.appendChild(letter.init('&#' + i))
        }

        let corner2 = document.createElement("div");
        corner2.classList.add("corner");
        this.div.appendChild(corner2);

        return this.div
    }
};
let leftLetters = {
    init_one(value) {
        this.div = document.createElement("div");
        this.div.classList.add("left");
        this.div.innerText = value;
        return this.div
    }
};
let chessboard = {
    letters: ["A", "B", "C", "D", "E", "F", "G", "H"],
    init() {
        this.div = document.createElement("div");
        this.div.classList.add('chessboard');
        this.div.appendChild(bottomLetters.init());
        let color = 'white';
        for (let i = 8; i > 0; i--) {
            this.div.appendChild(leftLetters.init_one(i));
            if (color == 'black') {
                color = 'white'
            } else {
                color = 'black'
            }
            for (let j = 0; j < 8; j++) {
                if (color == 'black') {
                    color = 'white'
                } else {
                    color = 'black'
                }
                this.div.appendChild(cell.init(color, this.letters[j] + i))
            }
            this.div.appendChild(leftLetters.init_one(i));
        }
        this.div.appendChild(bottomLetters.init());
        return this
    },

    set(value, position){
        let cell = document.getElementById(position);
        console.log(cell)
        cell.innerHTML = value;
    }
};

function emptyChessboard() {
    var board = chessboard.init();
    return board.div
}
document.body.appendChild(emptyChessboard());