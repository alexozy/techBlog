// files contains all user-facing routes so FRONT end stuff

// route for the main homepage
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
    
    });
});


module.exports = router;