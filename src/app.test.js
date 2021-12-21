const request = require('supertest')
const App = require('./app')

describe('GET /', () => {
    const app = new App()
    it('should return 200', function (done) {
        request(app.server).get('/')
            .expect(200)
            .end(done)
    });
});

describe('POST /users', () => {
    const app = new App()
    it('should return json 200', function (done) {
        request(app.server).post('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done)
    });
});
