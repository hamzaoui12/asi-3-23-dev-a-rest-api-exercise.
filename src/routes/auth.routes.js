const express = require("express")
const {
  register,
  login,
  getMyInfo,
  getMyPasswordReset,
  resetPassword,
  updateDetails,
  updatePassword,
  logout,
} = require("../controllers/auth")

const router = express.Router()

router.post("/register", protect, checkPermission("admin"), register)
router.post("/login", login)
router.post("/forgotpassword", getMyPasswordReset)
router.get("/logout", logout)
router.get("/logged", protect, getMyInfo)
router.put("/updatedetails", protect, updateDetails)
router.put("/updatepassword", protect, updatePassword)

router.put("/resetpassword/:resettoken", resetPassword)

module.exports = router
