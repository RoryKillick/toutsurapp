const {Router} = require('express');
const articleController = require('./controllers/articleController');

const router = Router();

// Route de test
router.get('/', (req, res) => res.send("salut, ça farte ?"));

router.get('/articles', articleController.findAll);
router.get('/articles/:id', articleController.findOne);

module.exports = router;