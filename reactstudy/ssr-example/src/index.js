require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const { PORT, MONGO_URI, JWT_SECRET } = process.env;
const { jwtMiddleware } = require('./lib/jwtMiddleware');
// console.log(JWT_SECRET);

// mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(e => {
//     console.error(e);
//   });

const app = new Koa();
const router = new Router();

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  });
const api = require('./api');

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

const port = 4000;

app.listen(PORT, () => {
  console.log('Listening to port %d', PORT);
});

// router.get('/', ctx => {
//   ctx.body = '홈';
// });

// router.get('/about/:name?', ctx => {
//   const { name } = ctx.params;
//   ctx.body = name ? `${name}의 소개` : `소개`;
// });

// router.get('/posts', ctx => {
//   const { id } = ctx.query;
//   ctx.body = id ? `포스트 #${id}` : `포스트 아이디가 없습니다.`;
// });

// app.use(async (ctx, next) => {
//   console.log(ctx.utl);
//   console.log(1);
//   if (ctx.query.authorized !== '1') {
//     ctx.status = 401;
//     return;
//   }
//   await next();
//   console.log('END');

//   //next호출하면 Promise를 반환함.
//   // next().then(() => {
//   //   console.log('END');
//   // });
// });

// app.use((ctx, next) => {
//   console.log(2);
//   next();
//   // ctx.body = 'Hello World';
// });

// app.use((ctx, next) => {
//   ctx.body = 'Hello World';
// });

// app.listen(4000);
