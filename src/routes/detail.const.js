
const DETAIL = '/details'
const DETAIL_ID = `${DETAIL}/:id`

const ROUTES_ENPOINT_DETAILS = {
details: DETAIL,
    byId: DETAIL_ID,
    create: DETAIL,
    serevalCreate:`${DETAIL}/several`,
    update: DETAIL_ID,
    delete: DETAIL_ID,
    savedReport: `${DETAIL}/savedReport`,
}

export default ROUTES_ENPOINT_DETAILS