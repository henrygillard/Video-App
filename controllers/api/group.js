const Group = require("../../models/group")

module.exports = {
    index,
    create,
  };

  async function index(req, res) {
    const groups = await Group.find({}).populate("category").exec();
    res.json(groups);
}

async function create(req, res) {
  
  const group = await Group.create(req.body);
  res.json(group)
}