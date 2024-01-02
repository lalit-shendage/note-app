const express = require('express');
const router = express.Router();
const notesController=require('../controllers/noteController')
const authMiddleware=require('../middleware/authMiddleware')

router.get('/',authMiddleware, notesController.getAllnotes)

router.get('/:id',authMiddleware, notesController.getNoteById)

router.post('/create',authMiddleware, notesController.createNote)

router.put('/update/:id', authMiddleware, notesController.updateNote)

router.delete('/delete/:id', authMiddleware, notesController.deleteNote)

module.exports = router;