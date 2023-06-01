const router = require('express').Router();
const { Post, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// router.get('/myprofile', (req, res) => {
//   res.render('profile');
// });

router.get('/myprofile', async (req, res) => {
  try{
    const postData = await Post.findAll({
      include: [
        {
        model:User,
        attributs:['name']
        }
      ]
    })
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
  });
  



module.exports = router;
