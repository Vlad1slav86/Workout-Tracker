const { Post, User, Comment, Picture, diet, } = require('../models');

const router = require('express').Router();

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      // logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/post/:id', async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name']
//         },
//         {
//           model: Comment,
//           include: [ User ],
//           attributes: ['name']
//         }
//       ]
//     });

//     const posts = postData.map((post) => post.get({ plain: true }));

//     re

//   } catch (error) {
//     res.status(500).json(error.message)
//   }
// });

router.get('/workout', async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        category_id: 1
      }
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('workout', {
      posts,
      category_id: 1,
      logged_in: req.session.logged_in
    });

  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get('/diet', async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        category_id: 2
      }
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('diet', {
      posts,
      category_id: 2,
      logged_in: req.session.logged_in
    });

  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get('/community', async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        category_id: 3
      }
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('community', {
      posts,
      category_id: 3,
      logged_in: req.session.logged_in
    });

  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/myprofile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [Picture]
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/recipies', async (req, res) => {
  try {
    const dietPosts = await diet.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    const jsonData = JSON.stringify(dietPosts);
    console.log(jsonData);
    res.status(200).json(dietPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;