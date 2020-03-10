class Settings {
    rowsCount = 0;
    colsCount = 0;
    speed = 0;
    winLength = 0;
    init (params) {
        let defaultParams = {
            rowsCount: 21,
            colsCount: 21,
            speed: 2,
            winLength: 50
        }
        Object.assign(defaultParams, params);
        this.rowsCount = defaultParams.rowsCount;
        this.colsCount = defaultParams.colsCount;
        this.speed = defaultParams.speed;
        this.winLength = defaultParams.winLength;
    }

}