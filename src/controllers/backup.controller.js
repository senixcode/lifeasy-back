import Detail from '../models/Detail.js'
import { getConnection } from '../database.js'

export const backupUpdate = async (req, res) => {
    try {
        const details = getConnection().data.tasks
// console.log(details);
        if (details.length < 0 || req.body[0]?.type)
            return res.status(404).json({ message: 'list is required' })

        await Detail.deleteMany({}); 
        const savedProduct = []
        for (const detail of details) {
            console.log(detail);
            let { type, level, amount, ...rest } = detail
            if (!type || !["INCOME", "EGRESS"].includes(type.toUpperCase()))
                return res.status(404).json({ message: 'Enter a type can only add INCOME or EGRESS' })
            if (!level || typeof level !== 'number')
                return res.status(404).json({ message: 'Enter a level typeof number' })
            if (!amount || typeof amount !== 'number')
                return res.status(404).json({ message: 'Enter a amount typeof number' })
            if (![1, 2, 3, 4].includes(level))
                return res.status(404).json({ message: 'Enter level can only be 1 2 3 4' })

            const newField = new Detail({
                type,
                level,
                amount,
                ...rest
            })

            savedProduct.push(await newField.save())
        }

        return res.json(savedProduct);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getBackup = async (req,res) => {
    try {
        const details = await Detail.find();
        return res.json(details);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}