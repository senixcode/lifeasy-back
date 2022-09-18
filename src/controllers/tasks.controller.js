import { v4 } from 'uuid'
import { getConnection } from '../database.js'

export const getDetails = (req, res) => {
    const details = getConnection().data.tasks
    res.status(200).json(details)
}

export const createSerevalDetails = async (req, res) => {

    try {


        if (!req.body?.length > 0)
            throw new Error('Enter details')

            let count = 0
            for (const detail of req.body) {
                count++
                let { type, level, amount, ...rest } = detail
                if (!type || !["INCOME", "EGRESS"].includes(type.toUpperCase()))
                throw new Error(`Index:${count}, Enter a type can only add INCOME or EGRESS`)
                if (!level || typeof level !== 'number')
                throw new Error(`Index:${count}, Enter a level typeof number`)
                if (!amount || typeof amount !== 'number')
                throw new Error(`Index:${count}, Enter a amount typeof number`)
                if (![1, 2, 3, 4].includes(level))
                throw new Error(`Index:${count}, Enter level can only be 1 2 3 4`)
                
            const db = getConnection()
            const newField = {
                id: v4(),
                type,
                level,
                amount,
                ...rest
            }

            db.data.tasks.push(newField)
            await db.write()
        }

        res.json(getConnection().data.tasks)

    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

export const createDetails = async (req, res) => {

    try {
        let { type, level, amount, ...rest } = req.body
        if (!type || !["INCOME", "EGRESS"].includes(type.toUpperCase()))
            throw new Error('Enter a type can only add INCOME or EGRESS')
        if (!level || typeof level !== 'number')
            throw new Error('Enter a level typeof number')
        if (!amount || typeof amount !== 'number')
            throw new Error('Enter a amount typeof number')
        if (![1, 2, 3, 4].includes(level))
            throw new Error('Enter level can only be 1 2 3 4')

        const newField = {
            id: v4(),
            type,
            level,
            amount,
            ...rest
        }

        const db = getConnection()
        db.data.tasks.push(newField)
        await db.write()
        res.json(newField)

    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

export const getDetail = (req, res) => {
    const taskFound = getConnection()
        .data
        .tasks
        .find(task => task.id === req.params.id);

    if (!taskFound) return res.sendStatus(404)
    res.json(taskFound)
}

export const updateDetails = async (req, res) => {
    const db = getConnection()
    const taskFound = db.data.tasks.find(task => task.id === req.params.id);
    if (!taskFound) return res.sendStatus(404)

    taskFound.type = req.body.type
    taskFound.name = req.body.name
    taskFound.level = req.body.level
    taskFound.amount = req.body.amount
    taskFound.quantity = req.body.quantity
    taskFound.description = req.body.description
    taskFound.alert = req.body.alert
    taskFound.date = req.body.date

    db.data.tasks.map(t => t.id === req.params.id ? taskFound : t)

    await db.write()
    res.json(taskFound)

}

export const deleteDetails = async (req, res) => {
    const db = getConnection()
    const taskFound = db.data.tasks.find(task => task.id === req.params.id);
    if (!taskFound) return res.sendStatus(404)
    const newTasks = db.data.tasks.filter(t => t.id !== req.params.id)
    db.data.tasks = newTasks

    await db.write()
    res.json(taskFound)

}

export const countDetails = (req, res) => {
    const tasks = getConnection().data.tasks.length
    res.json(tasks)
}