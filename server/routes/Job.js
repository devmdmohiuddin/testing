const express = require("express");
const router = express.Router();
const jobCtrl = require("../controllers/Job");

router.get("/", jobCtrl.getAll);
router.post("/", jobCtrl.create);
router.delete("/:id", jobCtrl.delete);

module.exports = router;
