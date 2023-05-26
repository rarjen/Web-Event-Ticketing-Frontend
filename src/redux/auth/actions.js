import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(token, refreshToken, role, email) {
  return {
    type: USER_LOGIN,
    token,
    refreshToken,
    role,
    email,
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}
