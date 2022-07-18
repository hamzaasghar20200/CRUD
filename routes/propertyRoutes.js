import express from "express";
import {propertyController} from "../constroller/propertyController.js";



const router = express.Router();

router
    .route('/')
    .get(propertyController.getProperties)
    .post(propertyController.createOneProperty)

    //create from file
router
    .route('/create')
    .post(propertyController.createProperty)


router
    .route('/:id') 
    .get(propertyController.getProperty)
    .delete(propertyController.deleteProperty)
    .put(propertyController.updateProperty)

export default router


