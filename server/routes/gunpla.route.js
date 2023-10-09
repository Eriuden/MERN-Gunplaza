const router = require("express").Router()
const gunplaController = require("../controllers/gunpla.controller")
const multer = require("multer")
const upload = multer()

router.get("/", gunplaController.readGunpla)
router.post("/", upload.single("file"), gunplaController.createGunpla)
router.put("/:id", gunplaController.updateGunpla)
router.delete("/:id", gunplaController.deleteGunpla)