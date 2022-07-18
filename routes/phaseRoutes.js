import express from "express";
import {PhaseController} from "../constroller/PhaseController.js";



const router = express.Router();

router
    .route('/')
    .get(PhaseController.getPhases)
    .post(PhaseController.createPhase)
router
    .route('/:id') 
    .get(PhaseController.getPhaseById)
    .delete(PhaseController.deletePhase)
    .put(PhaseController.updatePhase)

export default router


