import express, { Express } from 'express';
import routes from './routes';

class App {
    public app: Express;

    constructor() {
        this.app = express();
        this.app.use(routes);
    }

    listen(port: number) {
        this.app.listen(port, '0.0.0.0', () => {
            console.log(`listening at 0.0.0.0:${port}`);
        });
    }
}

export default new App();
