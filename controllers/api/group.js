const Group = require("../../models/group")

module.exports = {
    index,
    create,
    detail,
    yearDetail,
    updateOne,
  };

  async function index(req, res) {
    const groups = await Group.find({}).populate("category").exec();
    res.json(groups);
}

async function create(req, res) {
  try {
    const findGroup = await Group.findOne({name: req.body.name})
    if (findGroup) {
      console.log(`${findGroup} already exists`)
      const newGroup = await Group.create(req.body);
      res.json(newGroup)
  } else {
    const newGroup = await Group.create(req.body);
      res.json(newGroup)
  }
    } catch {
      res.status(400).json('Bad Credentials');
      console.log("catch")
    }
  
  
}

async function detail(req, res) {
  const group = await Group.findById(req.params.id);
  res.json(group);
}

async function yearDetail(req, res) {
  const group = await Group.findOne({
    _id: req.params.id,
    

  });
  res.json(group);
}

async function updateOne(req, res) {
  // Find the group Id to Update
  const group = await Group.findOne( {_id: req.params.id} );
  // Find the Year array to push to 
  const findSameYear = group.years.find(y => y.year === req.body.year)
  // If the year already exists, push only the video into that year
  if (findSameYear && findSameYear.year === req.body.year) {
    findSameYear.videoUrl.push(req.body.videoUrl);
    // If year doesn't exist yet, push the year data into the group
  } else {
    group.years.push(req.body)
  }
  group.save(function (err) {
    console.log(err)
  });
  console.log(findSameYear)
  res.json(group);
  }