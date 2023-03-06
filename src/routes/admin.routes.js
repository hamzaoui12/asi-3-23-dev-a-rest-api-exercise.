const express = require("express")
const router = express.Router()

const {
  setadmin,
  getadmin,
  editadmin,
  deleteadmin,
} = require("../controllers/admin.controller")

router.get("/", getadmin)
router.post("/", setadmin)
router.put("/:id", editadmin)
router.delete("/:id", deleteadmin)

module.exports = router
