const express = require("express")
const Pages = require("../models/Pages.moduel")
const result = require("../middelware/result")
const router = express.Router()
const { protect, checkPermission } = require("../middelware/auth")

const {
  getPages,
  createPages,
  updatePages,
  deletePages,
} = require("../controllers/pages.controller")

router.get(result(Pages), getPages)
router.post("/:id", protect, checkPermission("admin", "manager"), createPages)
router.get("/", getPages)
router.put("/:id", protect, updatePages)
router.delete("/:id", protect, checkPermission("admin", "manager"), deletePages)

module.exports = router
