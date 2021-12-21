const express = require('express');
const routes = require('./routes');

class App {
    constructor() {
        this.server = express();
        this.server.use(routes);
    }

    listen(port) {
        this.server.listen(port, '0.0.0.0', () => {
            console.log(`listening at 0.0.0.0:${port}`);
        });
    }
}

module.exports = App
