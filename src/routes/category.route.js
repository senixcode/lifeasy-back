import { Router } from 'express'
import CategoryController from '../controllers/category.controller.js'

const router = Router()
const controller = new CategoryController()

router.get('/', (res,req) => controller.list(res,req))
router.post('/', (res,req) => controller.create(res,req))
router.put('/:id', (res,req) => controller.update(res,req))
router.delete('/:id', (res,req) => controller.delete(res,req))

export default router