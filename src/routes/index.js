const express = require('express');

const router = express.Router();

router.get('/', (_req, res) => {
    res.status(200).send();
});

router.post('/users', (_req, res) => {
    const data = {
        username: "admin",
        password: "admin"
    }
    res.status(200).json(data);
});

module.exports = router;
