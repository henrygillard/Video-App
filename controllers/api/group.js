const Group = require("../../models/group")

module.exports = {
    index,
  };

  async function index(req, res) {
    const groups = await Group.find({}).populate("category").exec();
    res.json(groups);
}