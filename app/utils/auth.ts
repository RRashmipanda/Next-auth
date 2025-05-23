export type User = {
  email: string;
};

export const storeUser = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getStoredUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeStoredUser = () => {
  localStorage.removeItem("user");
};
