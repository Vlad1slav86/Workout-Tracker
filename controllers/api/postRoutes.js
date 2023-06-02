// const router = require('express').Router();
// const { Post } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.post('/', async (req, res) => {
//   try {
//     const newPost = await Post.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newPost);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id
//       },
//     });

//     if (!postData){
//       res.status(404).json({ message: 'No post found with this id!'});
//       return;
//     }
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// module.exports = router;