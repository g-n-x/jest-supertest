const express = require('express');

const router = express.Router();

router.get('/', (_req, res) => {
    console.log('you got it');
    res.json({message: 'success'});
});

module.exports = router;
