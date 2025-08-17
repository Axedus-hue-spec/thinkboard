const Note = require('../models/Note');

class notesController {
    async getAll(req, res) {
        try {
            const note = await Note.findAll();
            return res.status(200).json(note);
        } catch(e) {
            console.log(e);
            res.status(400).json({message: 'Что-то пошло не так'})
        }
    };

    async getOne(req, res) {
        try {
            const {id} = req.params;

            const note = await Note.findOne({where : {id}});
            return res.status(200).json(note);
        } catch(e) {
            console.log(e);
            res.status(400).json({message: 'Что-то пошло не так'})
        }
    }

    async create(req, res) {
        try {
            const {title, content} = req.body;
            const newNote = await Note.create({title, content});

            return res.status(200).json(newNote);
        } catch(e) {
            console.log(e);
            res.status(400).json({message: 'Что-то пошло не так'})
        }
    };


    async update(req, res) {
        try {
            const {id} = req.params;
            const {content, title} = req.body;

            const note = await Note.update({content: content, title: title}, {where: {id}});

            return res.status(200).json(note);
        } catch(e) {
            console.log(e);
            res.status(400).json({message: 'Что-то пошло не так'})
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;

            await Note.destroy({where: {id}});

            return res.status(200).json({message: 'Запись удалена'});
        } catch(e) {
            console.log(e);
            res.status(400).json({message: 'Что-то пошло не так'})
        }
    }
}

module.exports = new notesController();