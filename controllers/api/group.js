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
  const group = await Group.create(req.body);
  res.json(group)
  
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
  const group = await Group.findOne( {_id: req.params.id} );
  // console.log(group.years)
  const findSameYear = group.years.find(y => y.year === req.body.year)
  const findSameVideo = group.years.find(y => y.videoUrl === req.body.videoUrl)
  if (findSameYear && findSameYear.year === req.body.year) {
      console.log(findSameYear.videoUrl)
      console.log("Same Year Different Video")
      findSameYear.videoUrl.push(req.body.videoUrl)
    } else if (findSameYear && findSameYear.year === req.body.year) {
    // console.log("Video already uploaded to Same Year")
  } else {
    group.years.push(req.body)

  }
  group.save();
  res.json(group);
}