const router = require('express').Router();
const { diet } = require('../../models');

router.post('/postReci', async (req, res) => {
  try {
    const newDiet = await diet.create({
      ...req.body,
      user_id: req.session.user_id,
      Recipe_title: req.body.title 
    });

    res.status(200).json(newDiet);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get('/recipes', async (req, res) => {
  try {
    const dietPosts = await diet.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    res.status(200).json(dietPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;