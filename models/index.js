const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Category = require('./Categories');
const Picture = require('./Picture');

User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
}); 

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Category.hasMany(Post, {
  foreignKey: 'category_id'
});

Post.belongsTo(Category, {
  foreignKey: 'category_id'
});

Picture.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Picture, {
    foreignKey: 'user_id'
});

Post.hasOne(Picture, {
    foreignKey: 'post_id'
});

Picture.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Category, Picture };

/*  */