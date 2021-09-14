class Window {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.bgColor = "#000000"
    }

    createWindow() {
        return ({
            width: this.width,
            height: this.height,
            bgColor: this.bgColor
        });
    }
}

module.exports = Window;