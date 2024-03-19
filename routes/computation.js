var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // Generate a random value for x,y
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    // Apply Math.atan function to x
    let result = Math.atan(x,y);

    // Construct the response string
    let response = `Math.atan applied to ${x} is ${result}`;

    // Send the response
    res.send(response);
});

module.exports = router;
