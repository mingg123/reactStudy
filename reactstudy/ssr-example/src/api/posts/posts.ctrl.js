const { Post } = require('../../modules/post');

let postId = 1;

const posts = [{ id: 1, title: '제목', body: '내용' }];

exports.write = async ctx => {
  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
  // postId += 1;
  // const post = { id: postId, title, body };
  // posts.push(post);
  // ctx.body = post;
};

exports.list = async ctx => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.read = async ctx => {
  const { id } = ctx.params;
  try {
    // const post = posts.find(p => p.id.toString() === id);
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      ctx.body = {
        // message: '포스트가 존재하지 않습니다.',
      };
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

exports.remove = ctx => {
  const { id } = ctx.params;
  const index = posts.findIndex(p => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      // message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204;
};
