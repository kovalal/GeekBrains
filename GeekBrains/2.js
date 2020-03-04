function LettersChess() {
    let board = chessboard.init();
    //black
    board.set('&#9820', 'A8');
    board.set('&#9822', 'B8');
    board.set('&#9821', 'C8');
    board.set('&#9819', 'D8');
    board.set('&#9818', 'E8');
    board.set('&#9821', 'F8');
    board.set('&#9822', 'G8');
    board.set('&#9820', 'H8');
    //bishops
    board.set('&#9821', 'A7');
    board.set('&#9821', 'B7');
    board.set('&#9821', 'C7');
    board.set('&#9821', 'D7');
    board.set('&#9821', 'E7');
    board.set('&#9821', 'F7');
    board.set('&#9821', 'G7');
    board.set('&#9821', 'H7');
    //white
    board.set('&#9814', 'A1');
    board.set('&#9816', 'B1');
    board.set('&#9815', 'C1');
    board.set('&#9813', 'D1');
    board.set('&#9812', 'E1');
    board.set('&#9815', 'F1');
    board.set('&#9816', 'G1');
    board.set('&#9814', 'H1');
    //bishops
    board.set('&#9817', 'A2');
    board.set('&#9817', 'B2');
    board.set('&#9817', 'C2');
    board.set('&#9817', 'D2');
    board.set('&#9817', 'E2');
    board.set('&#9817', 'F2');
    board.set('&#9817', 'G2');
    board.set('&#9817', 'H2');

    return board.div
}
LettersChess()
