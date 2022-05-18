const {Type} = require('./../models/models')

class TypeController {
    async create(req, res, next) {
        try {
            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        } catch (err) {
            next(err)
        }
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json({types})
    }
}

module.exports = new TypeController()