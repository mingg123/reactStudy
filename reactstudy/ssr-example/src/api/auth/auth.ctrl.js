const { Post } = require('../../modules/post');
const Joi = require('joi');
const { User } = require('../../modules/users');
let postId = 1;

const posts = [{ id: 1, title: '제목', body: '내용' }];

exports.register = async ctx => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  // const result = Joi.validate(ctx.request.body, schema);
  // if (result.error) {
  //   ctx.status = 400;
  //   ctx.body = result.error;
  //   return;
  // }
  const { username, password } = ctx.request.body;
  try {
    const exists = await User.findByUsername(username);
    //중복 관련 로직
    if (exists) {
      ctx.status = 409;
      return;
    }
    const user = new User({
      username,
    });
    await user.setPassword(password);
    await user.save();

    const data = user.toJSON();
    delete data.hashedPassword;
    // ctx.body = data;
    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.login = async ctx => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    ctx.status = 401;
    return;
  }
  try {
    const user = await User.findByUsername(username);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.check = async ctx => {
  const { id } = ctx.params;
  try {
    // const post = posts.find(p => p.id.toString() === id);
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      ctx.body = {
        message: '포스트가 존재하지 않습니다.',
      };
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.logout = ctx => {
  const { id } = ctx.params;
  const index = posts.findIndex(p => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204;
};
