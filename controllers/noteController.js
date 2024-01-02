const Note = require('../models/note');

// 1. Get all notes

exports.getAllnotes = async (req, res) => {
  try {
    const notes = await Note.find({ createdBy: req.user._id }); 
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// 2. get note by id

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, createdBy: req.user._id });
    
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// 3. create note

exports.createNote = async (req, res) => {
    const { title, content } = req.body;
  
    if (title.length < 3 ) {
      return res.status(400).json({ error: 'Title should have at least 3 characters' });
    }else if(content.length < 6 ){
      return res.status(400).json({ error: 'content should have at least 6 characters' });
    }
  
    try {
      const newNote = new Note({
        title,
        content,
        createdBy: req.user._id,
      });
  
      const savedNote = await newNote.save();
      res.json(savedNote);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  // 4. create note
exports.updateNote = async (req, res) => {
  const { title, content } = req.body;
  const id=req.params.id;

  try {
    const updatedNote = await Note.findOneAndUpdate(
      { _id: id, createdBy: req.user._id },
      { title, content, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// 5. delete note
exports.deleteNote = async (req, res) => {
  const  id  = req.params.id;

  try {
    const deletedNote = await Note.findOneAndDelete({ _id: id, createdBy: req.user._id });

    if (!deletedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.json(deletedNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
