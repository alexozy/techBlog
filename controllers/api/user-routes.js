const router = require('express').Router(); 
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // CRUD -- API endpoint that selects all users once it receives a GET request
    User.findAll()
        .then(dbUserData => res.json(dbUserData)) 
        .catch(err => {
            console.log(err);
            res.status(500).json(err); 
        });
});


// GET /api/users/1 
router.get('/:id', (req, res) => {
    // CRUD -- API endpoint when searching for a SPECIFIC user
    User.findOne({ where: {
        id: req.params.id 
            }
        })

        .then(dbUserData => {
        if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' }); 
        return;
        }
        res.json(dbUserData); })
        .catch(err => { 
            console.log(err); 
            res.status(500).json(err);
        });

});



// POST /api/users 
router.post('/', (req, res) => {
    // CRUD -- Using POST route to create a user
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// PUT /api/users/1 
router.put('/:id', (req, res) => {
    // CRUD - allows you to update existing data
    User.update(req.body, { where: {
        id: req.params.id 
            }
        })
        .then(dbUserData => {
        if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' }); 
        return;
        }
        res.json(dbUserData); 
    })
        .catch(err => { 
            console.log(err); 
            res.status(500).json(err);
        });


});

// DELETE /api/users/1 
router.delete('/:id', (req, res) => {
    // CRUD -- allows us to delete our user from the database
    router.delete('/:id', (req, res) => {
        User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'id not assigned' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err); res.status(500).json(err);
            });
    });
});


module.exports = router;