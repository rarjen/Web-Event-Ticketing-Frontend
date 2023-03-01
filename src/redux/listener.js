import store from "./store";

let currentAuth;

function listener() {
  let previousAuth = currentAuth;

  currentAuth = store.getState().auth;
  // get state disini berguna untuk mengammbil semua data yang ada di reducer
  // .auth dia ngecek ke bagian store apakah ada object bernama auth

  if (currentAuth !== previousAuth) {
    localStorage.setItem("auth", JSON.stringify(currentAuth));
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
