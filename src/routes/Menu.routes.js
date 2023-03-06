const express = require("express")
const Menu = require("../models/Menu.model")
const router = express.Router()

const {
  getMenu,
  getOneMenu,
  addMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/Menu.controller")

router.get(
  result(Menu, {
    path: "pages",
    select: "title",
    match: { status: "published" },
  }),
  getMenu
)
router.post("/", protect, checkPermission("admin", "manager"), addMenu)
router.get("/:id", getOneMenu)
router.put("/:id", protect, checkPermission("admin", "manager"), updateMenu)
router.delete("/:id", protect, checkPermission("admin", "manager"), deleteMenu)

module.exports = router
