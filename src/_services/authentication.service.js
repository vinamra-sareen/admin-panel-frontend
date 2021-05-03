import { BehaviorSubject } from "rxjs";
import { authenticate } from "./user";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  login,
  logout,
  getToken,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function getToken() {
  return localStorage.getItem("token") || '';
}

function login(data) {
  return (
    authenticate(data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const { user_name, isAdmin, token, role_id, user_id } = res.data;
          localStorage.setItem("currentUser", JSON.stringify({user_name, isAdmin}));
          localStorage.setItem("token", token);
          currentUserSubject.next({user_name, role_id, isAdmin, user_id, token });
        } else {
          currentUserSubject.next(null);
        }
      })
  );
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
