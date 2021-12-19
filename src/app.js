const express = require('express');
const routes = require('./routes');

class App {
    constructor() {
        this.app = express();
        this.app.use(routes);
    }

    listen(port) {
        this.app.listen(port, '0.0.0.0', () => {
            console.log(`listening at 0.0.0.0:${port}`);
        });
    }
}

module.exports = App
