import express from "express";
import {BlockController} from "../constroller/blockController.js";



const router = express.Router();

router
    .route('/')
    .get(BlockController.getBlocks)
    .post(BlockController.createBlock)
router
    .route('/:id') 
    .get(BlockController.getBlock)
    .put(BlockController.updateBlock)
    .delete(BlockController.deleteBlock)

export default router


