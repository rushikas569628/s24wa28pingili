var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // Generate random values for x and y
    let x = Math.random() * 100;
    let y = Math.random() * 100;

    // Calculate the ratio of y to x (opposite side to adjacent side)
    let ratio = y / x;

    // Apply Math.atan function to the ratio
    let result = Math.atan(ratio);

    // Construct the response string
    let response = `Math.atan applied to ${x} and ${y} is ${result}`;

    // Send the response
    res.send(response);
});

module.exports = router;
