const express = require('express');
const router = express.Router();
const serviceListScheme = require("../models/serviceListScheme");

router.post('/:id', async function (req, res, next) {
    try {
        const { id: windmillID } = req.params;
        let windmill = await serviceListScheme.findOne({ uniqueID: windmillID });

        if(!windmill){
            windmill = await serviceListScheme.create(req.body);
            res.status(201).json({
                windmill,
            });

        } else if (windmill){
            return res.status(200).json({
                message: 'Windmill already exists',
            });
        }

    } catch (error) {
        console.log(req.params)
        res.status(500).json({
            message: error.message,
        });
    }
});

router.get('/', async (req, res, next) => {
    try {
        const Windmills = await serviceListScheme.find({});
        res.status(200).json({ Windmills });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const { id: windmillId } = req.params;
        const windmill = await serviceListScheme.findOneAndUpdate({ uniqueID: windmillId }, req.body, {
            new: true,
            runValidators: true,
        });

        if (!windmill) {
            return res.status(404).json({
                message: 'Windmill could not be found',
            });
        }

        res.status(202).json({ windmill });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id: windmillId } = req.params;
        const windmill = await serviceListScheme.findOneAndDelete({ uniqueID: windmillId });

        if (!windmill) {
            return res.status(404).json({
                message: 'Windmill could not be found',
            });
        }

        res.status(410).json({ windmill });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id: windmillId } = req.params;
        const windmill = await serviceListScheme.findOne({ uniqueID: windmillId });

        if (!windmill) {
            return res.status(404).json({
                message: 'Windmill could not be found',
            });
        }

        res.status(200).json({ windmill });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

module.exports = router;