import RateModel from "../models/Rates.model.js"

class Rate {
    constructor() {
        this.model = RateModel
    }

    async list(_, res) {
        try {
            const record = await this.model.find()
            res.json(record)
        } catch (error) {
            res.status(400).json({ statusMessage: error })
        }
    }

    async isFindAllById(items) {
        try {
            if (items)
                for (const id of items) {
                    const find = await this.model.findById(id)
                    if (find?.errors) return true
                }
            return false
        } catch (error) {
            return error
        }
    }

    async create(req, res) {
        try {
            const record = new this.model(req.body)
            await record.save()
            res.json(record)
        } catch (error) {
            res.status(400).json({ statusMessage: error })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params
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

export default Rate

// export const createDetail = async (req, res) => {
//     try {
//         let { type, level, amount } = req.body
//         if (!type || !["INCOME", "EGRESS"].includes(type.toUpperCase()))
//             throw new Error('Enter a type can only add INCOME or EGRESS')
//         if (!level || typeof level !== 'number')
//             throw new Error('Enter a level typeof number')
//         if (!amount || typeof amount !== 'number')
//             throw new Error('Enter a amount typeof number')
//         if (![1, 2, 3, 4].includes(level))
//             throw new Error('Enter level can only be 1 2 3 4')

//         const newField = new Detail(req.body)
//         await newField.save()
//         res.json(newField)

//     } catch (error) {
//         return res.status(500).send({ message: error.message })
//     }
// }

