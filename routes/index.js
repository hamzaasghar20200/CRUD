import fileRoutes from './fileRouter.js'
import propertyRoutes from './propertyRoutes.js'
import societyRoutes from './societyRoutes.js'
import phaseRoutes from './phaseRoutes.js'
import blockRoutes from './blockRoutes.js'
import express from 'express'


const routes = express()


routes.use('/file', fileRoutes)
routes.use('/property', propertyRoutes)
routes.use('/society', societyRoutes)
routes.use('/phase', phaseRoutes)
routes.use('/block', blockRoutes)


export default routes