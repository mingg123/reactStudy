const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const api = require('./api');

//라우터 설정
router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
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
