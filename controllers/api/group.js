const Group = require("../../models/group")

module.exports = {
    index,
    create,
    detail,
    yearDetail,
  };

  async function index(req, res) {
    const groups = await Group.find({}).populate("category").exec();
    res.json(groups);
}

async function create(req, res) {
  req.body.years.push(req.body)
  const group = await Group.create(req.body);
  res.json(group)
  
}

async function detail(req, res) {
  const group = await Group.findById(req.params.id);
  res.json(group);
}

async function yearDetail(req, res) {
  const group = await Group.findById(req.params.yId);
  res.json(group);
}