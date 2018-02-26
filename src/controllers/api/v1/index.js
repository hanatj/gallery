const express = require('express');
const routes = require('./routes.js');
const router = express.Router();

<<<<<<< 3bdc70151cabb7560c1daf1ae831409eb60b9c33
=======
router.get('/jobs', routes.getJobs);
router.get('/job/:id', routes.getJob);
// router.post('/job', routes.postJob);
>>>>>>> main structure

module.exports = router;
