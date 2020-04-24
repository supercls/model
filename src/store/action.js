
export const add = () => ({ type: "add" });
export const reduce = () => ({ type: "reduce" });
export const asyncAdd = () => dispatch => {
  //   做异步操作
  setTimeout(() => {
    dispatch({ type: "add" });
  }, 1500);
};