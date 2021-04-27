import { BehaviorSubject } from "rxjs";
import { authenticate } from "./user";
import { handleResponse } from "../_helpers/handle-response";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function login(data) {
  return authenticate(data)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
