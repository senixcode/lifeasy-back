import EntriesModel from "../models/Entries.model.js"
import RateController from "../controllers/rate.controller.js"
import CategoryController from "../controllers/category.controller.js"
import DetailController from "../controllers/details.controller.js"

class Entry {
    constructor() {
        this.model = EntriesModel
        this.controllerRate = new RateController()
        this.controllerCategory = new CategoryController()
        this.controllerDetail = new DetailController()
    }

    async list(_, res) {
        try {                                                                                                                                                                                                            
            const all = await this.model.find()
            res.json(all)
        } catch (error) {
            res.status(400).json({ statusMessage: error })
        }
    }

    async create(req, res) {
        try {
            const { rates, categories, details } = req.body

            const ratesFindById = await this.controllerRate.isFindAllById(rates)
            const categoriesFindById = await this.controllerCategory.isFindAllById(categories)
            const detailsFindById = await this.controllerDetail.isFindAllById(details)

            if (ratesFindById) res.json({ message: "no found rates by Id", rates })
            if (categoriesFindById) res.json({ message: "no found categories by Id", categories })
            if (detailsFindById) res.json({ message: "no found details by Id", details })

            const record = new this.model(req.body)
            await record.save()
            res.json(record)
        } catch (error) {
            res.status(400).json({ statusMessage: error.message })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params
            const { rates, categories, details } = req.body

            const ratesFindById = await this.controllerRate.isFindAllById(rates)
            const categoriesFindById = await this.controllerCategory.isFindAllById(categories)
            const detailsFindById = await this.controllerDetail.isFindAllById(details)

            if (ratesFindById) res.json({ message: "no found rates by Id", rates })
            if (categoriesFindById) res.json({ message: "no found categories by Id", categories })
            if (detailsFindById) res.json({ message: "no found details by Id", details })

            let updated = await this.model.findOneAndUpdate(id, req.body, {
                new: true
            });
            res.json(updated)
        } catch (error) {
            res.status(400).json({ statusMessage: error })
        }
    }
    
    async delete(req, res) {
        try {
            const { id } = req.params
            let deleted = await this.model.findByIdAndDelete(id)
            res.json(deleted)
        } catch (error) {
            res.status(400).json({ statusMessage: error })
        }
    }
}

export default Entry