const request = require('supertest')
const App = require('./app')

describe('Route /', () => {
    const app = new App()
    it('200 should return nothing', function (done) {
        request(app.server).get('/')
            .expect(200)
            .end(done)
    });
});

describe('Route /users', () => {
    const app = new App()
    it('200 should return json', function (done) {
        request(app.server).post('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done)
    });
});

describe('Route /login', () => {
    const app = new App();
    
    it('200 should accept correct credentials', function (done) {
        const data = {
            username: 'admin',
            password: 'admin'
        }
        request(app.server).post('/login')
            .send(data)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(done)
    });

    it('401 should deny wrong credentials', function (done) {
        const data = {
            username: 'Admin',
            password: 'admIn'
        }
        request(app.server).post('/login')
            .send(data)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .expect(401)
            .end(done)
    });
});
