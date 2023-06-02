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
      // logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
    res.status(200).json(postData);

  }
});

router.get('/post/:id', async (req, res) => {
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
  } catch (error) {
    
  }
});

// router.get('/workout', async (req, res) => {
//   try {
    
//   } catch (error) {
    
//   }
// })

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






module.exports = router;


/*
router for all categories 

models:
categoryModel
*/
