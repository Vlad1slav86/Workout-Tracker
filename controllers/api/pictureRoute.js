const router = require('express').Router();
const { Picture } = require('../../models');
const fs = require('fs');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  // function base64_encode(file) {
  //     // read binary data
  //     var bitmap = fs.readFileSync(file);
  //     // convert binary data to base64 encoded string
  //     return new Buffer(bitmap).toString('base64');
  // }
  try {
    console.log('req.body', req.body);
    console.log('req.files.photo', req.files.photo);
        
    let pic = fs.readFileSync(req.files.photo.tempFilePath, 'base64');
    let mimetype = req.files.photo.mimetype;
    const picData = await Picture.create({
      mime: mimetype,
      picture: pic,
      user_id: parseInt(req.body.id)
    });

    res.status(200).json(picData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Picture.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,

      },
    });

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;