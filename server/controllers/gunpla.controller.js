const gunplaModel = require("../models/gunpla.model")
const ObjectId = require("mongoose").Types.ObjectId
const fs = require("fs")
const {promisify} = require("util")
const { uploadErrors} = require("../utils/errors.utils")
const pipeline = promisify(require("stream"))

module.exports.readGunpla = (res) => {
    gunplaModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log("Erreur de réception:" + err)
    }).sort ({createdAt: -1})
}

module.exports.createGunpla = async(req, res) => {
    let fileName

    if (req.file != null) {
        try {
            if (
                req.file.detectedMimeType != "image/jpg" &&
                req.file.detectedMimeType != "image/png" &&
                req.file.detectedMimeType != "image/jpeg" 
            )
            throw Error("invalid file")

            if (req.file.size > 500000) throw Error ("taille maximale dépassée")
        } catch (error) {
            const errors = uploadErrors(error)
            return res.status(201).json({errors})
        }
        fileName = req.body._id + Date.now() + ".jpg"

        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../client/public/uploads/gunplaImages/${fileName}`
            )
        )
    }
    
    const newGunpla = new gunplaModel({
            picture: req.file != null ? "./uplaods/gunplaImage" + fileName: "",
            name: req.body.name,
            grade: req.body.grade,
            price: req.body.price,
    })

    try {
        const gunpla = await newGunpla.save()
        return res.status(201).json(gunpla)
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports.updateGunpla = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id inconnue:" + req.params.id)

    const updatedRecord = {
        picture: req.body.picture,
        name: req.body.name,
        grade: req.body.grade,
        price: req.body.price,
    }

    gunplaModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord},
        {new:true},
        (err,docs) => {
            if(!err) res.send(docs)
            else console.log("erreur d'update :" + err)
        }
    )
}

module.exports.deleteGunpla = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id inconnue:" + req.params.id)

    gunplaModel.findByIdAndRemove(req.params.id, (err,docs) => {
        if (!err)res.send(docs)
        else console.log("erreur lors de la supression :" + err)
    })
}