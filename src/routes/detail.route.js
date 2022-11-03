import { Router } from 'express'
import DetailsController from '../controllers/details.controller.js'

const router = Router()
const controller = new DetailsController()

router.get('/', (res, req) => controller.list(res, req))
router.post('/', (res, req) => controller.create(res, req))
router.put('/:id', (res, req) => controller.update(res, req))
router.delete('/:id', (res, req) => controller.delete(res, req))

export default router