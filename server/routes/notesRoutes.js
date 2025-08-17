const {Router} = require('express');
const notesControllers = require('../controllers/notesControllers');
const router = new Router();

router.get('/', notesControllers.getAll);
router.post('/', notesControllers.create);
router.get('/:id', notesControllers.getOne)
router.put('/:id', notesControllers.update);
router.delete('/:id', notesControllers.delete);

module.exports = router;