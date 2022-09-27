import { Router } from 'express'
import { createDetail, savedReport, deleteDetails, getDetail, getDetails, updateDetails } from '../controllers/tasks.controller.js'
import ROUTES_ENPOINT_DETAILS from './detail.const.js'

const router = Router()

router.get(ROUTES_ENPOINT_DETAILS.details, getDetails)
router.get(ROUTES_ENPOINT_DETAILS.byId, getDetail)
router.post(ROUTES_ENPOINT_DETAILS.savedReport, savedReport)
router.post(ROUTES_ENPOINT_DETAILS.details, createDetail)
router.put(ROUTES_ENPOINT_DETAILS.byId, updateDetails)
router.delete(ROUTES_ENPOINT_DETAILS.byId, deleteDetails)

export default router