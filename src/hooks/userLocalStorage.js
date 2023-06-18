// localStorage에서 사용자 정보를 관리할 때, 사용하는 Key
const USER_LOCAL_STORAGE_KEY = "POEM_USER";

export function saveUser(user) {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return user ? JSON.parse(user) : undefined;
}

export function removeUser() {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}
