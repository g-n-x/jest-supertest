const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.status(200).send();
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if(username === 'admin' && password === 'admin') {
        res.status(200).send();
    } else {
        res.status(401).send();
    }
});

router.post('/users', (_req, res) => {
    const data = {
        username: "admin",
        password: "admin"
    }
    res.status(200).json(data);
});

module.exports = router;
