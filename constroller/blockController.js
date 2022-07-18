import Block from '../model/blockModel.js'

const getBlocks = async (req, res) => {
    try {
        const data = await Block.find().populate("phase").populate("society").limit(req.query.limit).skip(+req.query.offset)
        const count = await Block.count();
     
        // .sort({sheetNo:1})
        res.status(200)
            .json({

                status: 'Success',
                data,
                count,
            })
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: err
        })
    }
}

const getBlock = async (req, res) => {
    try {
        const result = await Block.findOne({_id:req.params.id})  // IS Equal to = Block.findOne({_id: req.params.id})
        res.status(200).json({
            status: 'Success',
            data: {
                result
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err
        })
    }

}

const deleteBlock = async(req, res) => {
    try {
          await Block.findOneAndDelete({_id:req.params.id})  // IS Equal to = Block.findOne({_id: req.params.id})
        res.status(200).json({
            status: 'Success',
            
        })
    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err
        })
    }
    
}

const createBlock = async (req, res) => {
    const {
        name,
        ownerName,
        status,
    } = req.body
    try {
        const result = await Block.create({
            name,
            ownerName,
            status,
        })
        res.status(200).json({
            success: 'Success',
            data: result
        })


    } catch (err) {
        res.status(400).json({
            success: 'Fail',
            message: err.message
        })
    }
}

const updateBlock = async (req, res) => {
    try {
        const result = await Block.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json({
            success: 'Success',
            result
        })
    } catch (err) {
        res.status(200).json({
            success: 'Fail',
            message: err
        })
    }
}

export const BlockController = {
    getBlocks, getBlock, deleteBlock, updateBlock, createBlock,
}

 