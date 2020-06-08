const express = require('express');
const router = express.Router();
const moviesControllers = require('../controllers/moviesControllers');


router.get('/',moviesControllers.index);
router.get('/detail/:id',moviesControllers.detail);
router.get('/new',moviesControllers.new);
router.get('/recomended',moviesControllers.recomended);
//router.post('/search',moviesControllers.search);


module.exports=router;