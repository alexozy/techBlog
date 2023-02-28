// this index.js file will manage and centralize the API routes in the api directory ONLY

// API END POINTS

const router = require('express').Router(); 
const userRoutes = require('./user-routes.js'); 
router.use('/users', userRoutes);

module.exports = router;