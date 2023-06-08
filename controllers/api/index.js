const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const pictureRoutes = require('./pictureRoute');
const dietRoutes = require ('./dietRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/picture', pictureRoutes);
router.use('/diet',dietRoutes);

module.exports = router;