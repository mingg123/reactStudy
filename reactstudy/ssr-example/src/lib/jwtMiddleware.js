const jwt = require('jsonwebtoken');
const { User } = require('../modules/users');

exports.jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get('access_token');
  if (!token) {
    console.log('no token');
    return next();
  }
  try {
    const decoded = jwt.verify(
      token,
      // process.env.JWT_SCRET
      '17c68d95df000b051dabee2d371f7d2f3858f51128c9cc23c0794ec8c110dd9aebf7f458d171b481ffeeac7b67977495d167cfe098e81b886c8c6fdde23347c9'
    );
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
    };

    console.log(decoded);
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id);
      const token = user.generateToken();
      ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpnly: true,
      });
    }
    return next();
  } catch (e) {
    return next();
  }
};
