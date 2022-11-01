import CategoryModel from "../models/Categories.model.js"

class Type {
    constructor(){
        this.model = CategoryModel
    }

    async list(_ , res){
        try {
            const record = await this.model.find()
            res.json(record)
        } catch (error) {
            res.status(400).json({statusMessage: error})
        }
    }
    async create(req, res){
        try {
            const record = new this.model(req.body)
            await record.save()
            res.json(record)
        } catch (error) {
            res.status(400).json({statusMessage: error})
        }
    }
    async update(req, res){
        try {
            const {id} = req.params
            console.log(req.params);
            let updated = await this.model.findOneAndUpdate(id, req.body, {
                new: true
            });
            res.json(updated)
        } catch (error) {
            res.status(400).json({statusMessage: error})
        }
    }
    async delete(req, res){
        try {
            const {id} = req.params
            let deleted = await this.model.findByIdAndDelete(id)
            res.json(deleted)
        } catch (error) {
            res.status(400).json({statusMessage: error})
        }
    }
}

export default Type