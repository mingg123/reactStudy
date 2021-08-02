const loggerMiddleware = (store) => (next) => (action) => {
  //미들웨어 기본 구조
  console.group(action && action.type);
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action);
  console.log("다음 상태", store.getState());
  console.groupEnd();
};
// next는 store.dispatch와 비슷한 역할. 차이점은 next(action)을 호출하면 그다음 처리해야 할 미들웨어에게 액셔을 넘겨주고 미들웨어가 없다면 리듀서에게 액션을 넘김

//같은 의미
// const loggerMiddleware = function loggerMiddleware(store) {
//     return function(next) {
//         return function (action)
//     }
// }
export default loggerMiddleware;
