const { Post, User, Comment } = require('../models');

const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attribute: ['name'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attribute: ['name']
        },
        {
          model: Comment,
          include: [ User ],
          attribute: ['name']
        }
      ]
    });
    res.status(200).json;
  } catch (error) {
    
  }
});

// router.get('/workout', async (req, res) => {
//   try {
    
//   } catch (error) {
    
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;


/*
router for all categories 

models:
categoryModel
*/
