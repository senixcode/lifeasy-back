import { Router } from 'express'
import { backupUpdate, getBackup } from '../controllers/backup.controller.js'
import { countDetails, createDetails, createSerevalDetails, deleteDetails, getDetail, getDetails, updateDetails } from '../controllers/tasks.controller.js'
import ROUTES_ENPOINT_DETAILS from './detail.const.js'

const router = Router()

router.get(ROUTES_ENPOINT_DETAILS.details, getDetails)
router.get(ROUTES_ENPOINT_DETAILS.backup, getBackup)
router.get(ROUTES_ENPOINT_DETAILS.count, countDetails)
router.get(ROUTES_ENPOINT_DETAILS.byId, getDetail)
router.post(ROUTES_ENPOINT_DETAILS.create, createDetails)
router.post(ROUTES_ENPOINT_DETAILS.backup, backupUpdate)
router.post(ROUTES_ENPOINT_DETAILS.serevalCreate, createSerevalDetails)
router.put(ROUTES_ENPOINT_DETAILS.update, updateDetails)
router.delete(ROUTES_ENPOINT_DETAILS.delete, deleteDetails)

export default router