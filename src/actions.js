export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });
export const reset = () => ({ type: "RESET" });
export const asyncIncrement = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: "ASYNC_INCREMENT" });
  }, 1500);
};
