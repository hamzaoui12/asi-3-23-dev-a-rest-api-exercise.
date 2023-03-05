const AdminModel = require("../models/admin.model")

module.exports.getadmin = async (req, res) => {
  const Admin = await AdminModel.find()
  res.status(200).json(Admin)
}

module.exports.setadmin = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Merci d'ajouter un message" })
  }

  const Admin = await AdminModel.create({
    message: req.body.message,
    author: req.body.author,
  })
  res.status(200).json(Admin)
}

module.exports.editadmin = async (req, res) => {
  const Admin = await AdminModel.findById(req.params.id)

  if (!Admin) {
    res.status(400).json({ message: "Cette administrateur n'existe pas" })
  }

  const updateAdmin = await AdminModel.findByIdAndUpdate(Admin, req.body, {
    new: true,
  })

  res.status(200).json(updateAdmin)
}

module.exports.deleteadmin = async (req, res) => {
  const Admin = await AdminModel.findById(req.params.id)

  if (!Admin) {
    res.status(400).json({ message: "Cette utilisateur n'existe pas" })
  }
  await Admin.remove()
  res.status(200).json("utilisateur supprimé " + req.params.id)
}
