// files contains all user-facing routes so FRONT end stuff

// route for the main homepage
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        // render is used to specify which handlebars template we want to be directed to
        id: 1,
        post_url: 'https://handlebarsjs.com/guide/', title: 'Handlebars Docs',
        created_at: new Date(),
        vote_count: 10,
        comments: [{}, {}], user: {
            username: 'test_user'
        }
    });
});


module.exports = router;