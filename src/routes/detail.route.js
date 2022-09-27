import { Router } from 'express'
import { savedReport, deleteDetails, getDetail, getDetails, updateDetails } from '../controllers/tasks.controller.js'
import ROUTES_ENPOINT_DETAILS from './detail.const.js'

const router = Router()

router.get(ROUTES_ENPOINT_DETAILS.details, getDetails)
router.get(ROUTES_ENPOINT_DETAILS.byId, getDetail)
router.post(ROUTES_ENPOINT_DETAILS.savedReport, savedReport)
router.put(ROUTES_ENPOINT_DETAILS.update, updateDetails)
router.delete(ROUTES_ENPOINT_DETAILS.delete, deleteDetails)

export default router