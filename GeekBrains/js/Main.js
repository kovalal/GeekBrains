window.addEventListener("load", () => {
    const setting = new Settings();
    const status = new Status();
    const snake = new Snake();
    const board = new Board();
    const menu = new Menu();
    const food = new Food();
    const game = new Game();

    setting.init({speed: 5, winLength: 20});
    board.init(setting, snake);
    food.init(setting, snake, board);
    game.init(setting, status, board, snake, menu, food);

    board.renderBoard();
    board.renderSnake();

    food.setNewFood();
    game.run();
});